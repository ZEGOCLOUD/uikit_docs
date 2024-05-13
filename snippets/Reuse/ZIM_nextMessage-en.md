<table>
  <colgroup>
    <col width="20%">
    <col width="25%">
    <col width="15%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th>Parameter</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
<tr>
<td>nextMessage</td>
<td><a href="@-ZIMMessage">ZIMMessage</a></td>
<td>Yes</td>
<td><p>The paging identifier.</p><p>Set nextMessage to null for the first query. In subsequent paging queries, the nextMessage is the last message in the list of messages currently queried.

<ol><li>When making the first query, the value of `nextMessage` is `null`.</li>
<li>For the second and subsequent queries, you need to pass the last message from the previously queried message list as the value of `nextMessage`.</li></ol></td>
</tr>
<tr>
<td>messageCount</td>
<td>Number</td>
<td>Yes</td>
<td><p>The number of messages that can be retrieved in one query.</p><p>It is recommended to retrieve less than 100 messages in each query to reduce costs.
</tr>
<tr>
<td>reverse</td>
<td>Boolean</td>
<td>Yes</td>
<td><p>When querying messages:</p><ul><li>When "reverse" is set to "true", it means querying messages in reverse order using "nextMessage" and retrieving "messageCount" number of messages. If it is the first time querying messages (i.e., "nextMessage" is null), then start querying from the last (in terms of time) stored message.</li><li>When "reverse" is set to "false", it means querying messages in forward order using "nextMessage" and retrieving "messageCount" number of messages. If it is the first time querying messages (i.e., "nextMessage" is null), then start querying from the earliest (in terms of time) stored message</li></ul></td>
</tr>
</tbody></table>


