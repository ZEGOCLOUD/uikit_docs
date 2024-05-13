<div class="mk-hint">

删除某个会话时：

- 会话内的所有消息并不会自动删除。开发者如果需要同时删除会话和会话内的所有消息，请先调用 [deleteAllMessage\|_blank](@deleteAllMessage) 接口（详情请参考 [删除消息\|_blank](!deleteMessages#3_2)）删除所有消息，再调用 [deleteConversation\|_blank](@deleteConversation) 接口删除该会话。
- 如果这个会话存在未读消息，将会通过 [onConversationTotalUnreadMessageCountUpdated\|_blank](@onConversationTotalUnreadMessageCountUpdated) 回调接口，减少消息未读总数，详情请参考 [4 获取消息未读总数](!Conversation_Management#3_4)。
</div>





