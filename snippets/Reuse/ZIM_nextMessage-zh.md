<table>
  <colgroup>
    <col width="20%">
    <col width="25%">
    <col width="15%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th>参数</th>
<th>类型</th>
<th>是否必填</th>
<th>说明</th>
</tr>
<tr>
<td>nextMessage</td>
<td><a href="@-ZIMMessage">ZIMMessage</a></td>
<td>是</td>
<td><p>分页查询消息时的锚点，即指查询到的是 nextMessage 之后或之前的消息列表，“之后”或“之前”由 reverse 值决定。

<ol><li>第一次查询时，nextMessage 为 `null`。</li>
<li>第二次及之后的查询时，nextMessage 需传入上次查询到的消息列表的最后一条消息。</li></ol></td>
</tr>
<tr>
<td>messageCount</td>
<td>Number</td>
<td>是</td>
<td><p>查询一次，可获取的消息数量。</p><p>每次查询的消息数量，建议小于 100 条，以降低开销。</p></td>
</tr>
<tr>
<td>reverse</td>
<td>Boolean</td>
<td>是</td>
<td><p>查询消息时：</p><ul><li>“reverse” 为 “true” 时，表示按照 nextMessage、向前（指时间向前）查询 messageCount 条消息。若是首次查询消息时（即 nextMessage 为 null），则从本地存储的最后（时间）一条消息向前查询。</li><li>“reverse” 为 “false” 时，表示按照 nextMessage、向后（指时间向后）查询 messageCount 条消息。若是首次查询消息时（即 nextMessage 为 null），则从本地存储的最早（时间）一条消息开始查询。</li></ul></td>
</tr>
</tbody></table>


