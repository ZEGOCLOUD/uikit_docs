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
<td>Enable messages to be more deliverable, and can be stored as message history. Suitable for one-on-one chat and group chat.</td>
</tr>
<tr data-row-level="3">
<td>ZIMCommandMessage(2)</td>
<td>Customizable signaling message. Size limit: 5 KB. Rate limit: 10 requests/second.</td>
<td>Supports massive concurrency. Suitable for live audio room, online classroom, the messages won't be stored after the room is destroyed.</td>
</tr>
<tr data-row-level="4">
<td>ZIMBarrageMessage(20)</td>
<td>In-room barrage messgae (bullet) screen message). Size limit: 5 KB. No specific rate limit.</td>
<td><p>The high-frequency messages that doesn't require 100% deliverability, this message type is often be used to send bullet screen messages.</p><p>Supports massive concurrency, but the message deliverability can't be guaranteed. </p></td>
<tr data-row-level="5">
<td>ZIMImageMessage(11)</td>
<td>Image messages.  JPG, PNG, BMP, TIFF, GIF, WebP, are supported. It must be within 10 MB. Rate limit: 10 requests/second.</td>
<td rowspan="4"> Messages are reliable and orderly, and can be stored as historical messages (14 days by default). Generally used for one-on-one chats, room chats, group chats, and other chat scenes.

</td>
</tr>
<tr data-row-level="6">
<td>ZIMFileMessage(12)</td>
<td>File message. No formate limited. File size limit: 100 MB. Rate limit: 10 requests/second.</td>
</tr>
<tr data-row-level="7">
<td>ZIMAudioMessage(13)</td>
<td>Audio message. MP3, M4A are supported. Audio duration must be within 300 seconeds. Size limit: 6 MB. Rate limit: 10 requests/second.</td>
</tr>
<tr data-row-level="8">
<td>ZIMVideoMessage(14)</td>
<td>Video message. MP4 and MOV are supported. Size limit: 100 MB. Rate limit: 10 requests/second.</td>
</tr>
</tbody></table>
</tr>
</tbody></table>






