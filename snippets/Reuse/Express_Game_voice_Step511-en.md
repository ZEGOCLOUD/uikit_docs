

<div class="mk-warning">

- Either the custom or generic voice mode can be used.
- The custom voice mode is available only if the ZEGO Express SDK version of all online users is 3.3.0 or later.  
</div>

The custom voice mode allows control of the logic for sending and receiving audio streams as needed.
    For example, if users A, B, and C are in the same team and user C can be heard by user A, the following implementations can be achieved.


<table>
  <colgroup>
    <col>
    <col>
  </colgroup>
<tbody><tr>
<th>User</th>
<th>Sending Logic</th>
<th>Receiving Logic</th>
<th>Sending Mode</th>
<th>Receiving Mode</th>
<th>Description</th>
</tr>
<tr>
<td>A</td>
<td>Sends audio streams to team members and other users within the sphere.</td>
<td>Receives audio streams from team members and other users within the sphere.</td>
<td>All</td>
<td>All</td>
<td>A can chat with both B and C.</td>
</tr>
<tr>
<td>B</td>
<td>Sends audio streams to team members only.</td>
<td>Receives audio streams from team members only.</td>
<td>Team</td>
<td>Team</td>
<td>B can chat with A only.</td>
</tr>
<tr>
<td>C</td>
<td>Sends audio streams to other users within the sphere only.</td>
<td>Receives audio streams from other users within the sphere only.</td>
<td>World</td>
<td>World</td>
<td>C can chat with A only.</td>
</tr>
</tbody></table>



