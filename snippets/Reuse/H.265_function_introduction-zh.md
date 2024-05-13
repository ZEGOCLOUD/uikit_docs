### 功能描述

H.265 是一种高效的视频编码标准，旨在有限带宽下传输更高质量的网络视频。开发者可以在编码或混流时输出 H.265 格式的视频码流。

<div class="mk-hint">

- ZEGO Express SDK 从 2.12.0 版本（2021-09-09 发布）开始支持该功能。
- 如果您需要支持 H.265 视频编码，则需要将线上的 ZEGO Express SDK 都升级到 2.12.0 或以上版本，否则线上版本解码 H.265 可能会出现异常。
</div>

H.265 和 H.264 的区别如下：

<table>
  <colgroup>
    <col width="25%">
    <col width="25%">
    <col width="50%">
  </colgroup>
  <tbody><tr>
    <th>差异项</th>
    <th>H.264</th>
    <th>H.265</th>
  </tr>
  <tr>
    <td>同等画质下的码率</td>
    <td>-</td>
    <td>H.265 相比于 H.264 可以节约 30% 码率（实测值）。</td>
  </tr>
  <tr>
    <td>软编性能</td>
    <td>-</td>
    <td>H.265&nbsp;消耗的算力是 H.264 的 3 倍左右。</td>
  </tr>
  <tr>
    <td>软解性能</td>
    <td>-</td>
    <td>H.265&nbsp;消耗的算力是 H.264 的 1.5 倍左右。</td>
  </tr>
  <tr>
    <td>硬件生态</td>
    <td>所有机型基本都支持硬编和硬解。</td>
    <td>大部分机型都支持硬编，绝大部分机型都支持硬解。</td>
  </tr>
  <tr>
    <td>混流输出</td>
    <td>支持。</td>
    <td>支持，但价格比 H.264 混流输出更贵，详情可咨询 ZEGO 商务人员。</td>
  </tr>
  <tr>
    <td>适用场景</td>
    <td>所有场景。</td>
    <td>推荐在直播和音视频互动场景使用。</td>
  </tr>
</tbody></table>


### 应用场景
 在如下应用场景中，可使用 H.265 进行编码：
 
<table>
  <colgroup>
    <col width="40%">
    <col width="60%">
  </colgroup>
<tbody><tr>
<th>应用场景类型</th>
<th>说明</th>
</tr>
<tr>
<td>秀场直播、电商直播、互动直播、游戏直播</td>
<td>通过 H.265 编码，将码率降低 30% 码率（实测值），分发给万千观众，极大降低 CDN 分发成本。</td>
</tr>
<tr>
<td>视频通话、视频会议、在线教育</td>
<td>通过 H.265 编码，在同等码率下，提高画面清晰度，让这些场景通话效果更好。</td>
</tr>
</tbody></table>
<div class="mk-warning">


目前 Web 和小程序平台，不支持 H.265 拉流。
</div>


### 概念解释

- 视频编码：通过特定的压缩技术，将原始视频格式的文件转换成另一种视频格式的方式，便于传输和存储。
- 混流：是一种把多路音视频流从云端混合成一路流的技术，支持手动混流、自动混流和全自动混流三种方式，详情请参考 [混流\|_blank](!Other_Functions/Mixer)。
- 转推 CDN：将音视频流从 ZEGO 音视频云推送到 CDN 的过程，详情请参考 [通过 CDN 推流/拉流\|_blank](!ExpressVideoSDK-Publisher_Player_Advanced/RelayToCDN)。
- 连麦：是房间内用户之间互动的一种形式，通过 [startPublishingStream\|_blank](@startPublishingStream) 接口推自己流的同时，也调用 [startPlayingStream\|_blank](@startPlayingStream) 接口拉对方的流，两个用户连麦成功之后即可进行互动通话。



































