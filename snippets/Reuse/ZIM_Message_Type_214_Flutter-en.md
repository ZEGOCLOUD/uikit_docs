目前 ZIM 支持的消息类型如下：

<table>
  <colgroup>
    <col width="23%">
    <col width="45%">
    <col width="32%">
  </colgroup>
<tbody><tr data-row-level="1">
<th>消息类型</th>
<th>说明</th>
<th>特性及适用场景</th>
</tr>
<tr data-row-level="2">
<td>ZIMTextMessage(1)</td>
<td>文本消息。消息大小不超过 32 KB，单个客户端发送频率限制为 10 次/秒。</td>
<td>消息可靠有序，可存储为历史消息；一般适用于“单聊”、“群聊”等即时聊天的场景和“房间聊天”的公屏聊天场景。房间解散后，“房间聊天”的消息不存储。

相关接口：[sendMessage|_blank](https://pub.dev/documentation/zego_zim/latest/zego_zim/ZIM/sendMessage.html)</td>
</tr>
<tr data-row-level="3">
<td>ZIMCommandMessage(2)</td>
<td>开发者可自定义数据类型的信令消息。消息大小不超过 5 KB，单个客户端发送频率限制为 10 次/秒。</td>
<td>支持更高的并发；一般适用于“语聊房”、“在线课堂”等房间内的信令传输，比如上下麦操作、送礼物，发送在线课堂课件等。

相关接口：[sendMessage|_blank](https://pub.dev/documentation/zego_zim/latest/zego_zim/ZIM/sendMessage.html)</td>
</tr>
<tr data-row-level="4">
<td>ZIMBarrageMessage(20)</td>
<td>房间内弹幕文本消息。消息大小不超过 5 KB，单个客户端发送频率无限制。</td>
<td><p>专门用于房间内的高频、不可靠、允许丢掉的消息，一般适用于发送“弹幕消息”的场景中。</p><p>支持高并发，但不可靠，不保证消息送达。</p>

相关接口：[sendMessage|_blank](https://pub.dev/documentation/zego_zim/latest/zego_zim/ZIM/sendMessage.html)</td>
</tr>
<tr data-row-level="5">
<td>ZIMImageMessage(11)</td>
<td>图片消息。支持主流图片格式，包括 JPG、PNG、BMP、TIFF、GIF、WebP，大小不超过 10 MB，单个客户端发送频率限制为 10 次/秒。</td>
<td rowspan="4">消息可靠有序，可存储为历史消息（默认保存 14 天）；一般用于单聊、房间、群聊等即时聊天场景。

相关接口：[sendMediaMessage|_blank](https://pub.dev/documentation/zego_zim/latest/zego_zim/ZIM/sendMediaMessage.html)</td>
</tr>
<tr data-row-level="6">
<td>ZIMFileMessage(12)</td>
<td>文件消息。消息内容为文件，格式不限，大小不超过 100 MB，单个客户端发送频率限制为 10 次/秒。</td>
</tr>
<tr data-row-level="7">
<td>ZIMAudioMessage(13)</td>
<td>语音消息。支持 MP3、M4A 格式的语音文件，时长不超过 300 秒，大小不超过 6 MB，单个客户端发送频率限制为 10 次/秒。</td>
</tr>
<tr data-row-level="8">
<td>ZIMVideoMessage(14)</td>
<td>视频消息。支持 MP4、MOV 格式的视频文件，大小不超过 100 MB，单个客户端发送频率限制为 10 次/秒。**仅支持视频编码格式为 H264 和 H265 的视频文件在消息发送成功后获取该视频首帧的宽、高信息。**</td>
</tr>
<tr data-row-level="9">
<td>ZIMCombineMessage(31)</td>
<td>合并消息，消息大小无限制，单个客户端发送频率限制为 10 次/秒。</td>
<td>消息可靠有序，可存储为历史消息（默认保存 14 天）；一般用于单聊、房间、群聊等即时聊天场景。

相关接口：[sendMessage|_blank](https://pub.dev/documentation/zego_zim/latest/zego_zim/ZIM/sendMessage.html)</td>
</tr>
<tr data-row-level="10">
<td>ZIMCustomMessage(200)</td>
<td>自定义消息。开发者可自定义消息的类型，并自行完成消息的解析，ZIM SDK 不负责定义和解析自定义消息的具体内容。</td>
<td>一般可用于发送投票类型、接龙类型、视频卡片类型等消息。

相关接口：[sendMessage|_blank](https://pub.dev/documentation/zego_zim/latest/zego_zim/ZIM/sendMessage.html)</td>
</tr>
</tbody></table>
