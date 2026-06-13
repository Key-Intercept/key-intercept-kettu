// findByProps will be set globally by kettu.ts during onLoad
declare global {
	var __kettuFindByProps: any;
}

export function getPreviousMessage(channelId: string) {
    if (!globalThis.__kettuFindByProps) {
        return null;
    }
    
    const MessageStore = globalThis.__kettuFindByProps("getMessage", "getMessages");
    if (!MessageStore) {
        return null;
    }

    let messages = MessageStore?.getMessages?.(channelId);
    
    if (!messages) {
        return null;
    }

    const list = Array.isArray(messages)
        ? messages
        : messages._array ?? Object.values(messages);

    const lastMsg = list.at(-1);
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