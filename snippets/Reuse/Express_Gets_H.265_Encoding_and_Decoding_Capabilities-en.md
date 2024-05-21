### Test H.265 encoding ability

Some outdated or low-end mobile devices do not support H.265 **encoding**.
You need to call the [`isVideoEncoderSupported`\|_blank](@isVideoEncoderSupported) method to test whether the H.265 encoding is supported on your device first.

If supported, call the [`setVideoConfig`\|_blank](@setVideoConfig) method to set the H.265 encoding type before stream publishing; otherwise, the stream publishing will fail.


### Test H.265 decoding ability

Some outdated or low-end mobile devices do not support H.265 **decoding**.

In some cases that you want to play streams with different bitrates, for example, play streams from CDN, you need to call the [`isVideoDecoderSupported`\|_blank](@isVideoDecoderSupported) method to test whether the H.265 decoding is supported on your device first.

If supported, you can play the H.265 streams successfully; otherwise, you can only play H.264 streams. 






