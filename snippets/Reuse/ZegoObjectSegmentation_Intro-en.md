## 概述

本篇文档介绍利用 ZEGO Express的主体分割与传输功能与 ZIM 的房间属性功能，实现多人同场景实时视频互动房间及房间内的麦位管理的原理和步骤。

大多数传统的视频互动，参与互动的用户各自被矩形视频区域分隔，人脸或人体占画面的比例往往小于50%。这种情况下画面中的内容，大多数都是无效的背景信息，会给整体画面带来杂乱的观感，难以形成沉浸式的互动体验，如下图所示：

<img src="/Pics/ZegoObjectSegmentation/people_on_meeting.png" width="60%">

为了提升互动体验，ZEGO Express SDK 除主体分割能力外，还开创性地提供了 Alpha 数据传输功能。原理是将原始视频和主体分割得到的 Alpha 信息拼接在原视频的下方，经过编码后一起传输给拉流端，拉流端分离原视频和 Alpha 数据。

如下图所示，推流端的原始视频下方的 Alpha 信息用黑色代表这部分内容是透明的。拉流端在渲染时，将黑色部分对应的原视频画面渲染成透明效果，在视图上只会展示人的主体部分，不会展示用户的背景。

<table>
  <colgroup>
    <col width="50%">
    <col width="50%">
  </colgroup>
<tbody><tr>
<th>推流端</th>
<th>拉流端</th>
</tr>
<tr>
<td><img src="/Pics/ZegoObjectSegmentation/alphaLayoutTypeBottom.png" width="80%"></td>
<td><img src="/Pics/ZegoObjectSegmentation/videoObjectAfterRender.png" width="80%"></td>
</tr>
</tbody></table>

通过这种方式，可以将多个用户的主体渲染到同一个背景图或者背景视频上，虽然他们身处不同空间，依然可以在同一个场景下实时互动。

## 应用场景

- 沉浸式会议。
  <img src="/Pics/ZegoObjectSegmentation/videoOS_scene2.png" width=60%>

- 主播连麦。
  <img src="/Pics/ZegoObjectSegmentation/videoObjectSegmentation_anchor.png" width=60%>

- 大型活动，如新闻发布会等。
  <img src="/Pics/ZegoObjectSegmentation/videoOS_scene1.png" width=60%>
