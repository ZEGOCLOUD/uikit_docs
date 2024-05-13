如需确认当前用户是否仍在所加入的群组会话中，请通过以下任意方法：
- 参考 [会话管理 - 拉取会话列表\|_blank](!IM-Conversation_Management#queryConversationList) 主动拉取会话列表。
- 参考 [会话管理 - 更新会话列表\|_blank](!IM-Conversation_Management#conversationChanged)，监听会话变更回调，更新会话列表。

当会话类型是群类型时，从返回结果中的 [ZIMGroupConversation\|_blank](@-ZIMGroupConversation) 获取 [isDisabled\|_blank](@isDisabled-ZIMGroupConversation)，即会话是否可用。

[isDisabled\|_blank](@isDisabled-ZIMGroupConversation) 值说明如下：
- 为 true 时，表示当前用户在该群组会话。
- 为 false 时，表示当前用户不在该群组会话。当前用户主动退出、被踢或群组解散都会导致会话不可用。





