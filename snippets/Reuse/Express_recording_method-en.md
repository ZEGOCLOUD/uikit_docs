在进行视频通话、直播、在线教学时，用户经常需要将视频录制保存下来，方便后续其他用户点播观看。ZEGO 提供了多种录制方案，满足不同场景下的录制需求。

<table>
  <colgroup>
    <col width="15%">
    <col width="30%">
    <col width="55%">
  </colgroup>
<tbody><tr>
<th>录制方案</th>
<th>简介</th>
<th>适用场景</th>
</tr>
<tr>
<td>[客户端本地录制](!ExpressVideoSDK-Other_Functions/Local_Media_Recording#2)</td>
<td>通过客户端 SDK 录制您（本地用户）的音视频，并保存到本地。</td>
<td><p>需要录制您（本地用户）的音视频，并保存到本地设备（手机、电脑等终端设备）中。<b>不支持录制其他用户的音视频。</b></p>

<p>调用方式：通过调用客户端 SDK 接口开始录制。</p></td>
</tr>
<tr>
<td>[音频原始数据录制](!ExpressVideoSDK-Other_Functions/Local_Media_Recording#3)</td>
<td>通过获取音频的原始数据，将原始数据保存到本地，完成音频录制。</td>
<td>- 只需要录制音频。
- 只需要保存到本地。
- 需要录制您或他人的音频。</td>
</tr>
<tr>
<td>[云端录制](!ExpressVideoSDK-Other_Functions/Local_Media_Recording#4)</td>
<td>通过 ZEGO 云服务进行录制，并将音视频保存到您开通的云存储中。</td>
<td>- 您已经开通了第三方云存储服务，目前支持 Amazon S3、阿里云 OSS、腾讯云 COS 等。- 需要录制您或他人的音视频。
- 需要区分录制房间内的每个用户，获得房间内每个用户单独的音视频文件。
- 需要把多路音频、视频，或音视频和白板混合录制，将房间内所有用户的音频流、视频流和白板混合录制为一个视频文件。
- 需要使用预置混流布局模版。

<p>调用方式：通过调用 ZEGO 服务端 API 接口开始录制。</p></td>
</tr>
<tr>
<td>[CDN 录制](!ExpressVideoSDK-Other_Functions/Local_Media_Recording#5)</td>
<td>录制直播的音视频，并保存到 ZEGO CDN 上。</td>
<td>- 需要录制直播的音视频，并保存到 ZEGO 的 CDN 中。
- 需要录制您或他人的音视频。&nbsp; &nbsp;&nbsp;

<p>调用方式：您在 <a href="https://console.zego.im" target="_blank">ZEGO 控制台</a> 开通了 CDN 录制后，默认是全局录制，无需调用服务端 API 接口；如果您需要选择性录制，请调用 ZEGO 服务端 API 接口开始录制。</p></td>
</tr>
<tr>
<td>[本地服务端录制](!ExpressVideoSDK-Other_Functions/Local_Media_Recording#6)</td>
<td>通过开发者自己部署的服务端进行录制。</td>
<td>- 您希望通过自己的服务器进行录制，节约成本。
- 需要录制您或他人的音视频。- 需要区分录制房间内的每个用户，获得房间内每个用户单独的音视频文件。
- 需要把多路音频、视频，或音视频和白板混合录制，将房间内所有用户的音频流、视频流和白板混合录制为一个视频文件。

<p>调用方式：通过调用开发者自己搭建的服务器接口开始录制。</p></td>
</tr>
</tbody></table>
