<div class="mk-warning">

通过 [setCustomVideoCaptureDeviceState\|_blank](@setCustomVideoCaptureDeviceState) 设置的 ZegoRemoteDeviceStateDisable（设备关闭：禁用采集） 和 ZegoRemoteDeviceStateMute（设备关闭：远端设备被静音） 设备状态不会生效，ZegoRemoteDeviceStateDisable 通过 [enableCamera] 触发的，ZegoRemoteDeviceStateMute 通过 [muteVideoPublish] 触发。
</div>

收到 [onStart\|_blank](@onStart) 回调后，可以根据需要调用 [setCustomVideoCaptureDeviceState\|_blank](@setCustomVideoCaptureDeviceState) 接口设置指定推流通道的自定义采集设备状态。

拉流端可以通过监听 [onRemoteCameraStateUpdate\|_blank](@onRemoteCameraStateUpdate) 回调获取推流端设备状态。
