
主体分割是 Express SDK 提供的增值能力，通过 AI 算法识别视频画面中的内容，对每一个像素点设置`透明度信息`。其中，主体部分的像素点会被设置为“不透明”，主体部分之外的像素点会被设置为“透明”。开发者可以利用这些像素点的透明度信息，对画面中的主体和非主体部分做不同的处理，从而实现不同的功能。

<div class="mk-warning">

- 当前官网 SDK 不包含“主体分割”相关功能，如有需要，请联系 ZEGO 技术支持特殊编包，并提供您的 AppID，开通相关权限。
- “主体分割”功能为付费功能，如需申请体验或咨询正式收费标准，请联系 ZEGO 商务人员。
</div>

### 主体分割对象

对身处不同环境的用户，ZEGO 提供“绿幕背景分割”和“任意背景分割”两种分割能力。

<table>
  <colgroup>
    <col width="12%">
    <col width="44%">
    <col width="44%">
  </colgroup>
<tbody><tr>
<th>分割类型</th>
<th>绿幕背景分割</th>
<th>任意背景分割</th>
</tr>
<tr>
<th>能力描述</th>
<td><p>在用户自行架设了绿幕的情况下，可以将非绿幕区域的主体保留。</p><p>适用于电商直播、在线考试等场景。</p></td>
<td><p>多数用户不具备架设绿幕的条件，可以通过 ZEGO 提供的任意背景分割能力，在没有绿幕的情况下，识别画面中的主体。</p><p>适用于在线教育、视频会议等场景。</p></td>
</tr>
<tr>
<th>图示</th>
<td><img src="/Pics/subject_segmentation/people_with_greenscreen.png" width="50%"></td>
<td><img src="/Pics/subject_segmentation/people_with_realenvironment.jpg" width="50%"></td>
</tr>
</tbody></table>

### 功能场景

基于主体分割能力，开发者可以实现背景虚化、虚拟背景、演讲模式、多人实时同台互动等业务场景，打造更多样的互动体验。

<table>
  <colgroup>
    <col width="12%">
    <col width="22%">
    <col width="22%">
    <col width="22%">
    <col width="22%">
  </colgroup>
<tbody><tr>
<th>功能点</th>
<th>背景虚化</th>
<th>虚拟背景</th>
<th>背景透明</th>
<th>主体分割与传输</th>
</tr>
<tr>
<th>功能描述</th>
<td>将主体外的画面做模糊处理。</td>
<td>将主体外的画面替换为自定义的图片、视频、颜色。</td>
<td><p>将主体的画面渲染在本端的其他视频内容上。</p><p>例如在屏幕共享或正在播放的视频等内容上，实现演讲模式等功能。</p></td>
<td>结合 Express SDK 提供的 Alpha 通道数据传输能力，将画面中分割出的主体传输到拉流端，在拉流端做主体渲染，实现多人异地实时同处于一个场景中的视觉效果</td>
</tr>
<tr>
<th>图示</th>
<td><img src="/Pics/subject_segmentation/background_blur.png" width="80%"></td>
<td><img src="/Pics/subject_segmentation/virtual_background.png" width="80%"></td>
<td><img src="/Pics/subject_segmentation/speech_mode.png" width="80%"></td>
<td><img src="/Pics/subject_segmentation/multiplayer.jpeg" width="80%"></td>
</tr>
</tbody></table>


### 硬件兼容性

<table>
  <colgroup>
    <col width="34%">
    <col width="66%">
  </colgroup>
<tbody><tr>
<th>平台</th>
<th>硬件要求</th>
</tr>
<tr>
<td>Android</td>
<td><ul><li><p>骁龙芯片：</p><ul><li>骁龙 6 系列：骁龙 675 及以上</li><li>骁龙 7 系列：骁龙 730 及以上</li><li>骁龙 8 系列：骁龙 835 及以上</li></ul></li><li><p>海思麒麟芯片：</p><ul><li>麒麟 8 系列：麒麟 820 及以上</li><li>麒麟 9 系列：麒麟 980 及以上</li></ul></li><li><p>联发科芯片：</p><ul><li>Helio P 系列：Helio P60 及以上</li><li>天玑系列：天玑 820 及以上</li></ul></li><li>三星芯片：Exynos 1080 及以上</li></ul></td>
</tr>
<tr>
<td>iOS</td>
<td>A 系列芯片：Apple A9 及以上，例如 iPhone 6s</td>
</tr>
<tr>
<td>macOS</td>
<td>M 系列芯片：Apple M1 及以上</td>
</tr>
<tr>
<td>Windows</td>
<td>Intel Core i5 及以上</td>
</tr>
</tbody></table>










































