/*
 * Kettu Plugin - key-intercept
 * A text transformation plugin for Kettu
 */

let before: any = null;
let findByProps: any = null;

import { editPreviousMessage, getPreviousMessage, getPreviousMessageSender } from "./getPreviousMessage";
import {
	applyDrone as applyDroneCore,
	applyReplacements as applyReplacementsCore,
	config,
	getData,
	whitelist,
} from "./core";

const logger = {
	log: (...args: unknown[]) => {
		try {
			console.log("[key-intercept]", ...args);
		} catch (e) {
		}
	},
};

function safeAlert(title: string, message: string) {
	try {
		if (findByProps) {
			const ReactNative = findByProps("Alert");
			if (ReactNative?.Alert) {
				ReactNative.Alert.alert(title, message);
			}
		}
	} catch (e) {
		logger.log("Alert failed:", title, message, e);
	}
}

let unpatchSendMessage: (() => void) | null = null;

function applyDrone(msg: string, drone_end: Date, speech_header: string, speech_footer: string, action_header: string, action_footer: string, whisper_header: string, whisper_footer: string, loud_header: string, loud_footer: string, drone_term: string, drone_health: number, channelID: string, verbose: boolean = true) {
	const UserStore = findByProps("getCurrentUser", "getUser");
	const currentUser = UserStore?.getCurrentUser?.();
	const previousMessage = getPreviousMessage(channelID);
	const previousSender = getPreviousMessageSender(channelID);
	const result = applyDroneCore(msg, drone_end, speech_header, speech_footer, action_header, action_footer, whisper_header, whisper_footer, loud_header, loud_footer, drone_term, drone_health, channelID, {
		previousMessage,
		previousSenderId: previousSender?.id ?? null,
		currentUserId: currentUser?.id ?? null,
	}, verbose);

	if (result.editPreviousMessage) {
		editPreviousMessage(result.editPreviousMessage.channelId, result.editPreviousMessage.messageId, result.editPreviousMessage.newContent);
	}

	return result.message;
}

function applyReplacements(msg: string, channelId: string): string {
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

export default {
	onLoad: () => {
		logger.log("Plugin is starting up!");

		// Get Vendetta modules from globalThis (set by host environment)
		const vendettaBefore = (globalThis as any)?.vendetta?.patcher?.before;
		const vendettaFindByProps = (globalThis as any)?.vendetta?.metro?.findByProps;

		if (!vendettaBefore || !vendettaFindByProps) {
			throw new Error("Vendetta modules not available. Plugin requires Vendetta host environment.");
		}

		logger.log("Vendetta modules loaded successfully");

		// Set global for getPreviousMessage functions
		(globalThis as any).__kettuFindByProps = vendettaFindByProps;

		// Update local references
		before = vendettaBefore;
		findByProps = vendettaFindByProps;

		const MessageActions = findByProps("sendMessage");
		if (MessageActions && MessageActions.sendMessage) {
			unpatchSendMessage = before("sendMessage", MessageActions, ((args: any) => {
				try {
					const [channelId, messageData] = args as [string, { content?: unknown } & Record<string, unknown>];

					logger.log("Intercepting message in channel:", channelId);

					const ChannelStore = findByProps("getChannel", "getDMFromUserId");
					const GuildStore = findByProps("getGuild", "getGuilds");
					const UserStore = findByProps("getCurrentUser", "getUser");

					const channel = ChannelStore?.getChannel?.(channelId);
					if (!channel) {
						console.log("Channel not found:", channelId);
						return;
					}

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
							const currentUser = UserStore.getCurrentUser();
							const recipientNames = channel.recipients
								.filter((id: string) => id !== currentUser.id)
								.map((id: string) => UserStore.getUser(id)?.username)
								.filter(Boolean);
							nameToCheck = recipientNames.join(", ");
							idToCheck = channel.id ?? null;
						}
					}

					if (whitelist && whitelist.length > 0) {
						const nameMatches = !!nameToCheck && whitelist.some(item => item.server_name === nameToCheck);
						const idMatches = !!idToCheck && whitelist.some(item => item.discord_id === idToCheck);

						if ((nameToCheck || idToCheck) && !nameMatches && !idMatches) {
							console.log("Message blocked by whitelist");
							return;
						}
					}

					const channelName = channel?.name?.toLowerCase?.() ?? "";
					if (channelName.includes("sfw") && !channelName.includes("nsfw")) {
						console.log("Message in SFW channel, skipping");
						return;
					}

					if (typeof messageData === "object" && messageData !== null && "content" in messageData && typeof messageData.content === "string") {
						const output = applyReplacements(messageData.content, channelId);
						messageData.content = output;
						console.log("Message transformed");
					}
					return args;
				} catch (e) {
					console.log("Error in message interception:", e);
					return args;
				}
			}) as any);
		} else {
			console.log("Error: Could not find sendMessage!");
			safeAlert("Error", "Could not find sendMessage!");
		}

		const UserStore = findByProps("getCurrentUser", "getUser");
		const currentUser = UserStore?.getCurrentUser?.();
		if (currentUser) {
			console.log("Current user found, loading database...");
			getData(currentUser.id, currentUser.username)
				.then(() => {
					console.log("Database connected successfully!");
					safeAlert("Key-Intercept", "Database connected successfully!");
				})
				.catch(err => {
					console.log("Database connection failed:", err);
					safeAlert("DB Error", String(err));
				});
		} else {
			console.log("Current user not found");
		}

		safeAlert("Key-Intercept", "The plugin is executing!");
	},

	onUnload: () => {
		if (unpatchSendMessage) {
			unpatchSendMessage();
			unpatchSendMessage = null;
		}
	},
};
