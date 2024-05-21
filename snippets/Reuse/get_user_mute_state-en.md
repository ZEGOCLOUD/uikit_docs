To actively retrieve the mute status of the current user in a group, please use any of the following methods:
- Refer to [Manage sessions - Get the session list\|_blank](!zim-Conversation_Management) to fetch the session list proactively.
- Refer to [Manage sessions - Update session list\|_blank](!zim-Conversation_Management) for session change callbacks and update the session list.

Retrieve the [`mutedExpiredTime`\|_blank](@mutedExpiredTime-ZIMGroupConversation) from the [`ZIMConversation`\|_blank](@-ZIMConversation) object in the returned result, which indicates the mute duration in seconds.

The explanation of the [`mutedExpiredTime`\|_blank](@mutedExpiredTime-ZIMGroupConversation) value is as follows:
- When it is -1, it means the current user cannot speak in that group permanently.
- When it is 0, it means the current user can speak in that group.
- When it is 0, it means the current user can speak in that group.

<div class="mk-hint">


If the current user is both muted due to group role restrictions (refer to [Manage groups - Mute or unmute group\|_blank](!zim-GroupManagement), and individually muted（refer to the section <a href="#muteGroupMembers">Set mute status for group members</a> in this article）, the value of [`mutedExpiredTime`\|_blank](@mutedExpiredTime-ZIMGroupConversation) will be determined by taking the maximum value between the "group mute time" and the "individual mute time".

</div>













