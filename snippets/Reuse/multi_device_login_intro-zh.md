## 功能简介

ZIM SDK 支持配置自定义多端登录，即用户同一个账号可在多个平台上同时登录，满足用户的会话、消息、群组等数据互通。

<div class="mk-hint">

- 如需使用此功能，请开通专业版或旗舰版套餐，并联系技术支持开通服务并配置登录策略。
- 本功能仅支持 2.11.0 及以上版本的 SDK 使用。
</div>

## 常见的登录策略

多端登录可支持在 Windows、Mac、Linux、Android、iOS、iPad、Web、小程序等八个平台上配置，其中支持在 Windows、Mac、Linux、Android、iOS、iPad 平台配置多设备登录，最多不超过 2 台设备，在 Web 平台配置多实例登录，最多不超过 5 个登录实例。

以下为 ZIM SDK 支持的三种登录策略，即单平台登录、双平台登录以及多平台登录：

<table>
  <colgroup>
    <col width="30%">
    <col width="70%">
  </colgroup>
<tbody><tr>
<th>登录策略</th>
<th>具体说明</th>
</tr>
<tr>
<td>单平台登录（默认）</td>
<td>仅支持用户同时在 1 个平台上登录帐号。如果在其他平台上登录帐号，原平台上的账号会被退出。
</td>
</tr>
<tr>
<td>双平台登录</td>
<td>支持用户在 Windows、Mac、Linux、Android、iOS 和 iPad 的其中 1 个平台上登录帐号，并同时保持帐号在 Web 平台在线。</td>
</tr>
<tr>
<td>多平台登录</td>
<td>是指支持用户同时在 Windows、Mac、Linux、Android、iOS、iPad、Web、小程序多平台登录帐号，支持以下配置：<br><ul><li>同一平台同时多设备、实例登录。</li><li>配置互踢逻辑，当前仅支持 android、iOS 设备互踢，Windows、Mac 设备互踢。</li></ul></td>
</tr>
</tbody></table>












