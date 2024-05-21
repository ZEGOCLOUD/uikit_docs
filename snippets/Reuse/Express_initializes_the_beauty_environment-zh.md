若您需要使用基础美颜功能，则必须在 [startPreview\|_blank](@startPreview) 开始预览、[startPublishingStream\|_blank](@startPublishingStream) 推流前，调用 [startEffectsEnv\|_blank](@startEffectsEnv) 接口初始化美颜环境。

当初始化美颜环境后，SDK 内部会使用固定的视频帧数据类型进行传输，如果您使用基础美颜功能时还需要使用到视频自定义前处理，则只能配置相对应的视频帧数据类型：
- Windows 平台：只支持视频帧裸数据，即 [ZegoCustomVideoCaptureConfig\|_blank](/article/api?doc=Express_Video_SDK_API~CPP_windows~struct~zego-express-zego-custom-video-capture-config&jumpType=route) 的 [bufferType\|_blank](/article/api?doc=Express_Video_SDK_API~CPP_windows~struct~zego-express-zego-custom-video-capture-config&jumpType=route#buffer-type) 取值为 “ZEGO_VIDEO_BUFFER_TYPE_RAW_DATA”。
- iOS 和 macOS 平台：只支持 CVPixelBuffer 类型的数据，即 [ZegoCustomVideoCaptureConfig\|_blank](/article/api?doc=Express_Video_SDK_API~objective-c_ios~class~ZegoCustomVideoCaptureConfig) 的 [bufferType\|_blank](/article/api?doc=Express_Video_SDK_API~objectivec_ios~enum~ZegoVideoBufferType) 取值为 “ZegoVideoBufferTypeCVPixelBuffer”。
- Android 平台：只支持 Texture 2D 类型的数据，即 [ZegoCustomVideoCaptureConfig\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-entity-zego-custom-video-capture-config&jumpType=route) 的 [bufferType\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-entity-zego-custom-video-capture-config&jumpType=route#buffer-type) 取值为 “GL_TEXTURE_2D”。



