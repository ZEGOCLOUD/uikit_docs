拉流质量包含了接收的音视频流的帧率、码率、延时和丢包率，解码阶段音视频流的帧率，以及渲染阶段的帧率、卡顿率、音视频整体质量。本节将介绍拉流质量 [ZegoPlayStreamQuality\|_blank](@-ZegoPlayStreamQuality) 内的参数。

#### 拉流接收质量

拉流接收质量是实际的拉流质量，与实际的推流质量和当前的网络质量相关。相关参数如下：

- [audioRecvFPS\|_blank](@audioRecvFPS-ZegoPlayStreamQuality)：实际接收的音频帧率（fps）
- [audioDejitterFPS\|_blank](@audioDejitterFPS-ZegoPlayStreamQuality)：音频抗抖动帧率（f/s）
- [audioKBPS\|_blank](@audioKBPS-ZegoPlayStreamQuality)：实际接收的音频码率（kbps）
- [audioBreakRate\|_blank](@audioBreakRate-ZegoPlayStreamQuality)：实际接收的音频卡顿率（卡顿次数/每 10 秒）
- [videoRecvFPS\|_blank](@videoRecvFPS-ZegoPlayStreamQuality)：实际接收的视频帧率（fps）
- [videoDejitterFPS\|_blank](@videoDejitterFPS-ZegoPlayStreamQuality)：视频抗抖动帧率（f/s）
- [videoKBPS\|_blank](@videoKBPS-ZegoPlayStreamQuality)：实际接收的视频码率（kbps）
- [videoBreakRate\|_blank](@videoBreakRate-ZegoPlayStreamQuality)：实际接收的视频卡顿率（卡顿次数/每 10 秒）
- [packetLostRate\|_blank](@packetLostRate-ZegoPlayStreamQuality)：设备下行丢包率
- [rtt\|_blank](@rtt-ZegoPlayStreamQuality)：设备到 ZEGO Server 的往返延时（ms）
- [avTimestampDiff\|_blank](@avTimestampDiff-ZegoPlayStreamQuality)：视频时间戳相对于音频时间戳的差值，用于反映音画同步情况，单位为毫秒。此值小于 0 表示视频超前音频的毫秒数，大于 0 表示视频滞后音频的毫秒数，等于0表示无差别。当绝对值小于200，可基本认为音画同步，当绝对值连续 10 秒大于 200 可以认为异常
- [packetLostRate\|_blank](@packetLostRate-ZegoPlayStreamQuality)：丢包率，单位为百分比，取值范围为 0.0 ~ 1.0
- [peerToPeerDelay\|_blank](@peerToPeerDelay-ZegoPlayStreamQuality)： 端到端延迟，单位为毫秒
- [peerToPeerPacketLostRate\|_blank](@peerToPeerPacketLostRate-ZegoPlayStreamQuality)：端到端丢包率，单位为百分比，取值范围为 0.0 ~ 1.0

#### 拉流渲染质量

拉流渲染质量贴近用户观看音视频的主观感受，该质量受解码器影响可能低于实际接收的拉流质量值。相关参数如下：

- [audioRenderFPS\|_blank](@audioRenderFPS-ZegoPlayStreamQuality)：实际的音频渲染帧率
- [videoRenderFPS\|_blank](@videoRenderFPS-ZegoPlayStreamQuality)：实际的视频渲染帧率
- [delay\|_blank](@delay-ZegoPlayStreamQuality)：本端接收到数据后到播放的延迟，单位为毫秒

#### 字节数统计

开发者可统计已接收的视频、音频和总字节数，相关参数如下：

- [totalRecvBytes\|_blank](@totalRecvBytes-ZegoPlayStreamQuality)：已接收的总字节数，包括音频、视频和 SEI 等
- [audioRecvBytes\|_blank](@audioRecvBytes-ZegoPlayStreamQuality)：已接收的音频字节数
- [videoRecvBytes\|_blank](@videoRecvBytes-ZegoPlayStreamQuality)：已接收的视频字节数

#### 解码信息

开发者可获得所拉流的解码信息，相关参数如下：

- [videoCodecID\|_blank](@videoCodecID-ZegoPlayStreamQuality)：视频解码格式
- [isHardwareDecode\|_blank](@isHardwareDecode-ZegoPlayStreamQuality)：是否开启硬件解码

#### MOS 音质评分

ZEGO Express SDK 2.16.0 版本开始，拉流质量回调 [onPlayerQualityUpdate\|_blank](@onPlayerQualityUpdate) 中新增 mos 字段，表示对拉流音质的评分。开发者对音频质量比较关注时，可通过该字段了解当前音频的质量情况。

mos 字段的取值范围为 [-1, 5]，其中 -1 表示未知（例如异常拉流时无法评分），[0, 5] 表示正常评分区间。实时音频 MOS 评分对应的主观音质感受如下：

<table>
  <colgroup>
    <col width="30%">
    <col width="70%">
  </colgroup>
  <tbody><tr>
    <th>MOS 值</th>
    <th>评价标准</th>
  </tr>
  <tr>
    <td>4.0 ～ 5.0</td>
    <td>音质很好，清晰流畅，听的清楚。</td>
  </tr>
  <tr>
    <td>3.5 ～ 4.0</td>
    <td>音质较好，偶有音质损伤，但依然清晰流畅，听的清楚。</td>
  </tr>
  <tr>
    <td>3.0 ～ 3.5</td>
    <td>音质一般，偶有卡顿，需要一点注意力才能听清。</td>
  </tr>
  <tr>
    <td>2.5 ～ 3.0</td>
    <td>音质较差，卡顿频繁，需要集中注意力才能听清。</td>
  </tr>
  <tr>
    <td>2.0 ～ 2.5</td>
    <td>音质很差，部分语义丢失，难以交流。</td>
  </tr>
  <tr>
    <td>0 ～ 2.0</td>
    <td>音质极差，大量语义丢失，无法交流。</td>
  </tr>
  <tr>
    <td>-1</td>
    <td>未知。</td>
  </tr>
</tbody></table>


























