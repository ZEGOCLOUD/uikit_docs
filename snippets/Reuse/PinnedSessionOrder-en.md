

- Pinned conversations are always placed before unpinned conversations.

    <div class="mk-hint">

    This rule also applies to the conversation list fetched by calling the [queryConversationList\|_blank](@queryConversationList) interface. Developers can confirm whether a conversation is pinned by checking the [isPinned\|_blank](@isPinned-ZIMConversation) field of the ZIMConversation in the fetched results.
    </div>

- After a user pins multiple conversations, the relative order between these conversations will remain unchanged.   
    Let's assume there are 5 conversations, and the existing order in the conversation list is: a, b, c, d, e.   
    If the user pins conversations b and d (regardless of the order in which they are pinned), the new order will be b, d, a, c, e. In other words, conversations b and d are placed at the front, and conversation b is still placed before conversation d.

    <div class="mk-hint">

    The above example assumes that the orderKey of the related conversations remains unchanged before and after pinning. If the orderKey changes, the order in the pinned conversation list will also change.
    </div>

