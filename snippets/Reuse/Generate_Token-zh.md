开发者获得项目的 AppID 和 ServerSecret 信息后，根据实际业务需求，即可在自己的服务端或客户端生成带有校验规则的 Token。校验规则如下：
- 只校验登录权限：登录时校验权限，推流时不校验权限。
- 校验推流权限：推流时校验权限，登录时不校验权限。
- 同时校验登录和推流权限：登录和推流时均校验权限。

<div class="mk-warning">

为保证安全性，强烈推荐您使用服务端生成 Token，否则会存在 ServerSecret 被窃取的风险。

</div>

ZEGO 在 GitHub/Gitee 提供了一个开源的 zego_server_assistant 插件，支持使用 Go、C++、Java、Objective-C、Python、PHP、.NET、Node.js 语言，在开发者的服务端或客户端部署生成 Token。
