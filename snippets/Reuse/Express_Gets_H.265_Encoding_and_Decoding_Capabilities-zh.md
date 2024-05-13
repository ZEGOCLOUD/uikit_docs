#### 检测 H.265 编码能力

一些老的或低端的移动机型，不支持 H.265 视频**编码**。此时开发者需要在**推流前**先通过 [isVideoEncoderSupported\|_blank](@isVideoEncoderSupported) 接口判断本机是否支持 H.265 视频编码能力。如果支持，才能在推流前通过 [setVideoConfig\|_blank](@setVideoConfig-ZegoExpressEngine) 接口设置 H.265 视频编码类型，否则不生效。

#### 检测 H.265 解码能力

一些老的或低端的移动机型，不支持 H.265 视频**解码**。在支持拉不同视频码流的场景下，如 CDN 场景，开发者需要在**拉流前**先通过 [isVideoDecoderSupported\|_blank](@isVideoDecoderSupported) 接口判断本机是否支持 H.265 视频解码能力。如果支持，才能拉 H.265 视频码流，否则只能拉其他格式的视频码流，例如 H.264。







