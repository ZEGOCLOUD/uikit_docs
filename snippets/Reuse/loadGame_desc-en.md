
After a player deposits or withdraws coins, the player needs to call the [setGameContainer\|_blank](@setGameContainer) operation to configure the parent container of the game, and call the [loadGame\|_blank](@loadGame) operation to load the game.

After the game is loaded, the player can play games in the mode of half- or full-screen gaming with randomly matched players.

If the player wants to play games in the mode of host-joined gaming with specified players, the host needs to call the [startGame\|_blank](@startGame) operation. For more information, see the [8. (Optional) Start the game](!ZegoMiniGameEngine-Implement_mini_games#3_8) section of the "Implement a mini-game" topic.

<div class="mk-warning">

- The Host and Participant roles are business roles that you define. ZEGO MiniGameEngine SDK does not classify the roles of users.
- If the host and participants want to play a game together, their room IDs and game IDs must be the same.
- If a participant of a live streaming room or voice chatroom wants to view the game process of the host rather than join in the game, the participant also needs to configure the parent container of the game and load the game.

</div>



