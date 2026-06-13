// findByProps will be set globally by kettu.ts during onLoad
declare global {
	var __kettuFindByProps: any;
}

export function getPreviousMessage(channelId: string) {
    if (!globalThis.__kettuFindByProps) {
        console.log("[key-intercept] __kettuFindByProps not available");
        return null;
    }
    
    // Try multiple search patterns to find the right MessageStore
    const MessageStore = globalThis.__kettuFindByProps("getMessage", "getMessages");
    console.log("[key-intercept] MessageStore found");
    
    // Deep exploration: all properties including private ones
    const allProps = Object.getOwnPropertyNames(MessageStore || {});
    console.log("[key-intercept] All MessageStore properties:", allProps);
    
    // Try different retrieval patterns
    console.log("[key-intercept] Trying getMessages()...");
    let messages = MessageStore?.getMessages?.(channelId);
    console.log("[key-intercept] getMessages result:", messages);
    
    if (!messages) {
        console.log("[key-intercept] getMessages returned null, trying direct property access...");
        messages = MessageStore?.[channelId];
        console.log("[key-intercept] Direct property access result:", messages);
    }
    
    if (!messages) {
        console.log("[key-intercept] Trying getMessage with channelId...");
        messages = MessageStore?.getMessage?.(channelId);
        console.log("[key-intercept] getMessage result:", messages);
    }
    
    if (!messages) {
        console.log("[key-intercept] Trying private _messages property...");
        messages = (MessageStore as any)?._messages;
        console.log("[key-intercept] _messages result:", messages);
    }
    
    if (!messages) {
        console.log("[key-intercept] Trying _messagesByChannelId property...");
        messages = (MessageStore as any)?._messagesByChannelId?.[channelId];
        console.log("[key-intercept] _messagesByChannelId result:", messages);
    }
    
    if (!messages) {
        console.log("[key-intercept] Trying _state property...");
        const state = (MessageStore as any)?._state;
        console.log("[key-intercept] _state:", state);
        if (state) {
            console.log("[key-intercept] _state keys:", Object.keys(state));
            console.log("[key-intercept] _state[channelId]:", state[channelId]);
        }
    }
    
    // If still no messages, try searching for different store
    if (!messages) {
        console.log("[key-intercept] Still no messages. Searching for alternative stores...");
        try {
            const ChannelMessageStore = globalThis.__kettuFindByProps?.("getMessages");
            console.log("[key-intercept] ChannelMessageStore (getMessages only):", ChannelMessageStore ? "found" : "not found");
            if (ChannelMessageStore?.getMessages) {
                messages = ChannelMessageStore.getMessages(channelId);
                console.log("[key-intercept] ChannelMessageStore.getMessages result:", messages);
            }
        } catch (e) {
            console.log("[key-intercept] Error searching alternative store:", e);
        }
    }
    
    if (!messages) {
        console.log("[key-intercept] No messages found with any method");
        return null;
    }

    const list = Array.isArray(messages)
        ? messages
        : messages._array ?? Object.values(messages);

    console.log("[key-intercept] Final list length:", list.length);
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