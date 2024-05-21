The format of `MessageBody` varies according to the value of `MessageType`. The following table shows the details: 

<table id="MessageBody">
  <colgroup>
    <col width="20%">
    <col width="20%">
    <col width="15%">
    <col width="15%">
    <col width="30%">
  </colgroup>
  <tbody><tr>
    <th>MessageType</th>
    <th>MessageBody format</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td rowspan="7">1 (Text message)</td>
    <td>Message</td>
    <td>String</td>
    <td>Yes</td>
    <td><p>Text message content, it is 2 KB by default. Size limit: 32 KB. For a larger configuration, contact ZEGOCLOUD Technical Support.</p></td>
  </tr>
  <tr>
    <td>ExtendedData</td>
    <td>String</td>
    <td>No</td>
    <td>Extension field.</td>
  </tr>
  <tr>
    <td>OfflinePush</td>
    <td>Object</td>
    <td>No</td>
    <td>Offline notification.</td>
  </tr>
  <tr>
    <td>└ Enable</td>
    <td>String</td>
    <td>No</td>
    <td><p>Enable or disable the offline notifications: </p>
<ul><li>0: Enable (by default).</li><li>1: Disable</li></ul></td>
  </tr>
  <tr>
    <td>└ Title</td>
    <td>String</td>
    <td>Yes (required only when the OfflinePush is filled)</td>
    <td>The title of the offline notification. Maximum number of characters: 20</td>
  </tr>
  <tr>
    <td>└ Content</td>
    <td>String</td>
    <td>Yes (required only when the OfflinePush is filled)</td>
    <td>The offline notification content. Maximum number of characters: 50 </td>
  </tr>
  <tr>
    <td>└ Payload</td>
    <td>String</td>
    <td>No</td>
    <td>The action after receiving the offline notification. </td>
  </tr>
  <tr>
    <td rowspan="2">2 (Command/Signaling message)</td>
    <td>Message</td>
    <td>String</td>
    <td>Yes</td>
    <td><p>Message content, it is 2 KB by default. Size limit: 32 KB. For a larger configuration, contact ZEGOCLOUD Technical Support.</p></td>
  </tr>
  <tr>
    <td>ExtendedData</td>
    <td>String</td>
    <td>No</td>
    <td>Extension field.</td>
  </tr>
</tbody></table>


<div class="mk-warning">

The ZIM Server only supports the Command message type (the `MessageType` is `2`) if the version of the SDK you are using is **earlier than 2.0.0**. 

For a better development experience, we recommend you use the latest version of SDK.
</div>




