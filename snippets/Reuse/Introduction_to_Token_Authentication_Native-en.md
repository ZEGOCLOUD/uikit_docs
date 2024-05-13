## Introduction

<div class="youtube-video-container">
    <iframe src="https://www.youtube.com/embed/CuRq8wucobU" title="ZEGOCLOUD Key Concept Intro: use Tokens for authentication" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

To avoid unauthorized service access or operations, ZEGOCLOUD uses digital Tokens to verify user identity, control and validate user privileges. You will need to pass a Token when you log in to a room. 

Currently, ZEGOCLOUD supports validating the following: 
- **User identity**: check users' identity by validating the Token.
- **User privileges**: 
    - Room login privilege: check users' privilege to log in to a room by validating the room ID contained in the Token.
    - Stream publishing privilege: check users' privilege to publish streams in a room by validating the ID of the published stream contained in the Token.


To improve business security, we recommend you enable the room login and stream publishing privilege validation for all scenarios. In particular: 

- In cases where your app provides different types of rooms dedicated to different users, such as general rooms and member-only rooms, it is necessary to validate a user's privilege to enter a room.
- In a voice chat room, it is necessary to prevent users who are not on the speaker seats from speaking in the room. 
- In voice games such as Werewolf, it is necessary to prevent the scenario that when the app is hacked, the hacker can use different user IDs to log in to the same room to cheat in the game. 















