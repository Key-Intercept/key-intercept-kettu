import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { PostgrestClient } from "@supabase/postgrest-js";
import { RealtimeClient } from "@supabase/realtime-js";

// --- GLOBAL STATE ---
let supabaseInstance: any = null;
let unpatchSendMessage: (() => void) | null = null;

export let config: any;
export let droneConfig: any;
export let rules: any[] = [];
export let whitelist: any[] = [];
export let petWords: string[] = [];
export let censoredWords: string[] = [];

// --- DISCORD UTILS ---
function getPreviousMessage(channelId: string) {
	const MessageStore = findByProps("getMessage", "getMessages");
	const messages = MessageStore?.getMessages?.(channelId);
	if (!messages) return null;
	const list = Array.isArray(messages) ? messages : messages._array ?? Object.values(messages);
	return list.at(-1) ?? null;
}

function editPreviousMessage(channelId: string, messageId: string, newContent: string) {
	const MessageActions = findByProps("editMessage");
	if (!MessageActions?.editMessage) return;
	MessageActions.editMessage(channelId, messageId, { content: newContent });
}

function getPreviousMessageSender(channelId: string) {
	const previousMessage = getPreviousMessage(channelId);
	return previousMessage?.user ?? null;
}

// --- SUPABASE & DATA ---
export async function getSupabase() {
	if (!supabaseInstance) {
		const SUPABASE_URL = "https://qjzgfwithyvmwctesnqs.supabase.co";
		const SUPABASE_KEY = "sb_publishable_cxq8QZp9BDtjE4G5qiPCFA_lUZ4Cbdh";

		const postgrest = new PostgrestClient(`${SUPABASE_URL}/rest/v1`, {
			headers: {
				apikey: SUPABASE_KEY,
				Authorization: `Bearer ${SUPABASE_KEY}`,
			},
		});

		const realtime = new RealtimeClient(`${SUPABASE_URL}/realtime/v1`, {
			params: { apikey: SUPABASE_KEY },
		});
		realtime.connect();

		supabaseInstance = {
			from: (table: string) => postgrest.from(table),
			channel: (topic: string, params?: any) => realtime.channel(topic, params),
		};
	}
	return supabaseInstance;
}

export async function createNewUser(userID: string, username: string): Promise<void> {
	await (await getSupabase()).from("profiles").insert({ "display_name": username, "discord_id": userID });
}

export async function createNewConfig(userID: string): Promise<void> {
	const configData = await (await getSupabase()).from("Config").insert({}).select().single();
	await (await getSupabase()).from("Sub_Config_Access").insert({ "sub_id": userID, "config_id": configData.data!.id });
	await (await getSupabase()).from("Drone_Config").insert({ "config_id": configData.data!.id, "speech_header": "This Drone Says:", "speech_footer": "It Obeys", "action_header": "Drone::Action::Performs(", "action_footer": ");", "whisper_header": "Drone Initiating Quiet Mode", "whisper_footer": "Normal Volume Restored", "loud_header": "Volume.set(500);", "loud_footer": "Volume.set(100)" });
}

export async function getData(userID: string, username: string) {
	const currentUserId = userID;
	let subIDData = await (await getSupabase()).from("profiles").select("id").eq("discord_id", currentUserId).single();
	if (subIDData.data === null) {
		await createNewUser(userID, username);
		subIDData = await (await getSupabase()).from("profiles").select("id").eq("discord_id", currentUserId).single();
	}
	const subID = subIDData.data!.id;
	let subData = await (await getSupabase()).from("Sub_Config_Access").select().eq("sub_id", subID);
	
	if (subData.data?.length === 0) {
		await createNewConfig(subID!);
		subData = await (await getSupabase()).from("Sub_Config_Access").select().eq("sub_id", subID);
	}
	config = {} as any;
	config.id = subData.data![0].config_id;

	(await getSupabase()).channel("public:config").on("postgres_changes", { event: "*", schema: "public", table: "Config" }, async () => { await getConfig(); }).subscribe();
	(await getSupabase()).channel("public:rules").on("postgres_changes", { event: "*", schema: "public", table: "Rules" }, async () => { await getRules(); }).subscribe();
	(await getSupabase()).channel("public:server_whitelist_items").on("postgres_changes", { event: "*", schema: "public", table: "Server_Whitelist_Items" }, async () => { await getWhitelist(); }).subscribe();
	(await getSupabase()).channel("public:pet_type_words").on("postgres_changes", { event: "*", schema: "public", table: "Config" }, async () => { await getConfig(); await getPetWords(); }).subscribe();
	(await getSupabase()).channel("public:censored_words").on("postgres_changes", { event: "*", schema: "public", table: "Censored_Words" }, async () => { await getCensoredWords(); }).subscribe();
	(await getSupabase()).channel("public:drone_config").on("postgres_changes", { event: "*", schema: "public", table: "Drone_Config" }, async () => { await getDroneConfig(); }).subscribe();

	await getConfig();
	await getRules();
	await getWhitelist();
	await getPetWords();
	await getCensoredWords();
	await getDroneConfig();
}

export async function getConfig() {
	const configData = await (await getSupabase()).from("Config").select().eq("id", config.id).single();
	config.id = configData.data!.id;
	config.rules_end = new Date(configData.data!.rules_end);
	config.gag_end = new Date(configData.data!.gag_end);
	config.pet_end = new Date(configData.data!.pet_end);
	config.bimbo_end = new Date(configData.data!.bimbo_end);
	config.bimbo_word_length = configData.data!.bimbo_word_length;
	config.pet_amount = configData.data!.pet_amount;
	config.horny_end = new Date(configData.data!.horny_end);
	config.pet_type = configData.data!.pet_type;
	config.drone_end = new Date(configData.data!.drone_end);
	config.debug = configData.data!.debug;
	config.uwu_end = new Date(configData.data!.uwu_end);
	config.censored_end = new Date(configData.data!.censored_end);
	config.censored_replacement = configData.data!.censored_replacement;
}

export async function getRules() {
	const rulesData = await (await getSupabase()).from("Rules").select().eq("config_id", config.id).order("id", { ascending: false });
	rules = rulesData.data!;
}

export async function getWhitelist() {
	const whitelistData = await (await getSupabase()).from("Server_Whitelist_Items").select().eq("config_id", config.id);
	whitelist = whitelistData.data!.map((item: any) => ({ id: item.id, config_id: item.config_id, server_name: item.server_name, discord_id: item.discord_id }));
}

export async function getPetWords() {
	const petWordsData = await (await getSupabase()).from("Pet_Type_Words").select().eq("pet_type", config.pet_type);
	petWords = [];
	for (const wordData of petWordsData.data!) { petWords.push(wordData.word); }
}

export async function getCensoredWords() {
	const censoredWordsData = await (await getSupabase()).from("Censored_Words").select().eq("config_id", config.id);
	censoredWords = [];
	for (const wordData of censoredWordsData.data!) { censoredWords.push(wordData.word); }
}

export async function getDroneConfig() {
	const droneConfigData = await (await getSupabase()).from("Drone_Config").select().eq("config_id", config.id).single();
	droneConfig = {
		config_id: droneConfigData.data!.config_id as bigint,
		drone_health: droneConfigData.data!.drone_health as number,
		speech_header: droneConfigData.data!.speech_header as string,
		speech_footer: droneConfigData.data!.speech_footer as string,
		action_header: droneConfigData.data!.action_header as string,
		action_footer: droneConfigData.data!.action_footer as string,
		whisper_header: droneConfigData.data!.whisper_header as string,
		whisper_footer: droneConfigData.data!.whisper_footer as string,
		loud_header: droneConfigData.data!.loud_header as string,
		loud_footer: droneConfigData.data!.loud_footer as string,
	}
}

// --- LOGIC ---
export function shouldApplyRules(rules_end: Date): boolean { return Date.now() <= rules_end.getTime(); }
export function shouldApplyGag(gag_end: Date): boolean { return Date.now() <= gag_end.getTime(); }
export function shouldApplyPet(pet_end: Date, pet_amount: number): boolean { return Date.now() <= pet_end.getTime() && pet_amount !== 0; }
export function shouldApplyBimbo(bimbo_end: Date): boolean { return Date.now() <= bimbo_end.getTime(); }
export function shouldApplyHorny(horny_end: Date): boolean { return Date.now() <= horny_end.getTime(); }
export function shouldApplyDrone(drone_end: Date): boolean { return Date.now() <= drone_end.getTime(); }
export function shouldApplyUWU(uwu_end: Date): boolean { return Date.now() <= uwu_end.getTime(); }
export function shouldApplyCensored(censored_end: Date): boolean { return Date.now() <= censored_end.getTime(); }
export function word_is_link(word: string): boolean { return (word[0] == "h" && word[1] == "t" && word[2] == "t" && word[3] == "p"); }

export function applyRules(msg: string, rules: any[], rules_end: Date): string {
	if (!shouldApplyRules(rules_end)) return msg;
	let output = msg.normalize("NFKC");
	rules.sort((a, b) => a.order - b.order);
	for (const rule of rules) {
		if (!rule.enabled) continue;
		const temp = new RegExp(rule.rule_regex.toString().replace(/\\\\/g, "\\"));
		const matchCallback = (match: string, ..._args: unknown[]): string => {
			if (Math.random() > rule.chance_to_apply) return match;
			return match.replace(new RegExp(temp, "i"), rule.rule_replacement);
		};
        output = output.replace(new RegExp(temp, "gi"), matchCallback);
	}
	return output;
}

export function applyGag(msg: string, gag_end: Date): string {
	if (!shouldApplyGag(gag_end)) return msg;
	let output = "";
	let inEmote = false;
	const remainChars = ["a", "e", "i", "o", "u", "g", "h", "A", "E", "I", "O", "U", "G", "H", "?", "!", ".", ",", ":", ";", "#", "*", "-", "(", ")", "~"];
	for (const word of msg.split(" ")) {
		let outword = "";
		if (word_is_link(word)) { outword = word + " "; continue; }
		for (const char of word) {
			if (char === ":" && !inEmote) { inEmote = true; outword += char; continue; } 
            else if (char === ":" && inEmote) { inEmote = false; outword += char; continue; }
			if (inEmote) { outword += char; continue; }
			if (remainChars.includes(char)) { outword += char; } 
            else { outword += (!(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) ? ["G", "H"][Math.floor(Math.random() * 2)] : ["g", "h"][Math.floor(Math.random() * 2)]; }
		}
		output += outword + " ";
	}
	return output;
}

export function applyPet(msg: string, pet_end: Date, pet_amount: number, pet_words: string[]) {
	if (!shouldApplyPet(pet_end, pet_amount)) return msg;
	let output = "";
	for (const word of msg.split(" ")) {
		if (word_is_link(word)) { output += word + " "; continue; }
		if (word[0] === ":" && word[word.length - 1] === ":") { output += word + " "; continue; }
		if (Math.random() < pet_amount) { output += pet_words[Math.floor(Math.random() * (pet_words.length))]; } 
        else { output += word; }
		output += " ";
	}
	return output;
}

export function applyBimbo(msg: string, bimbo_end: Date, bimbo_word_length: number) {
	if (!shouldApplyBimbo(bimbo_end)) return msg;
	let output = "";
	const pronouns = ["i", "you", "he", "she", "it", "we", "they", "is"];
	const maxWordLength = bimbo_word_length;
	const likeChance = 0.1;
	const gargle_words = ["like", "hehe", "uhh", "totally", "so dumbb", "ummm", "hhhhh"];
	for (const word of msg.split(" ")) {
		let changed = false;
		if (!word_is_link(word)) {
			if (pronouns.includes(word.toLowerCase())) { output += word + " like totally "; changed = true; }
			if (word.length > maxWordLength) { return output + word.substring(0, maxWordLength - 2) + "uhhhh long words harddd hehe"; }
		}
		if (!changed) { output += word + " "; }
		if (Math.random() < likeChance && !word_is_link(word)) { output += gargle_words[Math.floor(Math.random() * (gargle_words.length - 1))] + " "; }
	}
	return output;
}

export function applyHorny(msg: string, horny_end: Date, horny_words: string[] = ["hmmph", "nngh", "ahhh", "ooh", "oohh", "mmm", "hehe", "hehehe", "heheh", "eheh", "ehehe", "eheheh", "guhh", "pleasee", "need to cumm", "oh goshh", "ohhh", "ahhh", "cummm", "gggg"]) {
	if (!shouldApplyHorny(horny_end)) return msg;
	let output = "";
	for (const word of msg.split(" ")) {
		if (!word_is_link(word) && Math.random() < 0.75) { output += horny_words[Math.floor(Math.random() * (horny_words.length - 1))] + " "; }
		output += word + " ";
	}
	return output;
}

export function applyUWU(msg: string, uwu_end: Date) {
	if (!shouldApplyUWU(uwu_end)) return msg;
	let output = "";
	for (let word of msg.split(" ")) {
		if (word_is_link(word)) { output += word + " "; continue; }
		word = word.replace(new RegExp("th", "gi"), "d").replace(new RegExp("r|l", "gi"), "w").replace(new RegExp("u", "gi"), "uw").replace(new RegExp("n([aeiou])", "gi"), "ny$1").replace(new RegExp("ove", "gi"), "uv");
		output += word + " "
	}
	return output;
}

export function applyCensored(msg: string, censoredWords: string[], replacement: string, censored_end: Date) {
	if (!shouldApplyCensored(censored_end)) return msg;
	for (let word of censoredWords) {
		let replacementText = "";
		for (let i = 0; i < word.length; i += replacement.length) { replacementText += replacement }
		msg = msg.replace(new RegExp(word, "gi"), replacementText);
	}
	return msg;
}

export function applyDrone(msg: string, drone_end: Date, speech_header: string, speech_footer: string, action_header: string, action_footer: string, whisper_header: string, whisper_footer: string, loud_header: string, loud_footer: string, drone_health: number, channelId: string, context: any = {}): any {
	if (!shouldApplyDrone(drone_end)) return { message: msg };
	if (drone_health < 10) return { message: "`This Drone haaaaas receieved bzzzzt, ppplease provide repaiirs using beep '/repair', tthank youu. Returned Error: 0x7547372482`" };

	let containsLink = false;
	for (const word of msg.split(" ")) { if (word_is_link(word)) containsLink = true; }

	let output = "";
	if (!containsLink) {
		msg = msg.replace(new RegExp("\\bMe\\b", "gi"), "This Drone").replace(new RegExp("\\bMy\\b", "gi"), "Its'").replace(new RegExp("\\bI am\\b", "gi"), "It is").replace(new RegExp("\\bI(')?m\\b", "gi"), "It is").replace(new RegExp("\\bI\\b", "gi"), "This Drone");
	}

	let ignoreFirstOne = false;
	for (const word of msg.split(" ")) {
		if (ignoreFirstOne) { ignoreFirstOne = false; continue; }
		if (!word_is_link(word) && Math.random() > (drone_health / 100)) { output += Math.random() > 0.5 ? "`beep` " : "`bzzzt` "; }
		output += word + " ";
	}

	const tempOutput = output;
	output = "";
	let lastTriggered = 0;

	for (const word of tempOutput.split(" ")) {
		let outword = "";
		if (!word_is_link(word)) {
			for (const char of word) {
				outword += char;
				lastTriggered += 1;
				if (Math.random() + (lastTriggered / 100) - 1 > (drone_health / 100) && char !== "`") {
					lastTriggered = 0;
					for (let i = 0; i < Math.floor(Math.random() * 10); i++) { outword += char; }
				}
			}
		} else { outword = word; }
		output += outword + " ";
	}

	const previousMessage = context.previousMessage ?? null;
	const previousSenderId = context.previousSenderId ?? previousMessage?.user?.id ?? null;
	const currentUserId = context.currentUserId ?? null;

	let header = speech_header;
	let footer = speech_footer;

	if (msg.startsWith("**")) { header = loud_header; footer = loud_footer; }
	else if (msg.startsWith("*")) { header = action_header; footer = action_footer; }
	else if (msg.startsWith("-#")) { header = whisper_header; footer = whisper_footer; }

	const continuingOwnBlock = previousSenderId != null && currentUserId != null && previousSenderId === currentUserId;
	const footerSuffix = "\n`" + footer + "`";
	const previousHadMatchingFooter = previousMessage?.content.endsWith(footerSuffix) ?? false;
	const editPreviousMessage = continuingOwnBlock && previousHadMatchingFooter && previousMessage ? { channelId, messageId: previousMessage.id, newContent: previousMessage.content.replace(footerSuffix, "") } : undefined;

	const formattedBody = output.trimEnd();
	let formattedMessage = formattedBody + footerSuffix;
	if (!continuingOwnBlock || !previousHadMatchingFooter) { formattedMessage = "`" + header + "`\n" + formattedMessage; }

	return { message: formattedMessage, editPreviousMessage };
}

export function applyReplacements(msg: string, channelId: string): string {
    if (!config) return msg;

	const UserStore = findByProps("getCurrentUser", "getUser");
	const currentUser = UserStore?.getCurrentUser?.();
	const previousMessage = getPreviousMessage(channelId);
	const previousSender = getPreviousMessageSender(channelId);
    
    const context = { previousMessage, previousSenderId: previousSender?.id ?? null, currentUserId: currentUser?.id ?? null };

	msg = applyRules(msg, rules, config.rules_end);
	msg = applyUWU(msg, config.uwu_end);
	msg = applyHorny(msg, config.horny_end);
	msg = applyPet(msg, config.pet_end, config.pet_amount, petWords);
	msg = applyBimbo(msg, config.bimbo_end, config.bimbo_word_length);
	msg = applyCensored(msg, censoredWords, config.censored_replacement, config.censored_end);
	msg = applyGag(msg, config.gag_end);

	if (droneConfig != null) {
		const droneResult = applyDrone(msg, config.drone_end, droneConfig.speech_header, droneConfig.speech_footer, droneConfig.action_header, droneConfig.action_footer, droneConfig.whisper_header, droneConfig.whisper_footer, droneConfig.loud_header, droneConfig.loud_footer, droneConfig.drone_health, channelId, context);
		msg = droneResult.message;
		
        if (droneResult.editPreviousMessage) {
            editPreviousMessage(droneResult.editPreviousMessage.channelId, droneResult.editPreviousMessage.messageId, droneResult.editPreviousMessage.newContent);
        }
	}
	return msg;
}

// --- PLUGIN ENTRY POINT ---
export const onLoad = () => {
    const ReactNative = findByProps("Alert");
    try {
        if (ReactNative?.Alert) { ReactNative.Alert.alert("Key-Intercept", "The plugin is successfully executing!"); }

        const MessageActions = findByProps("sendMessage");
        if (MessageActions && MessageActions.sendMessage) {
            
            unpatchSendMessage = before("sendMessage", MessageActions, (args) => {
                const [channelId, messageData] = args as [string, { content?: unknown } & Record<string, unknown>];
                if (ReactNative?.Alert) ReactNative.Alert.alert("Key-Intercept", "Intercepting your message right now!");

                const ChannelStore = findByProps("getChannel", "getDMFromUserId");
                const GuildStore = findByProps("getGuild", "getGuilds");
                const UserStore = findByProps("getCurrentUser", "getUser");

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
                        const currentUser = UserStore.getCurrentUser();
                        const recipientNames = channel.recipients.filter((id: string) => id !== currentUser.id).map((id: string) => UserStore.getUser(id)?.username).filter(Boolean);
                        nameToCheck = recipientNames.join(", ");
                        idToCheck = channel.id ?? null;
                    }
                }

                if (whitelist && whitelist.length > 0) {
                    const nameMatches = !!nameToCheck && whitelist.some(item => item.server_name === nameToCheck);
                    const idMatches = !!idToCheck && whitelist.some(item => item.discord_id === idToCheck);
                    if ((nameToCheck || idToCheck) && !nameMatches && !idMatches) return;
                }

                const channelName = channel?.name?.toLowerCase?.() ?? "";
                if (channelName.includes("sfw") && !channelName.includes("nsfw")) return;

                if (typeof messageData === "object" && messageData !== null && "content" in messageData && typeof messageData.content === "string") {
                    const output = applyReplacements(messageData.content, channelId);
                    messageData.content = output;
                }
                return args;
            });
        } else {
            if (ReactNative?.Alert) ReactNative.Alert.alert("Error", "Could not find sendMessage!");
        }

        const UserStore = findByProps("getCurrentUser", "getUser");
        const currentUser = UserStore?.getCurrentUser?.();
        if (currentUser) {
            getData(currentUser.id, currentUser.username).then(() => {
                if (ReactNative?.Alert) ReactNative.Alert.alert("Key-Intercept", "Database connected successfully!");
            }).catch(err => {
                if (ReactNative?.Alert) ReactNative.Alert.alert("DB Error", String(err));
            });
        }
    } catch (fatalError) {
        if (ReactNative?.Alert) { ReactNative.Alert.alert("FATAL ERROR", String(fatalError)); }
    }
};

export const onUnload = () => {
    if (unpatchSendMessage) {
        unpatchSendMessage();
        unpatchSendMessage = null;
    }
};