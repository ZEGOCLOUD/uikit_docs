您可以通过注册 [onPublisherVideoSizeChanged\|_blank](@onPublisherVideoSizeChanged) 监听采集视频大小变更回调。推流成功后，在推流中途如果视频采集分辨率发生变化将会收到此回调。

<div class='mk-hint'>

当在未推流或未预览的情况下，首次推流或首次预览，即 SDK 内部的音视频模块的引擎启动时，会采集本机设备的视频数据，此时采集分辨率会改变。

您可以根据此回调来去除本地预览的 UI 的遮盖等类似操作。也可以根据该回调的分辨率来动态调整预览视图的比例等。
</div>



