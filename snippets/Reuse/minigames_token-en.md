When a user uses the ZEGO mini-game service, the ZEGO server checks whether the user has the required permissions based on the token that is passed when the user initializes ZEGO MiniGameEngine SDK. This prevents risks caused by insufficient permissions or improper operations.

For more information about how to generate a token on your server and send the token to a client, see [Perform token-based authentication\|_blank](!ZegoMiniGameEngine-Token_Authenticaiton).

<div class="mk-hint">

To facilitate testing, you can obtain a temporary token in the [ZEGO console\|_blank](https://console.zegocloud.com/). For more information, see the "Auxiliary tools" section of the [How to view project information\|_blank](https://www.zegocloud.com/docs/admin-console/view-project-information) topic. After the project is released, generate a token on your server to ensure security.

</div>



