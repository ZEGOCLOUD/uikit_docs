### 1 添加转码模板
  
请联系 ZEGO 技术支持添加转码模板，并获取到对应的转码模板 ID。

目前支持配置的转码参数为：模板 ID、分辨率、码率、帧率及视频编码格式。

<div class="mk-warning">

- 目前只支持配置视频相关参数。
- 一个 AppID 最多支持添加 5 个转码模板。如需设置更多模板，请联系 ZEGO 技术支持。
</div>

<table>
  <colgroup>
    <col width="20%">
    <col width="80%">
  </colgroup>
<tbody><tr>
<th>参数</th>
<th>说明</th>
</tr>
<tr>
<td>模板 ID</td>
<td>取值大于 100 的整数，ID 必须唯一。<br>推荐按输出分辨率命名，例如，转码输出分辨率为 360P 的模板 ID，可命名为 360。若转码输出分辨率小于 100P，可自行命名。</td>
</tr>
<tr>
<td>分辨率</td>
<td><ul><li>支持宽度范围：[0, 3000]，数值必须是 2 的倍数。</li><li>支持高度范围：[0, 3000]，数值必须是 2 的倍数。</li></ul></td>
</tr>
<tr>
<td>码率</td>
<td>取值需大于 0，单位为 bps。</td>
</tr>
<tr>
<td>帧率</td>
<td>支持范围：[1, 20]，单位 fps。<br>如果需要输出更大帧率，请联系 ZEGO 技术支持进行配置。</td>
</tr>
<tr>
<td>视频编码格式</td>
<td><p>支持以下视频编码格式：</p><ul><li>H.264</li><li>H.265</li><li>保持原始流的视频编码格式。</li></ul></td>
</tr>
</tbody></table>


### 2 创建引擎并登录房间

具体流程请参考“实现视频通话”文档的 [创建引擎\|_blank](!Integration/Solution_Implementation#4_1) 和 [登录房间\|_blank](!Integration/Solution_Implementation#4_2) 章节。

<div class = 'mk-warning'>

实现单流转码前，房间内需要有已存在的流。
</div>


































