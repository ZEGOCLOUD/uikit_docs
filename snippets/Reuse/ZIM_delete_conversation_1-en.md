<div class="mk-hint">
If a conversation is deleted:

- Messages in the conversation will not be automatically deleted. To delete both the conversation and all its messages, call the [`deleteAllMessage`\|\_blank](@deleteAllMessage) operation to delete all messages (as instructed in [Delete messages\|\_blank](!deleteMessages#3_2)) and then call the [`deleteConversation`\|\_blank](@deleteConversation) operation to delete the conversation.
- If the conversation has unread messages, the ZIM SDK will invoke the [`conversationTotalUnreadMessageCountUpdated`\|\_blank](@conversationTotalUnreadMessageCountUpdated) callback to reduce the total number of unread messages. For more information, see [4 Obtain the total number of unread messages](!zim-Conversation_Management#3_4).

</div>









