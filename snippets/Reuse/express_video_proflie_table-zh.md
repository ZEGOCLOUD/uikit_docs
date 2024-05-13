<table>
  <colgroup>
    <col width="20%">
    <col width="50%">
    <col width="30%">
  </colgroup>
<tbody><tr>
<th>场景（支持版本：3.0.0 及以上）
</th>
<th>场景描述</th>
<th>关键配置说明</th>
</tr>
<tr>
<td>Broadcast</td>
<td><p>直播场景，适用于秀场、游戏、电商、教育大班课等一对多直播的场景中，对音画质量、流畅度、兼容性等进行了优化。</p><p>注意：直播场景中，SDK 没有业务上的 “角色” 之分（例如主播、观众），房间内的所有用户均可推拉流。</td>
<td><ul><li>分辨率：540p。</li><li>帧率：24 fps。</li><li>音频编码器兼容：与 Web SDK 互通时需要服务端转码。</li></ul></td>
</tr>
<tr>
<td>StandardVideoCall</td>
<td><p>标准音视频通话场景，适用于 1v1 视频或语音通话场景。</p></td>
<td><ul><li>分辨率：360p。</li><li>帧率：15 fps。</li><li>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</li></ul></td>
</tr>
<tr>
<td>HighQualityVideoCall</td>
<td><p>高品质音视频通话场景，与 StandardVideoCall 场景类似，但该场景默认采用了比 StandardVideoCall 场景更高的视频配置，适用于对画质要求较高的视频通话场景。</p></td>
<td><ul><li>分辨率：540p。</li><li>帧率：24 fps。</li><li>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</li></ul></td>
</tr>
<tr>
<td>StandardVoiceCall</td>
<td><p>标准语音通话场景，适用于 1v1 纯语音通话场景。</p><p>注意：在实时音视频 (Express-Video) SDK 上，此场景默认不开启摄像头。</p></td>
<td>-</td>
</tr>
<tr>
<td>StandardChatroom</td>
<td><p>标准语聊房场景，适用于多人纯语音通话，节省流量。</p><p>注意：在实时音视频 （Express-Video） SDK 上，此场景默认不开启摄像头。<b>建议存在音乐的语聊房场景选择高品质语聊房场景配置。 
</p></td>
<td>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</td>
</tr>
<tr>
<td>HighQualityChatroom</td>
<td><p>高品质语聊房场景，与 StandardChatroom 场景类似，但此场景默认采用了比 StandardChatroom 场景下更高的音频配置，适用于对音质要求较高的多人纯语音通话场景。</p><p>注意：在实时音视频 （Express-Video）SDK 上，此场景默认不开启摄像头。</p></td>
<td>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</td>
</tr>
<tr>
<td>Karaoke</td>
<td><p>卡拉 OK （KTV）场景，适用于实时合唱、在线 K 歌场景，对延迟、音质、耳返、回声消除等进行了优化，同时还保障了多人合唱时的精准对齐和超低时延。</p><p>注意：在实时音视频（Express-Video）SDK 上，此场景默认不开启摄像头。</p></td>
<td>音频编码器兼容：仅可用于 RTC 推流，转推 CDN 时需要服务端转码。</td>
</tr>
<tr>
<td>Default</td>
<td><p>默认（通用）场景，若上述场景枚举均不符合开发者的实际应用场景，可以使用此默认场景。</p></td>
<td><ul><li>分辨率：360p。</li><li>帧率：15 fps。</li><li>音频编码器兼容：与 Web SDK 互通时需要服务端转码。</li></ul></td>
</tr>
</tbody></table>

















