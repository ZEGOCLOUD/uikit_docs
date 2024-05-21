To check whether a user is in a group, call any of the following methods:
- Pull the conversation list. For more information, see [Pull the conversation list\|_blank](!zim-Conversation_Management).
- Listen for the conversation change callback and update the conversation list. For more information, see [Update the conversation list\|_blank](!zim-Conversation_Management#).

For group chats, the result is indicated by the [`isDisabled`\|_blank](@isDisabled-ZIMGroupConversation) property of [`ZIMGroupConversation`\|_blank](@-ZIMGroupConversation).

Valid values of [`isDisabled`\|_blank](@isDisabled-ZIMGroupConversation):
- `true`: The user is in the group.
- `false`: The user is not in the group. If the user leaves the group or is removed from the group, or the group is disbanded, the value of `isDisabled` is `false`.







