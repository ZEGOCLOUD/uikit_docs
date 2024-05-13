当您的用户在使用 ZEGO 小游戏服务时，ZEGO 服务端会根据用户初始化 SDK 时携带的 Token 参数判断用户是否有权限，避免因权限控制缺失或操作不当引发的风险问题。

请参考 [使用 Token 鉴权\|_blank](!ZegoMiniGameEngine-Token_Authenticaiton) 文档，在您的服务端生成 Token 并返回给向用户客户端。

<div class="mk-hint">

为便捷项目测试，您可以从 [ZEGO 控制台\|_blank](https://console.zego.im/) 获取临时 Token，详情请参考控制台的 [项目信息 - 辅助工具\|_blank](#12107#2_3)。但项目上线时，请从您的服务端生成 Token，以保障安全。
</div>





