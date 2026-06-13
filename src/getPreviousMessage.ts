// findByProps will be set globally by kettu.ts during onLoad
declare global {
	var __kettuFindByProps: any;
}

export function getPreviousMessage(channelId: string) {
    if (!globalThis.__kettuFindByProps) {
        console.log("[key-intercept] __kettuFindByProps not available");
        return null;
    }
    
    const MessageStore = globalThis.__kettuFindByProps("getMessage", "getMessages");
    console.log("[key-intercept] MessageStore keys:", Object.keys(MessageStore || {}));
    
    const messages = MessageStore?.getMessages?.(channelId);
    console.log("[key-intercept] messages object:", messages);
    console.log("[key-intercept] messages keys:", messages ? Object.keys(messages) : "null");
    console.log("[key-intercept] messages type:", typeof messages, "isArray:", Array.isArray(messages));
    
    if (!messages) return null;

    const list = Array.isArray(messages)
        ? messages
        : messages._array ?? Object.values(messages);

    console.log("[key-intercept] list length:", list.length);
    const lastMsg = list.at(-1);
    console.log("[key-intercept] lastMessage:", lastMsg);
    console.log("[key-intercept] lastMessage keys:", lastMsg ? Object.keys(lastMsg) : "null");
    
    return lastMsg ?? null;
}
export function editPreviousMessage(channelId: string, messageId: string, newContent: string) {
    if (!globalThis.__kettuFindByProps) return;
    const MessageActions = globalThis.__kettuFindByProps("editMessage");
    if (!MessageActions?.editMessage) return;

    MessageActions.editMessage(channelId, messageId, { content: newContent });
}

export function getPreviousMessageSender(channelId: string) {
    const previousMessage = getPreviousMessage(channelId) as any;
    return previousMessage?.author ?? null;
}