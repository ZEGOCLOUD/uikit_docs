1. **H.265 在硬编出现错误怎么办？**

可以调用 [enableH265EncodeFallback\|_blank](/API/ZegoLiveRoom/iOS/html/Categories/ZegoLiveRoomApi+Publisher.html#//api/name/enableH265EncodeFallback:)接口，若 H.265 硬编失败则降级成 H.264，若同时在使用录制功能，则录制文件变为两份。

2. **混流输入 H.265 流，输出 H.264 流时，计费是否有变化？**

没有变化，按输出 H.264 计费。
