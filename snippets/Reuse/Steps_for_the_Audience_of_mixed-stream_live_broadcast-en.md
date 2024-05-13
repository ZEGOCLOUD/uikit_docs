
1. Receive the notification from the App Server side that new streams are published.
2. Call the [`isVideoDecoderSupported`\|_blank](@isVideoDecoderSupported) method to test whether the H.265 decoding is supported on the device.
    - If supported, call the [`startPlayingStream`\|_blank](@startPlayingStream) to play the H.265 mixed stream from the CDN. 
    - If it is not supported, call the [`startPlayingStream`\|_blank](@startPlayingStream) to play the H.264 mixed stream from the CDN. 


