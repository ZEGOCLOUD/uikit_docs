## Overview

`Conversation` is the logic automatically established by the ZIM SDK for sending one-to-one or group messages. The ZIM SDK provides the `conversation management` feature, allowing you to pull the conversation list, create/update/delete a conversation, pin a conversation to top, and perform other operations after login.


In general, you can obtain the list of one-to-one or group messages in socializing, gaming communities, online consulting, and other business scenarios.

<img src="/Pics/in_app_chat/Conversation.jpeg" width="40%">

<div class="mk-hint">

- The ZIM SDK doesn't maintain friendship chains for one-to-one chats, so you can send messages to and establish a conversation with any user. To establish friendship chains with other users, set up and maintain your user management logic as needed.
- A conversation record is generated only after a message is sent. It can be a text or rich media message but cannot be a custom message.
</div>







