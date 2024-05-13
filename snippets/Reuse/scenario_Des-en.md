

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
    <td rowspan="2">General（通用场景</td>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~Java~class~im-zego-zegoexpress-entity-zego-audio-config">ZegoAudioConfig</a> 类的 “CodecID” 属性预设为 “Normal2”</td>
    <td><ul><li>音频编码格式：AAC-LC</li><li>默认编码码率：48 kbps</li><li>码率范围：16 kbps ～ 192 kbps</li><li>支持协议：支持 ZEGO 私有协议和 RTMP 协议</li></ul></td>
    <td rowspan="2"><ul><li>音乐电台</li><li>1 V 1 音乐</li></ul></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~Java~class~im-zego-zegoexpress-entity-zego-engine-config">ZegoEngineConfig</a> 类的 "advancedConfig" 属性预设为 “GENERAL”</td>
    <td><ul><li>麦上麦克风状态：占用</li><li>麦下麦克风状态：释放</li><li>麦上音量：媒体</li><li>麦下音量：媒体</li></ul></td>
  </tr>
  <tr>
    <td rowspan="2">COMMUNICATION（实时通讯</td>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~Java~class~im-zego-zegoexpress-entity-zego-audio-config">ZegoAudioConfig</a> 类的 “CodecID” 属性预设为 “Low3”</td>
    <td><ul><li>音频编码格式：OPUS</li><li>默认编码码率：48 kbps</li><li>码率范围：6 kbps ～ 192 kbps</li><li>支持协议：支持 ZEGO 私有协议</li></ul></td>
    <td rowspan="2"><ul><li>语聊房</li><li>游戏开黑</li><li>小班课</li><li>1 V 1 学科</li><li>超级小班</li><li>AI 课堂</li></ul></td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~Java~class~im-zego-zegoexpress-entity-zego-engine-config">ZegoEngineConfig</a> 类的 "advancedConfig" 属性预设为 “COMMUNICATION2”</td>
    <td><ul><li>麦上麦克风状态：占用</li><li>麦下麦克风状态：占用</li><li>麦上音量：通话</li><li>麦下音量：通话</li></ul></td>
  </tr>
  <tr>
    <td rowspan="2">LIVE（直播场景）</td>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~Java~class~im-zego-zegoexpress-entity-zego-audio-config">ZegoAudioConfig</a> 类的 “CodecID” 属性预设为 “Normal2”</td>
    <td><ul><li>音频编码格式：AAC-LC</li><li>默认编码码率：48 kbps</li><li>码率范围：16 kbps ～ 192 kbps</li><li>支持协议：支持 ZEGO 私有协议和 RTMP 协议</li></ul></td>
    <td rowspan="2">-</td>
  </tr>
  <tr>
    <td><a target="_blank" href="https://doc-zh.zego.im/article/api?doc=Express_Video_SDK_API~Java~class~im-zego-zegoexpress-entity-zego-engine-config">ZegoEngineConfig</a> 类的 "advancedConfig" 属性预设为 “COMMUNICATION3”</td>
    <td><ul><li>麦上麦克风状态：占用</li><li>麦下麦克风状态：释放</li><li>麦上音量：通话</li><li>麦下音量：媒体</li></ul></td>
  </tr>
</tbody></table>





