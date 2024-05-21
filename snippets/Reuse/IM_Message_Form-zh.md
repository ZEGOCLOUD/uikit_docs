根据 `MessageType` 的取值不同，`MessageBody` 的格式不同，请参考下表：

<table id="MessageBody">
  <colgroup>
    <col width="20%">
    <col width="18%">
    <col width="13%">
    <col width="17%">
    <col width="32%">
  </colgroup>
  <tbody><tr>
    <th>MessageType</th>
    <th>MessageBody<br/>参数格式</th>
    <th>类型</th>
    <th>是否必选</th>
    <th>描述</th>
  </tr>
  <tr>
    <td rowspan="7">1（文本消息）</td>
    <td>Message</td>
    <td>String</td>
    <td>是</td>
    <td><p>文本消息内容，默认为 2 KB；最大为 32 KB，如有需要请联系 ZEGO 技术支持配置。</p></td>
  </tr>
  <tr>
    <td>ExtendedData</td>
    <td>String</td>
    <td>否</td>
    <td>扩展字段。</td>
  </tr>
  <tr>
    <td>OfflinePush</td>
    <td>Object</td>
    <td>否</td>
    <td>离线推送。</td>
  </tr>
  <tr>
    <td>└ Enable</td>
    <td>Int32</td>
    <td>否</td>
    <td><p>是否开启离线推送：</p>
<ul><li>0：不推送（默认值）。</li><li>1：推送。</li></ul></td>
  </tr>
  <tr>
    <td>└ Title</td>
    <td>String</td>
    <td>是（仅当填写了 OfflinePush 时）</td>
    <td>离线推送展示的标题，最大 20 个字符。</td>
  </tr>
  <tr>
    <td>└ Content</td>
    <td>String</td>
    <td>是（仅当填写了 OfflinePush 时）</td>
    <td>离线推送展示的内容，最大 50 个字符。</td>
  </tr>
  <tr>
    <td>└ Payload</td>
    <td>String</td>
    <td>否</td>
    <td>扩展字段，开发者可以自定义收到离线推送消息后的行为。</td>
  </tr>
  <tr>
    <td rowspan="2">2（Command 消息）</td>
    <td>Message</td>
    <td>String</td>
    <td>是</td>
    <td><p>Command 消息内容，默认为 2 KB；最大为 32 KB，如有需要请联系 ZEGO 技术支持配置。</p></td>
  </tr>
  <tr>
    <td>ExtendedData</td>
    <td>String</td>
    <td>否</td>
    <td>扩展字段。</td>
  </tr>
</tbody></table>









