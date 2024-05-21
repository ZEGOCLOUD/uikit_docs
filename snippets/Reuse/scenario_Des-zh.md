<div class="mk-warning">


macOS 和 Windows 平台无需关注 `setAudioDeviceMode`  接口。
</div>

<table>
  <colgroup>
    <col width="15%">
    <col width="25%">
    <col width="25%">
    <col width="25%">
  </colgroup>
  <tbody><tr>
    <th>枚举值</th>
    <th>预设值</th>
    <th>详情</th>
    <th>业务场景推荐</th>
  </tr>
  <tr>
    <td rowspan="2">GENERAL（通用场景）</td>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~java_android~class~ZegoAudioConfig#channel">ZegoAudioConfig</a> 类的 “CodecID” 属性预设为 “Normal2”</td>
    <td><ul><li>默认编码码率：48 kbps</li><li>码率范围：16 kbps ～ 192 kbps</li><li>是否支持双声道：是</li><li>延迟：500ms 左右</li><li>支持协议：ZEGO 私有协议和 RTMP 协议</li><li>用途：可用于 RTC 和 CDN 推流</li><li>转码说明：与 Web SDK 互通时需要服务端转码，转推 CDN 时不需要服务端云转码。</li></ul></td>
    <td rowspan="2"><ul><li>音乐电台</li><li>1 V 1 音乐</li></ul></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~java_android~class~ZegoExpressEngine#set-audio-device-mode">setAudioDeviceMode</a> 指定参数为 "General"</td>
    <td><ul><li>麦上麦克风状态：占用</li><li>麦下麦克风状态：释放</li><li>麦上音量：媒体</li><li>麦下音量：媒体</li></ul></td>
  </tr>
  <tr>
    <td rowspan="2">COMMUNICATION（实时通讯）</td>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~java_android~class~ZegoAudioConfig#channel">ZegoAudioConfig</a> 类的 “CodecID” 属性预设为 “Low3”</td>
    <td><ul><li>默认编码码率：48 kbps</li><li>码率范围：6 kbps ～ 192 kbps</li><li>是否支持双声道：是</li><li>延迟：200ms 左右</li><li>支持协议：ZEGO 私有协议</li><li>用途：仅限 RTC 推流</li><li>转码说明：与 Web SDK 互通时需要服务端转码，转推 CDN 时不需要服务端云转码。</li></ul></td>
    <td rowspan="2"><ul><li>语聊房</li><li>游戏开黑</li><li>小班课</li><li>1 V 1 学科</li><li>超级小班</li><li>AI 课堂</li></ul></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~java_android~class~ZegoExpressEngine#set-audio-device-mode">setAudioDeviceMode</a> 指定参数为 "Communication2"</td>
    <td><ul><li>麦上麦克风状态：占用</li><li>麦下麦克风状态：占用</li><li>麦上音量：通话</li><li>麦下音量：通话</li></ul></td>
  </tr>
  <tr>
    <td rowspan="2">LIVE（直播场景）</td>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~java_android~class~ZegoAudioConfig#channel">ZegoAudioConfig</a> 类的 “CodecID” 属性预设为 “Normal2”</td>
    <td><ul><li>默认编码码率：48 kbps</li><li>码率范围：16 kbps ～ 192 kbps</li><li>是否支持双声道：是</li><li>延迟：500ms 左右</li><li>支持协议：ZEGO 私有协议和 RTMP 协议</li><li>用途：可用于 RTC 和 CDN 推流</li><li>转码说明：与 Web SDK 互通时需要服务端转码，转推 CDN 时不需要服务端云转码。</li></ul></td>
    <td rowspan="2"><ul><li>秀场直播</li><li>电商直播</li><li>游戏直播</li><li>普通直播</li><li>大班课</li></ul></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~java_android~class~ZegoExpressEngine#set-audio-device-mode">setAudioDeviceMode</a> 指定参数为 "Communication3"</td>
    <td><ul><li>麦上麦克风状态：占用</li><li>麦下麦克风状态：释放</li><li>麦上音量：通话</li><li>麦下音量：媒体</li></ul></td>
  </tr>
</tbody></table>

















