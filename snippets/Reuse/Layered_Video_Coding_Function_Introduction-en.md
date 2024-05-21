## Introduction

Detailed codec settings can be made as you publish and play the video streams, including enabling the Scalable Video Coding (SVC), hardware codec, and choosing the video codec types.

**Scalable video coding (SVC)**

SVC is a technique to encode a video sequence into a bitstream that contains multiple sub-bitstreams (called layers)—a base layer and one or more enhancement layers. The base layer provides the basic quality of the video content, and each enhancement layer improves the video quality of its lower layers in a certain dimension: frame rate, resolution, or bitrate. As a result, the stream subscriber can choose to receive and decode only the base layer or the base layer plus a certain number of enhancement layers according to its available bandwidth and terminal characteristics (for example, screen size).

SVC enables your app to meet the following requirements:

- Different end-user devices need to play the same live video stream at different quality levels.
- End-user devices need to dynamically switch to the most appropriate quality level of the video stream according to the current network conditions, which helps maintain a smooth streaming experience even under poor network conditions.

**Hardware Codec**

ZEGOCLOUD supports enabling the hardware codec. After the hardware codec is enabled, the GPU is used for encoding and decoding to reduce CPU usage. You can enable this when the device of some models is hot when publishing or playing high-resolution audio and video streams.

**Video codec types**

ZEGOCLOUD supports choosing the different video codec types accordingly to realize the coding alignment across platforms.

Use cases: 

- For general scenarios, use the default video codec type. 
- In the case of the same resolution and frame rate, if the bit rate needs to be reduced, use the `H.265`.
- When your app needs to be applied as mini-programs, use the `H.264`.






