您可以通过注册 [onPublisherCapturedVideoFirstFrame\|_blank](@onPublisherCapturedVideoFirstFrame) 接收视频首帧回调。调用推流接口成功后，SDK 采集到第一帧视频数据时会收到此回调。

<div class='mk-hint'>

在未推流或未预览的情况下，调用推流或预览接口后，即 SDK 内部的音视频模块的引擎启动时，会采集本机设备的视频数据，收到该回调。您可以根据该回调判断 SDK 是否真的采集到视频数据，若未收到该回调，说明视频采集设备被占用或异常。
</div>



