
The stream playing quality includes the audio and video frame rate, bitrate, delay, packet loss rate, and others of receiving, decoding, and rendering stages of the stream playing process.

The [`ZegoPlayStreamQuality`\|_blank](@-ZegoPlayStreamQuality) object includes quality attributes of different stages of the stream playing process. You can find the detailed attribute definitions in this section:

#### Quality attributes of stream receiving


The stream playing quality attributes below reflect the quality of stream receiving, which is related to the quality of stream transmission (sending) and the current network quality. 


- [`audioRecvFPS`\|_blank](@audioRecvFPS-ZegoPlayStreamQuality): The actual audio receiving frame rate (fps).
- [`audioDejitterFPS`\|_blank](@audioDejitterFPS-ZegoPlayStreamQuality): The audio dejitter frame rate (f/s).
- [`audioKBPS`\|_blank](@audioKBPS-ZegoPlayStreamQuality): The actual audio receiving bitrate (kbps).
- [`audioBreakRate`\|_blank](@audioBreakRate-ZegoPlayStreamQuality): The actual received audio break rate (number of breaks / every 10 seconds).
- [`videoRecvFPS`\|_blank](@videoRecvFPS-ZegoPlayStreamQuality): The actual video receiving frame rate (fps).
- [`videoDejitterFPS`\|_blank](@videoDejitterFPS-ZegoPlayStreamQuality): The video dejitter frame rate (f/s).
- [`videoKBPS`\|_blank](@videoKBPS-ZegoPlayStreamQuality): The actual video receiving bitrate (kbps).
- [`videoBreakRate`\|_blank](@videoBreakRate-ZegoPlayStreamQuality): The actual received video break rate (number of breaks / every 10 seconds).
- [`packetLostRate`\|_blank](@packetLostRate-ZegoPlayStreamQuality): The client-side downstreaming packet loss rate, in percentage, 0.0 - 1.0. 
- [`rtt`\|_blank](@rtt-ZegoPlayStreamQuality): The round-trip time (ms) from the client device to the ZEGO server.
- [`avTimestampDiff`\|_blank](@avTimestampDiff-ZegoPlayStreamQuality): The difference between the video timestamp and the audio timestamp, used to reflect the synchronization of audio and video, in milliseconds. This value is less than 0 means the number of milliseconds that the video leads the audio, greater than 0 means the number of milliseconds that the video lags the audio, and 0 means no difference. When the absolute value is less than 200, it can basically be regarded as synchronized audio and video, when the absolute value is greater than 200 for 10 consecutive seconds, it can be regarded as abnormal.
- [`peerToPeerDelay`\|_blank](@peerToPeerDelay-ZegoPlayStreamQuality): The delay from peer to peer, in milliseconds.
- [`peerToPeerPacketLostRate`\|_blank](@peerToPeerPacketLostRate-ZegoPlayStreamQuality): The packet loss rate from peer to peer, in percentage, 0.0 - 1.0.

#### Quality attributes of stream rendering


The stream playing attributes below reflect the streaming quality at the stream rendering stage, which is close to the viewer's subjective perception. They are affected by the audio/video codec, and the values may be lower than the actual audio/video receiving frame rates.

- [`audioRenderFPS`\|_blank](@audioRenderFPS-ZegoPlayStreamQuality): The audio rendering frame rate (fps). 
- [`videoRenderFPS`\|_blank](@videoRenderFPS-ZegoPlayStreamQuality): The video rendering frame rate (fps).
- [`delay`\|_blank](@delay-ZegoPlayStreamQuality): The delay after the data is received by the local end, in milliseconds. 

#### Quality attributes of the total number of bytes

The stream publishing quality attributes below reflect the total number of bytes received.

- [`totalRecvBytes`\|_blank](@totalRecvBytes-ZegoPlayStreamQuality): The total number of bytes received, including audio, video, SEI.
- [`audioRecvBytes`\|_blank](@audioRecvBytes-ZegoPlayStreamQuality): The number of audio bytes received.
- [`videoRecvBytes`\|_blank](@videoRecvBytes-ZegoPlayStreamQuality): The number of video bytes received

#### Quality attributes of decoding information


The stream playing quality attributes below reflect the decoding information:

- [`videoCodecID`\|_blank](@videoCodecID-ZegoPlayStreamQuality): The video codec.
- [`isHardwareDecode`\|_blank](@isHardwareDecode-ZegoPlayStreamQuality): Whether to enable hardware decoding.







