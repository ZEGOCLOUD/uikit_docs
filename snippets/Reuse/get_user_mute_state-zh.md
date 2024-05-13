如需主动获取当前用户在群组的禁言状态，请通过以下任意方法：
- 参考 [会话管理 - 拉取会话列表\|_blank](!IM-Conversation_Management#queryConversationList) 主动拉取会话列表。
- 参考 [会话管理 - 更新会话列表\|_blank](!IM-Conversation_Management#conversationChanged)，监听会话变更回调，更新会话列表。

当会话类型是群类型时，从返回结果中的 [ZIMGroupConversation\|_blank](@-ZIMGroupConversation) 获取 [mutedExpiredTime\|_blank](@mutedExpiredTime-ZIMGroupConversation)，即群禁言时间，单位为秒。

[mutedExpiredTime\|_blank](@mutedExpiredTime-ZIMGroupConversation) 值说明如下：
- 为 -1 时，表示当前用户永久无法在该群组发言。
- 为 0 时，表示当前用户可以在该群组发言。
- 为其他值时，表示当前用户于该数值时间内无法在该群组发言。

<div class="mk-hint">

如果当前用户既因群角色被禁言（详见 [群组管理 - 禁言或解禁群组\|_blank](!IM-GroupManagement#muteGroup)，又被单独禁言（详见本文 <a href="#muteGroupMembers">设置群成员禁言状态</a>），则 [mutedExpiredTime\|_blank](@mutedExpiredTime-ZIMGroupConversation) 值以“群禁言时间”与“单独被禁言时间”中的最大值为准。
</div>





