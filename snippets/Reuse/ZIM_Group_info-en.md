<div class="mk-warning">

- You can specify custom rules for `groupID` generation. A group ID can contain only digits, letters, and the following characters: '!', '#', '$', '%', '&', '(', ')', '+', '-', ':', ';', '<', '=', '.', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~', and cannot start with a pound sign (#). If this parameter is empty, the ZIM server automatically generates a value. We recommend that you set a meaningful group ID generation rule. You can associate the group ID with your business account system.
- If a user calls the [`createGroup`\|_blank](@createGroup) method to create a group, the user automatically joins the group without calling the [`joinGroup`|_blank](@joinGroup) method.
- The user creating a group is the group owner. For more information about group ownership transfer, see [Transfer the group ownership\|_blank](!zim-TransferGroupOwner#3_5).
- To specify the maximum number of group members and the group joining mode (including the approval mode, invitation mode, and whether the invitation needs to be approved by the invitee), integrate ZIM SDK 2.15.0 or later.
</div>




