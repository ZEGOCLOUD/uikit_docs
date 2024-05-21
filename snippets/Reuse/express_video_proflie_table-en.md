<table>
  <colgroup>
    <col width="25%">
    <col width="50%">
    <col width="25%">
  </colgroup>
<tbody><tr>
<th>场景</th>
<th>场景描述</th>
<th>关键配置说明</th>
</tr>
<tr>
<td>Broadcast</td>
<td>直播场景，适用于秀场、游戏、电商、教育大班课等一对多直播的场景，对音画质量、流畅度、兼容性进行了优化。
<br>注意：支持 3.0.0 及以上版本，即便是直播场景，SDK 也没有业务上的 “角色” 之分（例如主播、观众），房间内的所有用户均可推拉流。</td>
<td><ul><li>分辨率：540p。</li><li>帧率：24 fps。</li><li>音频编码器兼容：与 Web SDK 互通时需要服务端转码。</li></ul></td>
</tr>
<tr>
<td>StandardVideoCall</td>
<td>标准音视频通话场景，适用于 1 V 1 视频或语音通话场景。<br>注意：支持 3.0.0 及以上版本。</td>
<td><ul><li>分辨率：360p。</li><li>帧率：15 fps。</li><li>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</li></ul></td>
</tr>
<tr>
<td>HighQualityVideoCall</td>
<td>高品质音视频通话场景，与 StandardVideoCall 场景类似，但该场景默认采用了比 StandardVideoCall 场景更高的视频帧率、码率、分辨率 ，适用于对画质要求较高的视频通话场景。<br>注意：支持 3.0.0 及以上版本。</td>
<td><ul><li>分辨率：540p。</li><li>帧率：24 fps。</li><li>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</li></ul></td>
</tr>
<tr>
<td>StandardVoiceCall</td>
<td>标准语音通话场景，适用于 1 v 1 纯语音通话场景。
<br>注意：支持 3.3.0 及以上版本，在实时音视频 (ExpressVideo) SDK 上，此场景默认不开启摄像头。</td>
<td>-</td>
</tr>
<tr>
<td>StandardChatroom</td>
<td>标准语聊房场景，适用于多人纯语音通话。（节省流量）
<br>注意：支持 3.0.0 及以上版本，在实时音视频 （ExpressVideo） SDK 上，此场景默认不开启摄像头。</td>
<td>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</td>
</tr>
<tr>
<td>HighQualityChatroom</td>
<td>高品质语聊房场景，与 StandardChatroom 场景类似，但此场景默认采用了比 StandardChatroom 场景下更高的音频码率。适用于对音质要求较高的多人纯语音通话场景。<br>注意：支持 3.0.0 及以上版本，在实时音视频 （ExpressVideo）SDK 上，此场景默认不开启摄像头。</td>
<td>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</td>
</tr>
<tr>
<td>Karaoke</td>
<td>卡拉 OK （KTV）场景，适用于实时合唱、在线 K 歌场景，对延迟、音质、耳返、回声消除等进行了优化，同时还保障了多人合唱时的精准对齐和超低时延。
<br>注意：支持 3.0.0 及以上版本，在实时音视频（ExpressVideo）SDK 上，此场景默认不开启摄像头。</td>
<td>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</td>
</tr>
<tr>
<td>Default</td>
<td>默认（通用）场景，若上述场景枚举均不符合开发者的实际应用场景，可以使用此默认场景。<br>注意：支持 3.0.0 及以上版本。</td>
<td><ul><li>分辨率：360p。</li><li>帧率：15 fps。</li><li>音频编码器兼容：与 Web SDK 互通时需要服务端转码。</li></ul></td>
</tr>
</tbody></table>
