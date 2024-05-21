<table>
  <colgroup>
    <col width="20%">
    <col width="75%">
  </colgroup>
<tbody><tr>
<th>Version number</th>
<th>Callback logic</th>
</tr>
<tr>
<td>2.22.0 and above</td>
<td>Based on the onNetworkQuality interface from version 2.14.0 to 2.21.1, it is possible to estimate the network condition of remote streaming users. If a remote streaming user loses 1 heartbeat, the network quality callback will be "unknown". If a remote streaming user loses 3 heartbeats, the network quality callback will be "die".</td>
</tr>
<tr>
<td>2.14.0 ～ 2.21.1</td>
<td>

* You will receive network quality callbacks for your streaming or playback. &nbsp;&nbsp;
* You will only receive network quality callbacks for other users when you are playing the audio and video streams published by those users and when those users are in your room.&nbsp;
* When "userID" is an empty string ("")， it represents the network quality report for yourself. When "userID" is not an empty string, it represents the network quality report for other users in the room.</td>
</tr>
<tr>
<td>2.10.0 ～ 2.13.1</td>
<td>

* You must both publish and play the stream to receive network quality callbacks for yourself. &nbsp;
* When you play a stream, the user who publishes that stream must be in the same room and must also be playing streams for you to receive their network quality callbacks.

* When "userID" is an empty string (""), it represents the network quality report for yourself. When "userID" is not an empty string, it represents the network quality report for other users in the room.</td>
</tr>
</tbody></table>







