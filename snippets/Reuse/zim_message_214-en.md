<table>
  <colgroup>
    <col width="23%">
    <col width="45%">
    <col width="32%">
  </colgroup>
<tbody><tr data-row-level="1">
<th>Message Type</th>
<th>Description</th>
<th>Feature and Scenario</th>
</tr>
<tr data-row-level="2">
<td>ZIMTextMessage(1)</td>
<td>The text message. A text message cannot exceed 32 KB in size, and up to 10 text messages can be sent per second per client.</td>
<td>Text messages are reliable and in order and can be stored as historical messages, applicable to one-to-one chats, group chats, and on-screen comments in chat rooms. After a room is disbanded, messages in it are not stored.

API: [sendMessage|_blank](@sendMessage)</td>
</tr>
<tr data-row-level="3">
<td>ZIMCommandMessage(2)</td>
<td>The signaling message whose content can be customized. A signaling message cannot exceed 5 KB in size, and up to 10 signaling messages can be sent per second per client.</td>
<td>Signaling messages are applicable to signaling transmission (for example, co-hosting, virtual gifting, and course materials sending) in scenarios with a higher concurrency, such as chat rooms and online classrooms.

API: [sendMessage|_blank](@sendMessage)</td>
</tr>
<tr data-row-level="4">
<td>ZIMBarrageMessage(20)</td>
<td>The on-screen comment in a chat room. An on-screen comment cannot exceed 5 KB in size, and there is no limit on the number of comments that can be sent per second per client.</td>
<td><p>On-screen comments are usually unreliable messages that are sent at a high frequency and can be discarded.</p><p>A high concurrency is supported, but reliability cannot be guaranteed.</p>

API: [sendMessage|_blank](@sendMessage)</td>
</tr>
<tr data-row-level="5">
<td>ZIMImageMessage(11)</td>
<td>The image message. Mainstream image formats, such as JPG, PNG, BMP, TIFF, GIF, and WebP, are supported. An image message cannot exceed 10 MB in size, and up to 10 image messages can be sent per second per client.</td>
<td rowspan="4">Image messages are reliable and in order and can be stored as historical messages (for 14 days by default), usually applicable to one-to-one chats, chat rooms, and group chats.

API: 
[sendMediaMessage|_blank](@sendMediaMessage)</td>
</tr>
<tr data-row-level="6">
<td>ZIMFileMessage(12)</td>
<td>The file message. A file message contains a file of any format and cannot exceed 100 MB in size. Up to 10 file messages can be sent per second per client.</td>
</tr>
<tr data-row-level="7">
<td>ZIMAudioMessage(13)</td>
<td>The audio message. An audio message contains an MP3 or M4A audio of up to 300 seconds and cannot exceed 6 MB in size. Up to 10 audio messages can be sent per second per client.</td>
</tr>
<tr data-row-level="8">
<td>ZIMVideoMessage(14)</td>
<td>The video message. A video message contains an MP4 or MOV video and cannot exceed 100 MB in size. Up to 10 video messages can be sent per second per client. 

**The width and height of the first frame of a video can be obtained after successful message sending only if the video is H.264- or H.265-encoded.**</td>
</tr>
<tr data-row-level="9">
<td>ZIMCombineMessage(100)</td>
<td>Merge messages, there is no limit on message size, and the sending frequency of a single client is limited to 10 times/second.</td>
<td>Text messages are reliable and in order and can be stored as historical messages, applicable to real-time chat scenarios such as one-to-one chats, room, group chats, etc.

API: [sendMessage|_blank](@sendMessage)</td>
</tr>
<tr data-row-level="10">
<td>ZIMCustomMessage(200)</td>
<td>The custom message. You can customize the message type and parse the message without using the ZIM SDK.</td>
<td>Custom messages are usually applicable to votes, solitaire, and video cards.


API: 
[sendMessage|_blank](@sendMessage)</td>
</tr>
</tbody></table>












