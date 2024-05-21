1. 主播推流后，观众端通过 [onRoomStreamUpdate\|_blank](@onRoomStreamUpdate) 接口收到流新增通知。
2. 观众端从 App 业务服务获取该条推流的编码格式。
- 如果是 H.264 格式，观众可以调用 [startPlayingStream\|_blank](@startPlayingStream) 接口从 CDN 直接拉主播端的流。
- 如果是 H.265 格式，需要先调用 [isVideoDecoderSupported\|_blank](@isVideoDecoderSupported) 接口查询观众端自身设备是否支持 H.265 解码格式。
    - 若支持，则调用 [startPlayingStream\|_blank](@startPlayingStream) 接口从 CDN 拉 H.265 码流。如果拉 H.265 码流失败（通过[onPlayerStateUpdate\|_blank](@onPlayerStateUpdate) 监听），建议改为拉 H.264 码流。
    - 若不支持，则调用 [startPlayingStream\|_blank](@startPlayingStream) 接口从 CDN 拉 H.264 码流。
