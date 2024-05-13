### 1.1 Basic concepts

- Sphere: An area for audio reception.
- Position: The coordinates of a listener in the game. For more information, see section "5.5 Set the position of a listener".
- Listener: The user who receives audio in a room.
- Speaker: The user who sends audio in a room.

### 1.2 Description

ZEGO Express SDK **2.11.0** and later support the in-game voice chat service, which includes the sphere-specific audio, 3D sound effects, and team voice chat features.

<table>
  <colgroup>
    <col width="10%">
    <col width="90%">
  </colgroup>
<tbody><tr>
<th>Feature</th>
<th>Description</th>
</tr>
<tr>
<td>Sphere-specific audio</td>
<td><p>Only sounds within a specified sphere can be heard by listeners in a room. To ensure sound quality, listeners can hear up to 20 speakers nearest to them.</p>
<p>Assume that the maximum radius of the sphere is R, and the distance between the speaker and listener is r:</p>
<ul><li>If r < R, the speaker is within the sphere and can be heard. </li><li>If r ≥ R, the speaker is out of the sphere and cannot be heard.</li></ul>

<img src="/Pics/Video_call/16876_1.png" width="70%" /><p>In the above figure, the generic voice mode is set to World. For more information, see section <a href="!AudioAdvanced/Range_Voice#5_10">5.10.2 Set the generic voice mode</a>.</p>
</td>
</tr>
<tr>
<td>3D sound effects</td>
<td>The 3D sound effects provides a sense of space, and the volume level attenuates as the distance increases.</td>
</tr>
<tr>
<td>Generic voice mode</td>
<td><p>Users can join a team and set the voice mode to World, Team, or Secret Team.</p>
<ul><li>World: Users can chat with team members and other users in World mode. </li><li>Team: Users can chat with team members only. </li><li>Secret Team: Users can chat with team members and only hear other users in World mode.</li></ul>
<div class="mk-hint"><ul><li>The sphere-specific audio and 3D sound effects configurations do not take effect for voice chats between team members. For more information, see section <a href="!AudioAdvanced/Range_Voice#5_10">5.10.2 Set the generic voice mode</a>. </li><li>For more information about the custom voice mode, see section <a href="!AudioAdvanced/Range_Voice#5_10">5.10.3 Set the custom voice mode</a>.</li></ul></div>
</td>
</tr>
</tbody></table>

### 1.3 Applicable scenarios

In-game voice chat is applicable to scenarios such as online multiplayer video games and metaverse applications.

In the former scenario, players can change their team before and after a session starts, which means you can implement team voice without configuring stream grouping or publishing and playing.

In both scenarios, the 3D sound effects can be applied to simulate sound directions and distances, making the scenes more realistic.
















