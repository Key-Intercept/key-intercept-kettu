/*
 * Kettu Plugin - key-intercept
 * A text transformation plugin for Kettu
 */

import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

import { editPreviousMessage, getPreviousMessage, getPreviousMessageSender } from "./getPreviousMessage";
import {
	applyDrone as applyDroneCore,
	applyReplacements as applyReplacementsCore,
	config,
	getData,
	whitelist,
} from "./core";

const logger = {
	log: (...args: unknown[]) => console.log("[key-intercept]", ...args),
};

let unpatchSendMessage: (() => void) | null = null;

export function applyDrone(msg: string, drone_end: Date, speech_header: string, speech_footer: string, action_header: string, action_footer: string, whisper_header: string, whisper_footer: string, loud_header: string, loud_footer: string, drone_health: number, channelID: string, verbose: boolean = true) {
	const UserStore = findByProps("getCurrentUser", "getUser");
	const currentUser = UserStore?.getCurrentUser?.();
	const previousMessage = getPreviousMessage(channelID);
	const previousSender = getPreviousMessageSender(channelID);
	const result = applyDroneCore(msg, drone_end, speech_header, speech_footer, action_header, action_footer, whisper_header, whisper_footer, loud_header, loud_footer, drone_health, channelID, {
		previousMessage,
		previousSenderId: previousSender?.id ?? null,
		currentUserId: currentUser?.id ?? null,
	}, verbose);

	if (result.editPreviousMessage) {
		editPreviousMessage(result.editPreviousMessage.channelId, result.editPreviousMessage.messageId, result.editPreviousMessage.newContent);
	}

	return result.message;
}

export function applyReplacements(msg: string, channelId: string): string {
	const UserStore = findByProps("getCurrentUser", "getUser");
	const currentUser = UserStore?.getCurrentUser?.();
	const previousMessage = getPreviousMessage(channelId);
	const previousSender = getPreviousMessageSender(channelId);
	const result = applyReplacementsCore(msg, channelId, {
		previousMessage,
		previousSenderId: previousSender?.id ?? null,
		currentUserId: currentUser?.id ?? null,
	});

	if (result.editPreviousMessage) {
		editPreviousMessage(result.editPreviousMessage.channelId, result.editPreviousMessage.messageId, result.editPreviousMessage.newContent);
	}

	return result.message;
}


const plugin = {
	name: "key intercept",
	description: "you dont deserve to talk properly",
	authors: [{ name: "supersliser", id: "277137325342064640" }],
	async start() {
		const UserStore = findByProps("getCurrentUser", "getUser");
		const currentUser = UserStore?.getCurrentUser?.();
		if (currentUser) {
			await getData(currentUser.id, currentUser.username);
		}

		// Patch sendMessage to intercept messages before sending
		const MessageActions = findByProps("sendMessage");
		if (MessageActions && MessageActions.sendMessage) {
			unpatchSendMessage = before("sendMessage", MessageActions, (args) => {
				const [channelId, messageData] = args as [string, { content?: unknown } & Record<string, unknown>];
				
				const ChannelStore = findByProps("getChannel", "getDMFromUserId");
				const GuildStore = findByProps("getGuild", "getGuilds");
				const UserStore = findByProps("getCurrentUser", "getUser");

				const channel = ChannelStore?.getChannel?.(channelId);
				if (!channel) return;
				
				if (config?.debug) logger.log("Channel object:", channel);

				let nameToCheck: string | null = null;
				let idToCheck: string | null = null;

				if (channel.guild_id) {
					const guild = GuildStore?.getGuild(channel.guild_id);
					if (config?.debug) logger.log("Guild object:", guild);
					nameToCheck = guild?.name ?? null;
					idToCheck = guild?.id ?? null;
				} else {
					if (channel.name) {
						nameToCheck = channel.name;
					} else if (channel.recipients?.length > 0) {
						const currentUser = UserStore.getCurrentUser();
						const recipientNames = channel.recipients
							.filter((id: string) => id !== currentUser.id)
							.map((id: string) => UserStore.getUser(id)?.username)
							.filter(Boolean);
						nameToCheck = recipientNames.join(", ");
						idToCheck = channel.id ?? null;
					}
				}

				if (config?.debug) logger.log(`Name to check against whitelist: "${nameToCheck}"`);
				if (config?.debug) logger.log(`ID to check against whitelist: "${idToCheck}"`);

				if (whitelist.length > 0) {
					const nameMatches = !!nameToCheck && whitelist.some(item => item.server_name === nameToCheck);
					const idMatches = !!idToCheck && whitelist.some(item => item.discord_id === idToCheck);

					if ((nameToCheck || idToCheck) && !nameMatches && !idMatches) {
						if (config?.debug) {
							logger.log(
								`No whitelist match for name "${nameToCheck}" or ID "${idToCheck}", skipping modifications.`
							);
						}
						return;
					}
				}

				const channelName = channel?.name?.toLowerCase?.() ?? "";
				if (channelName.includes("sfw") && !channelName.includes("nsfw")) {
					if (config?.debug) logger.log("SFW channel detected, skipping modifications");
					return;
				}

				logger.log("Intercepted message send: applying replacements");
				
				// Modify the message content
				if (typeof messageData === "object" && messageData !== null && "content" in messageData && typeof messageData.content === "string") {
					const output = applyReplacements(messageData.content, channelId);
					messageData.content = output;
				}
			});

			logger.log("key-intercept: Enabled - message interception active");
		}
	},

	stop() {
		if (unpatchSendMessage) {
			unpatchSendMessage();
			unpatchSendMessage = null;
		}
		logger.log("key-intercept: Disabled");
	},
};

export default plugin;