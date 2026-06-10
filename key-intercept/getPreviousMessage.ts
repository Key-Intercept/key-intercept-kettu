import { findByProps } from "@metro";

export function getPreviousMessage(channelId: string) {
    const MessageStore = findByProps("getMessage", "getMessages");
    const messages = MessageStore?.getMessages?.(channelId);
    if (!messages) return null;

    const list = Array.isArray(messages)
        ? messages
        : messages._array ?? Object.values(messages);

    return list.at(-1) ?? null;
}

export function editPreviousMessage(channelId: string, messageId: string, newContent: string) {
    const MessageActions = findByProps("editMessage");
    if (!MessageActions?.editMessage) return;

    MessageActions.editMessage(channelId, messageId, { content: newContent });
}

export function getPreviousMessageSender(channelId: string) {
    const previousMessage = getPreviousMessage(channelId);
    return previousMessage?.author ?? null;
}