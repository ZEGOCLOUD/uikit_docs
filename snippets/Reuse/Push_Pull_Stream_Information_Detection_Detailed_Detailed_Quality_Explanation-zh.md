推流质量包含了采集、编码阶段音视频流的帧率，传输（发送）的音视频流的帧率、码率、延时及丢包率。本节将介绍推流质量 [ZegoPublishStreamQuality\|_blank](@-ZegoPublishStreamQuality) 内的参数。

#### 推流采集质量

推流采集质量贴近用户预览时的主观感受，推流时 SDK 在采集阶段的音视频质量的相关参数如下：

- [audioCaptureFPS\|_blank](@audioCaptureFPS-ZegoPublishStreamQuality)：音频采集帧率（fps）
- [videoCaptureFPS\|_blank](@videoCaptureFPS-ZegoPublishStreamQuality)：视频采集帧率（fps）

#### 推流编码质量

推流时 SDK 在编码阶段的音视频质量的相关参数如下：

- [videoEncodeFPS\|_blank](@videoEncodeFPS-ZegoPublishStreamQuality)：当前编码器的目标视频编码帧率（fps）

#### 推流发送质量

推流发送质量是实际推流的质量，与实际的网络质量有关，相关参数如下：

- [audioSendFPS\|_blank](@audioSendFPS-ZegoPublishStreamQuality)：实际的音频发送帧率（fps）
- [audioKBPS\|_blank](@audioKBPS-ZegoPublishStreamQuality)：实际的音频发送码率（kbps）
- [videoSendFPS\|_blank](@videoSendFPS-ZegoPublishStreamQuality)：实际的视频发送帧率（fps）
- [videoKBPS\|_blank](@videoKBPS-ZegoPublishStreamQuality)：实际的视频发送码率（kbps）
- [rtt\|_blank](@rtt-ZegoPublishStreamQuality)：设备到 ZEGO Server 的往返延时（ms）
- [packetLostRate\|_blank](@packetLostRate-ZegoPublishStreamQuality)：设备上行丢包率

#### 字节数统计

开发者可统计已发送的视频、音频和总字节数，相关参数如下：

- [totalSendBytes\|_blank](@totalSendBytes-ZegoPublishStreamQuality)：已发送的总字节数
- [audioSendBytes\|_blank](@audioSendBytes-ZegoPublishStreamQuality)：已发送的音频字节数
- [videoSendBytes\|_blank](@videoSendBytes-ZegoPublishStreamQuality)：已发送的视频字节数

#### 编码信息

开发者可获得所推流的编码信息，相关参数如下：
- [videoCodecID\|_blank](@videoCodecID-ZegoPublishStreamQuality)：视频编码格式
- [isHardwareEncode\|_blank](@isHardwareEncode-ZegoPublishStreamQuality)：是否开启硬件编码

#### 上行网络综合质量

若开发者不清楚该回调接口的各个参数应该如何使用，可只关注 [level\|_blank](@level-ZegoPublishStreamQuality) 参数，这是 ZegoExpressEngine 内部根据质量参数计算的一个描述上行网络的综合值。





