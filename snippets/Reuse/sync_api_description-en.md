### 开始播放

<table>
  <colgroup>
    <col width="20%">
    <col width="40%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th></th>
<th>主持人</th>
<th>观众</th>
</tr>
<tr>
<td>调用权限</td>
<td>✔️</td>
<td>✖</td>
</tr>
<tr>
<td>调用效果</td>
<td>开始播放视频，观众端同步开始播放。</td>
<td>无。</td>
</tr>
</tbody></table> 

### 暂停播放

<table>
  <colgroup>
    <col width="20%">
    <col width="40%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th></th>
<th>主持人</th>
<th>观众</th>
</tr>
<tr>
<td>调用权限</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>调用效果</td>
<td>暂停房间内所有用户的视频播放状态</td>
<td>- 暂停本地的视频播放。
- 此时主持人若恢复视频或跳转进度，观众仍保持暂停状态和暂停前的进度。</td>
</tr>
</tbody></table>

### 恢复播放

<table>
  <colgroup>
    <col width="20%">
    <col width="40%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th></th>
<th>主持人</th>
<th>观众</th>
</tr>
<tr>
<td>调用权限</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>调用效果</td>
<td>房间内所有用户恢复播放视频。</td>
<td>从观众主动暂停时的进度处，恢复视频播放。</td>
</tr>
<tr>
<td>注意事项</td>
<td>如果观众端已主动暂停播放视频，则不会同步恢复播放。</td>
<td>当前房间内视频状态为播放中，并且观众已主动暂停视频，调用此接口才有效。</td>
</tr>
</tbody></table>

### 跳转

<table>
  <colgroup>
    <col width="20%">
    <col width="40%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th></th>
<th>主持人</th>
<th>观众</th>
</tr>
<tr>
<td>调用权限</td>
<td>✔️</td>
<td>✖</td>
</tr>
<tr>
<td>调用效果</td>
<td>房间内所有用户的视频进度跳转到指定时刻。</td>
<td>无。</td>
</tr>
<tr>
<td>注意事项</td>
<td>如果观众已暂停播放视频，观众端视频进度不会同步。</td>
<td>无。</td>
</tr>
</tbody></table>

### 同步进度

<table>
  <colgroup>
    <col width="20%">
    <col width="40%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th></th>
<th>主持人</th>
<th>观众</th>
</tr>
<tr>
<td>调用权限</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>调用效果</td>
<td>主持人同步自己当前的进度给服务端，然后所有观众会收到进度并跳转。</td>
<td>本地视频对齐主持人的进度。</td>
</tr>
</tbody></table>

### 停止播放

<table>
  <colgroup>
    <col width="20%">
    <col width="40%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th></th>
<th>主持人</th>
<th>观众</th>
</tr>
<tr>
<td>调用权限</td>
<td>✔️</td>
<td>✖</td>
</tr>
<tr>
<td>调用效果</td>
<td>- 停止播放视频。
- 观众会收到停止播放的事件并停止播放视频。</td>
<td>无。</td>
</tr>
</tbody></table>
