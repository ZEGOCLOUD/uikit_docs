## 功能简介

使用 Token 鉴权，指用户在初始化 ZEGO MiniGameEngine SDK 时，ZEGO 的服务端会根据用户初始化时携带的 Token 参数，判断用户是否有权限使用小游戏服务，避免因权限控制缺失或操作不当引发的风险问题。

## 实现原理

用户初始化 ZEGO MiniGameEngine SDK 之前，您的服务端应先生成 Token，ZEGO 服务端会对带着 Token 的用户进行校验，根据 Token 参数判断用户是否为合法用户。

初始化时 Token 校验的流程如下图：

<img src="/Pics/MiniGames/MiniGame_Token.png" width=80%>

1. 客户端发起申请 Token 的请求。
2. 在开发者的服务端上生成 Token，并返回给客户端。
3. 客户端携带申请到的 Token 初始化 ZEGO MinGameEngine SDK。
4. ZEGO MiniGameEngine SDK 会自动将 Token 发送到 ZEGO 服务端进行校验。
5. ZEGO 服务端会将校验的结果返回给 ZEGO MinGameEngine SDK。
6. ZEGO MinGameEngine SDK 再将校验的结果直接返回给客户端，没有权限的客户端初始化将失败。

## 前提条件

在使用 Token 鉴权之前，请确保已在项目中集成 ZEGO MiniGameEngine SDK，详情请参考 [集成 SDK\|_blank](!ZegoMiniGameEngine-Integrate_SDK)。

## 使用步骤

以下将介绍开发者的服务端如何生成 Token、如何使用 SDK 设置 Token、以及 Token 过期时的处理方式。

### 1 生成 Token

<div class="mk-warning">

为保证安全性，ZEGO 强烈建议开发者在自己的服务端生成 Token。 
</div>

#### 1.1 获取 AppID 和 ServerSecret。

前往 [ZEGO 控制台\|_blank](https://console.zego.im) 创建项目，获取接入小游戏服务所需的 AppID 和 ServerSecret。随后联系 ZEGO 商务人员开通小游戏服务。

#### 1.2 开发者服务端生成 Token。

<div class="mk-hint">

客户端向开发者服务端发送请求申请 Token，由开发者服务端计算 Token 并返回给对应客户端。
</div>

为方便开发者使用，ZEGO 在 GitHub/Gitee 提供了一个开源的 zego_server_assistant 插件，支持使用 Go、C++、Java、Python、PHP、.NET、Node.js 等语言，在开发者的服务端部署生成 Token。

<table>
  <colgroup>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
<tbody><tr>
<th>语言</th>
<th>支持版本</th>
<th>关键函数</th>
<th>具体地址</th>
</tr>
<tr>
<td>Go</td>
<td>Go 1.14.15 或以上版本</td>
<td>GenerateToken04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/blob/release/github/token/go/src/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/blob/release/github/token/go/src/token04">Gitee</a></li></ul></td>
</tr>
<tr>
<td>C++</td>
<td>C++ 11 或以上版本</td>
<td>GenerateToken04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/blob/release/github/token/c%2B%2B/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/c++/token04">Gitee</a></li></ul></td>
</tr>
<tr>
<td>Java</td>
<td>Java 1.8 或以上版本</td>
<td>generateToken04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/java/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/java/token04">Gitee</a></li></ul></td>
</tr>
<tr>
<td>Python</td>
<td>Python 3.6.8 或以上版本</td>
<td>generate_token04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/python/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/python/token04">Gitee</a></li></ul></td>
</tr>
<tr>
<td>PHP</td>
<td>PHP 7.0 或以上版本</td>
<td>generateToken04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/php/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/php/token04">Gitee</a></li></ul></td>
</tr>
<tr>
<td>.NET</td>
<td>.NET Framework 3.5 或以上版本</td>
<td>GenerateToken04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/.net/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/.net/token04">Gitee</a></li></ul></td>
</tr>
<tr>
<td>Node.js</td>
<td>Node.js 8 或以上版本</td>
<td>generateToken04</td>
<td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/nodejs/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/nodejs/token04">Gitee</a></li></ul></td>
</tr>
</tbody></table>


以 Go 语言为例，开发者可参考以下步骤使用 zego_server_assistant 生成 Token：


1. 首先将 “go/zegoserverassistant” 目录，拷贝到开发者的服务端项目中。
2. 使用命令 `import zsa "your-project-go-mod-path/zegoserverassistant"` 引入插件，需要将 “your-project-go-mod-path” 替换为开发者自己的项目名称。
3. 调用插件提供的 `GenerateToken04` 方法生成 Token。

```go
var appId uint32 = <Your AppId>   // 在 ZEGO 控制台创建项目后获取的 AppID，类型为 uint32
userId := <Your userID>  // 有您定义的用户 ID，类型为 string
secret := <ServerSecret>  // 在 ZEGO 控制台创建项目后获取的 AppID，是长度为 32 字节的 string
var effectiveTimeInSeconds int64 = <Your token effectiveTime> // Token 有效时长，类型为 int64，单位为秒(s)

token, err := zsa.GenerateToken04(appId, userId, secret, effectiveTimeInSeconds)
if err != nil {
    fmt.Println(err)
    return
}
fmt.Println(token)
```

















