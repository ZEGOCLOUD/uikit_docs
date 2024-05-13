To use the basic face beautification features, call the [`startEffectsEnv`\|_blank](@startEffectsEnv) method to initialize the face beautification environment before starting the local video view ([`startPreview`\|_blank](@startPreview)) and publishing streams ([`startPublishingStream`\|_blank](@startPublishingStream)).

After initializing the face beautification environment, the SDK implements the transmission with the default video frame data type. If you need to use the custom video pre-processing feature, you will need to configure the corresponding video frame data type:

- Windows: Only supports the raw type data. That is, you must set the [`bufferType`\|_blank](/article/api?doc=Express_Video_SDK_API~CPP_windows~struct~zego-express-zego-custom-video-capture-config&jumpType=route#buffer-type) of the [`ZegoCustomVideoCaptureConfig`\|_blank](/article/api?doc=Express_Video_SDK_API~CPP_windows~struct~zego-express-zego-custom-video-capture-config&jumpType=route) to `ZEGO_VIDEO_BUFFER_TYPE_RAW_DATA`.
- iOS and macOS: Only supports the data of `CVPixelBuffer` type. That is, you must set the   [`bufferType`\|_blank](/article/api?doc=Express_Video_SDK_API~objectivec_ios~enum~ZegoVideoBufferType) of the [`ZegoCustomVideoCaptureConfig`\|_blank](/article/api?doc=Express_Video_SDK_API~objective-c_ios~class~ZegoCustomVideoCaptureConfig) to `ZegoVideoBufferTypeCVPixelBuffer`.
- Android: Only supports the data of `Texture 2D` type. That is, you must set the [`bufferType`\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-entity-zego-custom-video-capture-config&jumpType=route#buffer-type) of the [`ZegoCustomVideoCaptureConfig`\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-entity-zego-custom-video-capture-config&jumpType=route) to `GL_TEXTURE_2D`. 







