The ZIM SDK supports setting users as group owners, administrators, and regular members by default. In a group, the group owner has all **client permissions** and can perform all group functions. Administrators have most **client permissions**, while regular members have the fewest **client permissions**. The specific client permissions for each role are shown in the table below:

<table>
  <colgroup>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
<tbody><tr>
<th>Client Permissions</th>
<th>Group Owner<br>(corresponding enum value: 1)</th>
<th>Administrator<br>(corresponding enum value: 2)</th>
<th>Regular Member<br>(corresponding enum value: 3)</th>
</tr>
<tr>
<th>Modify group avatar, group name, group notice</th>
<td rowspan="2">Supported</td>
<td rowspan="2">Supported</td>
<td rowspan="2">Supported</td>
</tr>
<tr>
<th>Modify group attributes</th>
</tr>
<tr>
<th>Modify group member nickname</th>
<td rowspan="9">Supported, can be used for all group role users</td>
<td rowspan="5">Supported, can be used for all regular members</td>
<td rowspan="2">Supported, can only be used for oneself</td>
</tr>
<tr>
<th>Recall group member messages</th>
</tr>
<tr>
<th>Kick out members</th>
<td rowspan="7">Not supported</td>
</tr>
<tr>
<th>Mute individual group members</th>
</tr>
<tr>
<th>Mute specific group roles</th>
</tr>
<tr>
<th>Set group member roles</th>
<td rowspan="4">Not supported</td>
</tr>
<tr>
<th>Transfer group ownership</th>
</tr>
<tr>
<th>Dismiss the group</th>
</tr>
<tr>
<th>Mute all members</th>
</tr>
</tbody></table>









