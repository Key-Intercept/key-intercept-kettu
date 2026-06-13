// @ts-nocheck
import { storage } from "@vendetta/plugin";
import { applyAllReplacements } from "./core";
import { loadDatabase, state } from "./database";
import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";


// --- EXPORTED HOOKS ---
export default {
	onLoad: () => {
		console.log("[key-intercept] onLoad started");

		// 2. Setup your patches exactly like the working plugin
		const MessageActions = findByProps("sendMessage");
		if (MessageActions?.sendMessage) {
			unpatcher = before("sendMessage", MessageActions, (args) => {
				const [channelId, messageData] = args as [string, { content?: unknown } & Record<string, unknown>];

				const ChannelStore = findByProps("getChannel", "getDMFromUserId");
				const GuildStore = findByProps("getGuild");

				const channel = ChannelStore?.getChannel?.(channelId);
				if (!channel) return;

				let nameToCheck: string | null = null;
				let idToCheck: string | null = null;

				if (channel.guild_id) {
					const guild = GuildStore?.getGuild(channel.guild_id);
					nameToCheck = guild?.name ?? null;
					idToCheck = guild?.id ?? null;
				} else {
					if (channel.name) {
						nameToCheck = channel.name;
					} else if (channel.recipients?.length > 0) {
						if (currentUser) {
							const recipientNames = channel.recipients
								.filter((id: string) => id !== currentUser.id)
								.map((id: string) => UserStore?.getUser?.(id)?.username)
								.filter(Boolean);
							nameToCheck = recipientNames.join(", ");
							idToCheck = channel.id ?? null;
						}
					}
				}

				if (state.whitelist.length > 0) {
					const nameMatches = !!nameToCheck && state.whitelist.some(item => item.server_name === nameToCheck);
					const idMatches = !!idToCheck && state.whitelist.some(item => item.discord_id === idToCheck);
					if ((nameToCheck || idToCheck) && !nameMatches && !idMatches) return;
				}

				const channelName = channel?.name?.toLowerCase?.() ?? "";
				if (channelName.includes("sfw") && !channelName.includes("nsfw")) return;

				if (typeof messageData === "object" && messageData !== null && "content" in messageData && typeof messageData.content === "string") {
					const previousMessage = getPreviousMessage(channelId);

					const context = {
						previousMessage,
						previousSenderId: previousMessage?.author?.id ?? null,
						currentUserId: currentUser?.id ?? null,
					};

					const result = applyAllReplacements(messageData.content, channelId, context, state);
					messageData.content = result.message;

					if (result.editPreviousMessage) {
						editPreviousMessage(result.editPreviousMessage.channelId, result.editPreviousMessage.messageId, result.editPreviousMessage.newContent);
					}
				} return args;
			});
		}

		// 3. Database initialization
		const UserStore = findByProps("getCurrentUser");
		const currentUser = UserStore?.getCurrentUser?.();
		if (currentUser) {
			loadDatabase(currentUser.id, currentUser.username).catch(console.error);
		}
	},
	onUnload: () => {
		// 4. Clean unpatching
		if (unpatcher) unpatcher();
	}
};