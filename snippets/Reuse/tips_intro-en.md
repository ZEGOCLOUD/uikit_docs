The ZIM SDK converts some user operations on a group (such as group creation and disbandment) into tip messages, A tip message is a special type of message, whose enumeration value is `32`. Tip messages can be generated only by the ZIM backend or ZIM SDK. Users cannot insert tip messages into local conversations, set the read receipt or response for them, or directly delete them. However, users can delete a tip message by deleting all messages in a conversation.

<div class="mk-hint">

Only ZIM SDK 2.15.0 or later supports tip messages.
</div>



