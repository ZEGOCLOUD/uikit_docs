Currently, the ZIM SDK supports the following message types:

<table>
  <colgroup>
    <col width="21%">
    <col width="47%">
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
<td>Enable messages to be more deliverable, and can be stored as message history. Suitable for one-on-one chat and group chat.</td>
</tr>
<tr data-row-level="3">
<td>ZIMCommandMessage(2)</td>
<td>Customizable signaling message. Size limit: 5 KB. Rate limit: 10 requests/second. </td>
<td>Supports massive concurrency. Suitable for live audio room, online classroom, the messages won't be stored after the room is destroyed. </td>
</tr>
<tr data-row-level="4">
<td>ZIMBarrageMessage(20)</td>
<td>In-room barrage message (bullet) screen message). Size limit: 5 KB. No specific rate limit. </td>
<td><p>The high-frequency messages that don't require 100% deliverability, this message type is often used to send bullet screen messages. </p><p>Supports massive concurrency, but the message deliverability can't be guaranteed. </p></td>
</tr>
<tr data-row-level="5">
<td>ZIMImageMessage(11)</td>
<td>Image message. Supports major image formats, including JPG, PNG, BMP, TIFF, and GIF. Size limit: 10 MB. Rate limit: 10 requests/second. </td>
<td rowspan="4">Enable messages to be more deliverable, and can be stored as history messages. Suitable for one-on-one chat, room chat, and group chat.</td>
</tr>
<tr data-row-level="6">
<td>ZIMFileMessage(12)</td>
<td>File message. Supports files in any format. Size limit: 100 MB. Rate limit: 10 requests/second. </td>
</tr>
<tr data-row-level="7">
<td>ZIMAudioMessage(13)</td>
<td>Voice message. Supports voice messages in MP3 format within 300 seconds. Size limit: 6 MB. Rate limit: 10 requests/second. </td>
</tr>
<tr data-row-level="8">
<td>ZIMVideoMessage(14)</td>
<td>Video message. Supports video messages in MP4 or MOV format. Size limit: 100 MB. Rate limit: 10 requests/second. </td>
</tr>
</tbody></table>






























