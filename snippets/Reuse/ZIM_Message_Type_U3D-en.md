Currently, the ZIM SDK supports the following message types:

<table>
  <colgroup>
    <col width="23%">
    <col width="45%">
    <col width="32%">
  </colgroup>
<tbody><tr data-row-level="1">
<th>Message type</th>
<th>Description</th>
<th>Details</th>
</tr>
<tr data-row-level="2">
<td>ZIMTextMessage(1)</td>
<td>Text message. Size limit: 32 KB. Rate limit: 10 requests/second.</td>
<td>Enable messages to be more deliverable, and can be stored as message history. Suitable for one-on-one chat and group chat.

Relevant method: [SendMessage\|_blank](@SendMessage)
</td>
</tr>
<tr data-row-level="3">
<td>ZIMCommandMessage(2)</td>
<td>Customizable signaling message. Size limit: 5 KB. Rate limit: 10 requests/second.</td>
<td>Supports massive concurrency. Suitable for live audio room, online classroom, the messages won't be stored after the room is destroyed.

Relevant method: [SendMessage\|_blank](@SendMessage)
</td>
</tr>
<tr data-row-level="4">
<td>ZIMBarrageMessage(20)</td>
<td>In-room barrage message (bullet) screen message). Size limit: 5 KB. No specific rate limit.</td>
<td><p>The high-frequency messages that don't require 100% deliverability, this message type is often used to send bullet screen messages.</p><p>
Supports massive concurrency, but the message deliverability can't be guaranteed.</p>

Relevant method: [SendMessage\|_blank](@SendMessage)
</td>
</tr>
<tr data-row-level="5">
<td>ZIMImageMessage(11)</td>
<td>Image message. Supports major image formats, including JPG, PNG, BMP, TIFF, and GIF, WebP. Size limit: 10 MB. Rate limit: 10 requests/second.</td>
<td rowspan="4">Enable messages to be more deliverable, and can be stored as history messages (14 days by default). Suitable for one-on-one chat, room chat, and group chat.

Relevant method: 
[SendMediaMessage\|_blank](@SendMediaMessage)
</td>
</tr>
<tr data-row-level="6">
<td>ZIMFileMessage(12)</td>
<td>File message. Supports files in any format. Size limit: 100 MB. Rate limit: 10 requests/second.</td>
</tr>
<tr data-row-level="7">
<td>ZIMAudioMessage(13)</td>
<td>Voice message. Supports voice messages in MP3, M4A format within 300 seconds. Size limit: 6 MB. Rate limit: 10 requests/second.</td>
</tr>
<tr data-row-level="8">
<td>ZIMVideoMessage(14)</td>
<td>Video message. Supports video messages in MP4 or MOV format. Size limit: 100 MB. Rate limit: 10 requests/second. Only video files encoded in H264 and H265 formats can obtain the width and height information of the first frame of the video after the message is sent successfully. </td>
</tr>
</tbody></table>

