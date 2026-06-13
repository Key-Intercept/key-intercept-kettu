export type DroneContext = {
    previousMessage?: any | null;
    previousSenderId?: string | null;
    currentUserId?: string | null;
};

export type DroneEditRequest = {
    channelId: string;
    messageId: string;
    newContent: string;
};

class IndexRange { constructor(public start: number, public stop: number) {} }
class IndexMatch { constructor(public preNormalized: IndexRange, public postNormalized: IndexRange) {} }

export class NormalizedString {
    str: string;
    verbose: boolean;
    nfkdStr: string = "";
    indices: IndexMatch[] = [];

    constructor(str: string, verbose: boolean) {
        this.str = str;
        this.verbose = verbose;
        this.rebuildNFKDMappings();
    }

    replace(regex: string | RegExp, fn: (match: string) => string): string {
        const regexWithIndices = new RegExp(regex, "gid");
        let match;
        while ((match = regexWithIndices.exec(this.nfkdStr)) != null) {
            // @ts-ignore
            const indices = match.indices;
            let preRange = this.convertToPreNormalizedIndices(indices[0][0], indices[0][1]);
            this.str = this.str.substring(0, preRange.start) + fn(match[0]) + this.str.substring(preRange.stop);
            this.rebuildNFKDMappings();
        }
        return this.str;
    }

    rebuildNFKDMappings() {
        this.nfkdStr = "";
        this.indices = [];
        for (let i = 0; i < this.str.length; i++) {
            let char = this.str[i];
            let preIndx = [i, i + 1];
            if (char.charCodeAt(0) >= 55296 && char.charCodeAt(0) <= 57343) {
                char = this.str.substring(i, i + 2);
                preIndx[1] = i + 2;
                i++;
            }
            const nfkdChar = char.normalize("NFKD");
            let postIndx = [this.nfkdStr.length, this.nfkdStr.length + nfkdChar.length];
            this.indices.push(new IndexMatch(new IndexRange(preIndx[0], preIndx[1]), new IndexRange(postIndx[0], postIndx[1])));
            this.nfkdStr += nfkdChar;
        }
    }

    convertToPreNormalizedIndices(postStart: number, postEnd: number): IndexRange {
        let preStart = -1, preEnd = -1;
        for (let index of this.indices) {
            if (preStart == -1 && index.postNormalized.start <= postStart && index.postNormalized.stop > postStart) preStart = index.preNormalized.start;
            if (preEnd == -1 && index.postNormalized.start < postEnd && index.postNormalized.stop >= postEnd) preEnd = index.preNormalized.stop;
        }
        return new IndexRange(preStart, preEnd);
    }
}

export function word_is_link(word: string): boolean {
    return (word[0] == "h" && word[1] == "t" && word[2] == "t" && word[3] == "p");
}

function applyRules(msg: string, rules: any[], rules_end: Date): string {
    if (Date.now() > rules_end.getTime()) return msg;
    let output = msg.normalize("NFKC");
    rules.sort((a, b) => a.order - b.order);
    for (const rule of rules) {
        if (!rule.enabled) continue;
        const temp = new RegExp(rule.rule_regex.toString().replaceAll("\\\\", "\\"));
        const matchCallback = (match: string): string => {
            if (Math.random() > rule.chance_to_apply) return match;
            return match.replace(new RegExp(temp, "i"), rule.rule_replacement);
        };
        if (rule.regex_normalize) {
            output = new NormalizedString(output, false).replace(new RegExp(temp, "gi"), matchCallback);
        } else {
            output = output.replace(new RegExp(temp, "gi"), matchCallback);
        }
    }
    return output;
}

function applyGag(msg: string, gag_end: Date): string {
    if (Date.now() > gag_end.getTime()) return msg;
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

function applyPet(msg: string, pet_end: Date, pet_amount: number, pet_words: string[]) {
    if (Date.now() > pet_end.getTime() || pet_amount === 0 || !pet_words.length) return msg;
    let output = "";
    for (const word of msg.split(" ")) {
        if (word_is_link(word)) { output += word + " "; continue; }
        if (word[0] === ":" && word[word.length - 1] === ":") { output += word + " "; continue; }
        if (Math.random() < pet_amount) { output += pet_words[Math.floor(Math.random() * pet_words.length)]; } 
        else { output += word; }
        output += " ";
    }
    return output;
}

function applyBimbo(msg: string, bimbo_end: Date, bimbo_word_length: number) {
    if (Date.now() > bimbo_end.getTime()) return msg;
    let output = "";
    const pronouns = ["i", "you", "he", "she", "it", "we", "they", "is"];
    const likeChance = 0.1;
    const gargle_words = ["like", "hehe", "uhh", "totally", "so dumbb", "ummm", "hhhhh"];
    for (const word of msg.split(" ")) {
        let changed = false;
        if (!word_is_link(word)) {
            if (pronouns.includes(word.toLowerCase())) { output += word + " like totally "; changed = true; }
            if (word.length > bimbo_word_length) { return output + word.substring(0, bimbo_word_length - 2) + "uhhhh long words harddd hehe"; }
        }
        if (!changed) { output += word + " "; }
        if (Math.random() < likeChance && !word_is_link(word)) { output += gargle_words[Math.floor(Math.random() * (gargle_words.length - 1))] + " "; }
    }
    return output;
}

function applyHorny(msg: string, horny_end: Date) {
    if (Date.now() > horny_end.getTime()) return msg;
    const horny_words = ["hmmph", "nngh", "ahhh", "ooh", "oohh", "mmm", "hehe", "hehehe", "heheh", "eheh", "ehehe", "eheheh", "guhh", "pleasee", "need to cumm", "oh goshh", "ohhh", "ahhh", "cummm", "gggg"];
    let output = "";
    for (const word of msg.split(" ")) {
        if (!word_is_link(word) && Math.random() < 0.75) { output += horny_words[Math.floor(Math.random() * (horny_words.length - 1))] + " "; }
        output += word + " ";
    }
    return output;
}

function applyUWU(msg: string, uwu_end: Date) {
    if (Date.now() > uwu_end.getTime()) return msg;
    let output = "";
    for (let word of msg.split(" ")) {
        if (word_is_link(word)) { output += word + " "; continue; }
        word = word.replace(new RegExp("th", "gi"), "d").replace(new RegExp("r|l", "gi"), "w").replace(new RegExp("u", "gi"), "uw").replace(new RegExp("n([aeiou])", "gi"), "ny$1").replace(new RegExp("ove", "gi"), "uv");
        output += word + " "
    }
    return output;
}

function applyCensored(msg: string, censoredWords: string[], replacement: string, censored_end: Date) {
    if (Date.now() > censored_end.getTime() || !censoredWords.length) return msg;
    for (let word of censoredWords) {
        let replacementText = "";
        for (let i = 0; i < word.length; i += replacement.length) { replacementText += replacement }
        msg = msg.replace(new RegExp(word, "gi"), replacementText);
    }
    return msg;
}

function applyDrone(msg: string, drone_end: Date, config: any, channelId: string, context: DroneContext = {}): { message: string, editPreviousMessage?: DroneEditRequest } {
    if (Date.now() > drone_end.getTime()) return { message: msg };
    if (config.drone_health < 10) return { message: "`This Drone haaaaas receieved bzzzzt, ppplease provide repaiirs using beep '/repair', tthank youu. Returned Error: 0x7547372482`" };

    let containsLink = false;
    for (const word of msg.split(" ")) { if (word_is_link(word)) containsLink = true; }

    let output = "";
    if (!containsLink) {
        msg = msg.replace(new RegExp("\\bMe\\b", "gi"), "This Drone").replace(new RegExp("\\bMy\\b", "gi"), "Its'").replace(new RegExp("\\bI am\\b", "gi"), "It is").replace(new RegExp("\\bI(')?m\\b", "gi"), "It is").replace(new RegExp("\\bI\\b", "gi"), "This Drone");
    }

    let ignoreFirstOne = false;
    for (const word of msg.split(" ")) {
        if (ignoreFirstOne) { ignoreFirstOne = false; continue; }
        if (!word_is_link(word) && Math.random() > (config.drone_health / 100)) { output += Math.random() > 0.5 ? "`beep` " : "`bzzzt` "; }
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
                if (Math.random() + (lastTriggered / 100) - 1 > (config.drone_health / 100) && char !== "`") {
                    lastTriggered = 0;
                    for (let i = 0; i < Math.floor(Math.random() * 10); i++) { outword += char; }
                }
            }
        } else { outword = word; }
        output += outword + " ";
    }

    const previousMessage = context.previousMessage ?? null;
    const previousSenderId = context.previousSenderId ?? previousMessage?.author?.id ?? null;
    const currentUserId = context.currentUserId ?? null;

    let header = config.speech_header;
    let footer = config.speech_footer;

    if (msg.startsWith("**")) { header = config.loud_header; footer = config.loud_footer; }
    else if (msg.startsWith("*")) { header = config.action_header; footer = config.action_footer; }
    else if (msg.startsWith("-#")) { header = config.whisper_header; footer = config.whisper_footer; }

    const continuingOwnBlock = previousSenderId != null && currentUserId != null && previousSenderId === currentUserId;
    const footerSuffix = "\n`" + footer + "`";
    const previousHadMatchingFooter = previousMessage?.content.endsWith(footerSuffix) ?? false;
    const editPreviousMessage = continuingOwnBlock && previousHadMatchingFooter && previousMessage ? { channelId, messageId: previousMessage.id, newContent: previousMessage.content.replace(footerSuffix, "") } : undefined;

    const formattedBody = output.trimEnd();
    let formattedMessage = formattedBody + footerSuffix;
    if (!continuingOwnBlock || !previousHadMatchingFooter) { formattedMessage = "`" + header + "`\n" + formattedMessage; }

    return { message: formattedMessage, editPreviousMessage };
}

// Master wrapper
export function applyAllReplacements(msg: string, channelId: string, context: DroneContext, state: any): { message: string, editPreviousMessage?: DroneEditRequest } {
    if (!state.config) return { message: msg };
    
    msg = applyRules(msg, state.rules, state.config.rules_end);
    msg = applyUWU(msg, state.config.uwu_end);
    msg = applyHorny(msg, state.config.horny_end);
    msg = applyPet(msg, state.config.pet_end, state.config.pet_amount, state.petWords);
    msg = applyBimbo(msg, state.config.bimbo_end, state.config.bimbo_word_length);
    msg = applyCensored(msg, state.censoredWords, state.config.censored_replacement, state.config.censored_end);
    msg = applyGag(msg, state.config.gag_end);

    let editPreviousMessage: DroneEditRequest | undefined;
    if (state.droneConfig) {
        const droneResult = applyDrone(msg, state.config.drone_end, state.droneConfig, channelId, context);
        msg = droneResult.message;
        editPreviousMessage = droneResult.editPreviousMessage;
    }
    
    return { message: msg, editPreviousMessage };
}