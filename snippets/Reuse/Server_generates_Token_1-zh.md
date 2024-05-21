开发者获得项目的 AppID 和 ServerSecret 信息后，根据实际业务需求，即可在自己的服务端生成 Token。开发者客户端向开发者服务端发送申请 Token 请求，由开发者服务端生成 Token 后返回给到对应客户端。

ZEGO 在 GitHub/Gitee 提供了一个开源的 zego_server_assistant 插件，支持使用 Go、C++、Java、Objective-C、Python、PHP、.NET、Node.js 语言，在开发者的服务端或客户端部署生成 Token。

zego_server_assistant 插件中提供了生成**基础鉴权 Token** 和生成**权限认证 Token** 的示例代码，两者的适用场景如下，开发者可按需选择：
- **基础鉴权 Token**：用于业务的简单权限验证的场景，此时 “payload” 字段可传空。
- **权限认证 Token**：为了进一步提高安全性，开放房间 ID 和推流 ID 这两个权限位，可以验证登录房间的 ID 和推流 ID，此时 “payload” 字段需要按照规则生成，可参考下表的“权限认证 Token”示例代码。权限位校验规则如下：
    - 只校验登录权限：登录时校验权限，推流时不校验权限。
    - 校验推流权限：推流时校验权限，登录时不校验权限。
    - 同时校验登录和推流权限：登录和推流时均校验权限。


