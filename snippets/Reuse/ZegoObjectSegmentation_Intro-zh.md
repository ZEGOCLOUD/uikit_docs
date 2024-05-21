## 概述

本篇文档介绍利用 ZIM SDK 与 ZEGO Express SDK中的主体分割与 Alpha 数据传输与渲染能力，实现多人同场景实时视频互动及房间内的麦位管理的原理和步骤。

大多数的视频互动，参与互动的用户各自被矩形视频区域分隔，画面中主体占画面的比例往往不到一半。这种情况下互动的体验，不同用户不同的背景容易给整体画面带来杂乱的观感，难以形成沉浸式的互动体验，如下图所示：

<img src="/Pics/ZegoObjectSegmentation/group_video_chat.jpeg" width="30%">

为了提升互动体验，ZEGO Express SDK 除主体分割能力外，开创性地提供了 Alpha 数据传输功能。原理是将原始视频和经主体分割得到的 Alpha 信息拼接在原视频的下方，得到一个高 * 2 的视频。经过编码后传输给拉流端。拉流端会分离原始视频和 Alpha 数据，使用 Alpha 数据做渲染，可以形成视觉上只显示画面中的主体的效果。

如下图所示，推流端的原始视频下方的 Alpha 信息用黑色代表这部分内容是透明的。拉流端在解码后，将黑色部分归一化为 Alpha 数据，便可以将对应的原视频画面对应的区域渲染成透明效果，在视图上只会展示人的主体部分，不会展示用户的真实背景。

如需了解渲染部分的实现原理，请参考 [播放透明礼物特效\|_blank](!ExpressVideoSDK-gift_special_effects)。

<table>
  <colgroup>
    <col width="33.3%">
    <col width="33.3%">
    <col width="33.3%">
  </colgroup>
<tbody><tr>
<th>推流画面</th>
<th>拉流画面</th>
<th>渲染后的显示效果</th>
</tr>
<tr>
<td><img src="/Pics/ZegoObjectSegmentation/alphaLayoutTypeBottom.png" width="60%"></td>
<td><img src="/Pics/ZegoObjectSegmentation/alphaLayoutTypeBottom.png" width="60%"></td>
<td><img src="/Pics/ZegoObjectSegmentation/videoObjectAfterRender.png" width="60%"></td>
</tr>
</tbody></table>

通过这种方式，可以将多个用户的主体渲染到同一个背景图或者背景视频上，虽然他们身处不同空间，依然可以在同一个场景下实时互动。

## 应用场景

<table>
  <colgroup>
    <col width="13%">
    <col width="29%">
    <col width="29%">
    <col width="29%">
  </colgroup>
<tbody><tr>
<th>应用场景</th>
<th>沉浸式会议、一起看电影</th>
<th>主播连麦</th>
<th>大型活动，如新闻发布会等</th>
</tr>
<tr>
<th>图示</th>
<td><img src="/Pics/ZegoObjectSegmentation/videoOS_scene2.png" width=90%></td>
<td><img src="/Pics/ZegoObjectSegmentation/scene_2.png" width=80%></td>
<td><img src="/Pics/ZegoObjectSegmentation/videoOS_scene1.png" width=80%></td>
</tr>
</tbody></table>

## 方案架构

本最佳实践的房间内业务的整体架构如下图所示。由于开发者业务后台仅管理房间列表，不涉及房间内业务，因此没有在下图中体现。其中：

<img src="/Pics/ZegoObjectSegmentation/structure.jpeg" width=80%>

































