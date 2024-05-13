  1. 观众端从 App 的业务服务端收到流新增通知。
  2. 调用 [isVideoDecoderSupported\|_blank](@isVideoDecoderSupported) 接口查询观众端自身设备是否支持 H.265 解码格式。
      - 若支持，则调用 [startPlayingStream\|_blank](@startPlayingStream) 接口从 CDN 拉 H.265 码流。
      - 若不支持，则调用 [startPlayingStream\|_blank](@startPlayingStream) 接口从 CDN 拉 H.264 码流。








