从呼叫邀请发起到呼叫结束，呼叫用户状态流转如下图所示：

<img src="/Pics/ZIM/ZIMCallUserState.jpeg" width="80%">

<table>
  <colgroup>
    <col width="20%">
    <col width="20%">
    <col width="40%">
    <col width="20%">
  </colgroup>
<tbody><tr>
<th>状态</th>
<th>含义</th>
<th>触发事件</th>
<th>适用模式</th>
</tr>
<tr>
<td>Inviting</td>
<td>被邀请中。</td>
<td>用户正在被邀请。</td>
<td rowspan="6"><ul><li>普通模式。</li><li>进阶模式。</li></ul></td>
</tr>
<tr>
<td>Accepted</td>
<td>已接受邀请。</td>
<td><ul><li>用户发起呼叫邀请。</li><li>用户接受呼叫邀请。</li></ul></td>
</tr>
<tr>
<td>Rejected</td>
<td>已拒绝邀请。</td>
<td>用户拒绝呼叫邀请。</td>
</tr>
<tr>
<td>Cancelled</td>
<td>已取消邀请。</td>
<td><ul><li>用户主动取消呼叫邀请.</li><li>被叫尚未应答邀请，而主叫掉线且心跳超时。</li></ul></td>
</tr>
<tr>
<td>Received</td>
<td>已收到邀请。</td>
<td><ul><li>在线用户收到邀请。</li><li>离线用户在超时范围内上线。</li></ul></td>
</tr>
<tr>
<td>Timeout</td>
<td>超时未接受。</td>
<td>被叫用户超时未响应邀请。</td>
</tr>
<tr>
<td>Quit</td>
<td>退出。</td>
<td>呼叫实现后，用户退出呼叫。</td>
<td><ul><li>进阶模式。</li></ul></td>
</tr>
<tr>
<td>Unknown</td>
<td>未知。</td>
<td colspan="2">请联系 ZEGO 技术支持。</td>
</tr>
</tbody></table>



