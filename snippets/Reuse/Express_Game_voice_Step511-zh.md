<div class="mk-warning">

- 自定义语音模式和通用语音模式不可以同时使用。
- 如需使用自定义语音模式，请确保游戏语音内的所有线上用户使用的 Express SDK 为 3.3.0 及以上版本。  
</div>

通过自定义语音模式，您可以自由控制音频的收发逻辑，以完成各种音频互动，示例如下：
    假设 A、B、C 为同一小队成员，且 C 在 A 的接收范围内，可通过表格中的配置完成预期的音频体验


<table>
  <colgroup>
    <col>
    <col>
  </colgroup>
<tbody><tr>
<th>用户</th>
<th>发声预期</th>
<th>收听预期</th>
<th>发声模式配置</th>
<th>收听模式配置</th>
<th>备注</th>
</tr>
<tr>
<td>&nbsp;A</td>
<td>向小队成员和范围内其他用户发送音频</td>
<td>收听小队成员和范围内其他用户的音频</td>
<td>全部</td>
<td>全部</td>
<td>A 能同时与 B、C 交流</td>
</tr>
<tr>
<td>B</td>
<td>仅向小队成员发送音频</td>
<td>仅收听小队成员的音频</td>
<td>小队</td>
<td>小队</td>
<td>B 仅能与 A 交流</td>
</tr>
<tr>
<td>C</td>
<td>仅向范围内的用户发送音频</td>
<td>仅收听范围内用户的音频</td>
<td>世界</td>
<td>世界</td>
<td>C 仅能与 A 交流</td>
</tr>
</tbody></table>












