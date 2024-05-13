The transition process of game statuses varies based on the gaming mode. The following figure shows the differences.

<table>
  <colgroup>
    <col width="50%">
    <col width="50%">
  </colgroup>
<tbody><tr>
<th>Mode of host-joined gaming with specified players</th>
<th>Mode of half- or full-screen gaming with randomly matched players</th>
</tr>
<tr>
<td><img src="/Pics/zegocloud/mini_game/2Game_status_description.jpg" width="100%"></td>
<td><img src="/Pics/zegocloud/mini_game/3Game_status_description.jpg" width="100%"></td>
</tr>
</tbody></table>

The following table describes the definitions, trigger events, and common business scenarios of different game statuses.

<table>
  <colgroup>
    <col width="20%">
    <col width="15%">
    <col width="30%">
    <col width="">
  </colgroup>
<tbody><tr>
<th>Status</th>
<th>Description</th>
<th>Event to trigger</th>
<th>Common business scenario</th>
</tr>
<tr>
<td>`ZegoGameIdle`</td>
<td>The game is idle.</td>
<td>Game in the mode of host-joined gaming with specified players: - A player calls the [loadGame\|_blank](@loadGame) operation to load the game in the mode of host-joined gaming with specified players. - A player does not meet the game conditions and the backend wait time of the game runs out. - The current round of the game is ended, and the host does not start a new round.</td>
<td>If the game status is `ZegoGameIdle`, the game image is not displayed.</td>
</tr>
<tr>
<td>`ZegoGamePreparing`</td>
<td>The game is loading.</td>
<td>Game in the mode of host-joined gaming with specified players: - After the host calls the [startGame\|_blank](@startGame) operation, the system checks whether all players meet the game conditions in the backend.</td>
<td>The system displays a loading pop-up window during game loading.</td>
</tr>
<tr>
<td>`ZegoGamePlaying`</td>
<td>The game is running.</td>
<td>- Game in the mode of host-joined gaming with specified players: - All players meet the game conditions.&nbsp;&nbsp; - Game in the mode of half- or full-screen gaming with randomly matched players: - A player calls the [loadGame\|_blank](@loadGame) operation to load the game. - The current round of the game is ended and a new round starts. - The game is resumed.</td>
<td>If the game statue is `ZegoGamePlaying`, the game image is displayed.</td>
</tr>
<tr>
<td>`ZegoGameStopping`</td>
<td>The game is paused.</td>
<td>A player stops the game.</td>
<td>If the game is paused, an advertisement can be played.</td>
</tr>
<tr>
<td>`ZegoGameOver`</td>
<td>The game ends.</td>
<td>The game ends as expected.</td>
<td>The game UI such as the matching page of a voice chatroom is hidden until the game is started again.</td>
</tr>
</tbody></table>







