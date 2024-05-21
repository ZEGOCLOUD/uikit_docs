您可以通过注册 [onPublisherCapturedAudioFirstFrame\|_blank](@onPublisherCapturedAudioFirstFrame) 接收音频首帧回调。调用推流接口成功后，SDK 采集到第一帧音频数据时会收到此回调。

<div class='mk-hint'>

在未推流或未预览的情况下，首次推流或首次预览，即 SDK 内部的音视频模块的引擎启动时，会去采集本机设备的音频数据，会收到该回调。开发者可根据该回调判断 SDK 是否真的采集到音频数据，若未收到该回调，说明音频采集设备被占用或异常。
</div>
