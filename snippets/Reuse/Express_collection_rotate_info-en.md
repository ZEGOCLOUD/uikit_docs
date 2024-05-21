ZEGO 针对移动端提供 4 种采集旋转模式（固定比例模式、拉流自适应模式、拉流适应推流模式及自定义模式），以简化开发者实现多端旋转表现时面临的复杂适配问题，如摄像头角度、分辨率、自动旋转、statusbar（状态栏）位置适配等。您可以根据旋转表现和业务场景要求，通过 [setAppOrientationMode\|_blank](@setAppOrientationMode) 接口配置不同模式。

<div class="mk-warning">

- 为保证预期的效果，需要推拉流端在一次通话或同一房间内都保持相同的模式。
- 推拉流版本需要同时保持 v2.23.0 版本以上，才能使用拉流自适应以及拉流适配推流模式，因此建议您在新应用中使用。
- PC 端、Web 端以及混流服务已适配旋转模式，由于它们没有移动端的旋转特性，因此默认 statusbar 在屏幕上方。
- 固定比例模式支持所有协议场景，拉流自适应以及拉流适应推流模式仅支持 ZEGO RTC 私有协议以及 ZEGO 混流服务。 
</div>

### 固定比例模式

在固定比例模式下，视频输出方向相对 statusbar 总是保持固定比例，视频画面比例取决于编码分辨率比例。

**优势**：固定比例模式适用于所有场景，也是直播场景中常用的模式。该模式在采集端已处理好视频画面的旋转，拉流端不需要额外处理，因此无直播分发渠道的兼容性问题。

编码比例为竖屏时，推流及拉流端表现如下：

- UI 固定为竖屏


|推流端-预览|录制/转推CDN|拉流端竖屏|拉流端横屏|
|-|-|-|-|
|<img src="/Pics/Express/collection_rotate/Vertical_screen1.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_pic.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4_1.png" width=100%>|
|<img src="/Pics/Express/collection_rotate/Vertical_screen1_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Horizontal_pic_1.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen2.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_screen3.png" width=100%>|



- UI 不锁定（启用 App 屏幕自动旋转）

 |推流端-预览|录制/转推CDN|拉流端竖屏|拉流端横屏|
|-|-|-|-|
|<img src="/Pics/Express/collection_rotate/Vertical_screen1.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_pic.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_screen1.png" width=100%>|
|<img src="/Pics/Express/collection_rotate/Horizontal_screen2.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_pic.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_screen1.png" width=100%>|


### 拉流自适应模式

在拉流自适应模式下，无论何种手持方式或 UI 方向，图像会总保持垂直地面向上。

**优势**：在拉流端自适应模式下，用户可以选择自己喜欢的手持方式进行视频通话，适用于 1v1 或多人视频的 RTC 场景，您也可以通过混流转推实现直播业务。

<div class="mk-warning">

- 拉流自适应模式不支持直推 CDN。如果您需要直播，可以通过 ZEGO 混流服务处理多人画面旋转表现后，再转推 CDN，如有需要，可联系 ZEGO 技术支持开通该配置。 
- 拉流自适应模式在 ZEGO 私有传输协议中记录了摄像头角度、手持方式、statusbar 位置等信息，因此仅支持 ZEGO RTC 协议及 ZEGO 混流服务。
</div>

表现如下：

 |推流端-预览|录制/转推CDN|拉流端竖屏|拉流端横屏|
|-|-|-|-|
|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>| <img src="/Pics/Express/collection_rotate/Vertical_pic_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen5_1.png" width=100%>|
|<img src="/Pics/Express/collection_rotate/Vertical_screen3_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Horizontal_pic.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen5.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_screen3.png" width=100%>|

### 拉流适应推流模式

在拉流适应推流模式下，以 statusbar 作为参考，播放端的视频方向与推流端预览的视频方向一致。播放端会以 statusbar 作为参考对图像进行旋转，播放端的旋转角度和推流端预览的旋转角度一致。

**优势**：拉流适应推流模式与拉流自适应模式类似，但用户可以结合自动旋转开关和手持方式，主动调整满屏或等比缩放的画面表现，适用于 1v1 或多人视频的 RTC 场景。

<div class="mk-warning">


- 拉流适应推流模式不支持直推 CDN。如果您需要直播，可以通过 ZEGO 混流服务处理多人画面旋转表现后，再转推 CDN，如有需要，可联系 ZEGO 技术支持开通该配置。
- 拉流适应推流模式在ZEGO私有传输协议中记录了摄像头角度、手持方式、statusbar 位置等信息，因此仅支持 ZEGO RTC 协议及 ZEGO 混流服务。
</div>

- UI 固定为竖屏时：

 |推流端-预览|录制/转推CDN|拉流端竖屏|拉流端横屏|
|-|-|-|-|
|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>| <img src="/Pics/Express/collection_rotate/Vertical_pic_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4_1.png" width=100%>|
|<img src="/Pics/Express/collection_rotate/Horizontal_screen3.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_pic.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen2.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_screen3.png" width=100%>|

- UI 固定为横屏时：

|推流端-预览|录制/转推CDN|拉流端竖屏|拉流端横屏|
|-|-|-|-|
|<img src="/Pics/Express/collection_rotate/Vertical_screen3_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Horizontal_pic.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen3.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen3_1.png" width=100%>|
|<img src="/Pics/Express/collection_rotate/Vertical_screen6.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_pic_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen6.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen6_1.png" width=100%>|

- UI 不锁定（启用 App 屏幕自动旋转）

|推流端-预览|录制/转推CDN|拉流端竖屏|拉流端横屏|
|-|-|-|-|
|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_pic_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen4.png" width=80%>|<img src="/Pics/Express/collection_rotate/Horizontal_screen1.png" width=100%>|
|<img src="/Pics/Express/collection_rotate/Vertical_screen3_1.png" width=100%>|<img src="/Pics/Express/collection_rotate/Horizontal_pic.png" width=100%>|<img src="/Pics/Express/collection_rotate/Vertical_screen5.png" width=80%>|<img src="/Pics/Express/collection_rotate/Vertical_screen3_1.png" width=100%>|

### 自定义模式


在自定义模式模式下，您可以根据需求自定义视频采集旋转的表现形式，实现方式更加灵活，具体实现步骤，请参考 [如何自定义视频采集旋转方式？\|_blank](http://doc-zh.zego.im/faq/express_video_capture_rotation?product=ExpressVideo&platform=ios)

## 实现流程

<div class="mk-warning">


以下实现流程仅适用于固定比例模式、拉流自适应模式及拉流适应推流模式，如需自定义视频采集旋转方式，请参考 [如何自定义视频采集旋转方式？\|_blank](http://doc-zh.zego.im/faq/express_video_capture_rotation?product=ExpressVideo&platform=ios)
</div>
