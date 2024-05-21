- 请在 [微信公众平台\|_blank](https://mp.weixin.qq.com/?token=&lang=zh_CN) 上进行 [服务器域名配置\|_blank](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。选择“小程序后台 > 开发 > 开发设置 > 服务器域名”菜单，按照协议分类，将以下`域名`地址填写到指定的 “request 合法域名” 或 “socket 合法域名” 或 “uploadFile 合法域名” 或 “downloadFile 合法域名” 中。

 | 域名 | 描述 | 小程序服务器配置分类 |
| --- | --- | --- |
| <ul><li>wss://webzim-sh2.zego.im</li><li>wss://webzim-sh2-bak.zego.im</li><li>wss://accesshub-wss.zego.im</li></ul> | 接入域名：ZEGO 服务器的 WebSocket 通信地址。| socket 合法域名 |
| wss://webzim-report.zego.im | 数据上报：分析 SDK 数据。| socket 合法域名 |
| https://webzim-detaillog.zego.im | 日志上报：排查故障，定位问题。| <ul><li>request 合法域名</li><li>uploadFile 合法域名</li></ul> |
| <ul><li>https://cloud-setting-api.zego.im</li><li>https://cloud-setting-api.zegocloud.com</li></ul> | 云控配置：动态修改 SDK 能力。| request 合法域名 |
| https://zimfile-sh2.zego.im | 文件媒体消息：文件媒体消息的 URL。| <ul><li>request 合法域名</li><li>uploadFile 合法域名</li><li>downloadFile 合法域名</li></ul> |
