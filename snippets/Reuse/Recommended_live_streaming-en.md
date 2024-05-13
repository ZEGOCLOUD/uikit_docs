Here are two ways for you to implement the co-hosting live streaming using stream mixing, you can choose either of the following based on your real needs:

- Output streams of different formats directly (recommended): Use the stream mixing service to output a single H.265 mixed stream and a single H.264 mixed stream. This method allows you to only transcode once during the stream mixing, which is clearer and more cost-effective than the method below.

- Use the CDN for transcoding after mixed streams: Use the stream mixing service to output an H.265 stream, and then use the CDN for transcoding to get a single H.265 mixed stream and a single H.264 mixed stream.


