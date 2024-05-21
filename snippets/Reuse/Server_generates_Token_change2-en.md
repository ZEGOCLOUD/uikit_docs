zego_server_assistant 插件中提供了生成权限认证 Token 的示例代码，适用场景如下：

<div class="mk-hint">

权限认证 Token 相关示例代码，请参考 [4.2 生成基础鉴权 Token](10359#4_2)。

</div>

**权限认证 Token**：为了进一步提高安全性，开放房间 ID 和推流 ID 这两个权限位，可以验证登录房间的 ID 和推流 ID，此时 “payload” 字段需要按照规则生成，权限位校验规则如下：
- 只校验登录权限：登录时校验权限，推流时不校验权限。
- 校验推流权限：推流时校验权限，登录时不校验权限。
- 同时校验登录和推流权限：登录和推流时均校验权限。

以 Go 语言为例，开发者可参考以下步骤使用 zego_server_assistant 生成 Token：

1. 将 “go/zegoserverassistant” 目录拷贝到开发者的服务端项目中。
2. 使用命令 `import zsa "your-project-go-mod-path/zegoserverassistant"` 引入插件，需要将 “your-project-go-mod-path” 替换为开发者自己的项目名称。
3. 调用插件提供的 GenerateToken 方法生成 Token，生成权限认证 Token 的示例代码如下：

<div class="mk-warning">


生成权限认证 Token 时必须传入 “RoomId”。
</div>

```go
package main

import (
    "encoding/json"
    "fmt"
    "github.com/zegoim/zego_server_assistant/token/go/src/token04"
)

/*
权限认证token生成示例代码
*/

//token业务扩展：权限认证属性
type RtcRoomPayLoad struct {
    RoomId       string      `json:"room_id"`        //房间 id（必填）；用于对接口的房间 id 进行强验证
    Privilege    map[int]int `json:"privilege"`      //权限位开关列表；用于对接口的操作权限进行强验证
    StreamIdList []string    `json:"stream_id_list"` //流列表；用于对接口的流 id 进行强验证；允许为空，如果为空，则不对流 id 验证
}

func main() {
    var appId uint32 = 1                               // Zego派发的数字ID, 各个开发者的唯一标识
    roomId := "demo"                                   // 房间 ID
    userId := "demo"                                   // 用户 ID
    serverSecret := "fa94dd0f974cf2e293728a526b028271" // 在获取 token 时进行 AES 加密的密钥
    var effectiveTimeInSeconds int64 = 3600            // token 的有效时长，单位：秒

    //请参考 github.com/zegoim/zego_server_assistant/token/go/src/token04/token04.go 定义
    ////权限位定义
    //const (
    //	PrivilegeKeyLogin   = 1 // 是否启用登录权限位认证
    //	PrivilegeKeyPublish = 2 // 是否启用推流权限位认证
    //)

    ////权限开关定义
    //const (
    //	PrivilegeEnable     = 1 // 开启；对权限位进行校验检查
    //	PrivilegeDisable    = 0 // 关闭；不对权限位进行校验检查
    //)

    //业务权限认证配置，可以配置多个权限位
    privilege := make(map[int]int)
    privilege[token04.PrivilegeKeyLogin] = token04.PrivilegeEnable    //开启房间登录权限位认证
    privilege[token04.PrivilegeKeyPublish] = token04.PrivilegeDisable //关闭推流权限位认证

    //token业务扩展配置
    payloadData := &RtcRoomPayLoad{
	RoomId:       roomId,
	Privilege:    privilege,
	StreamIdList: nil,
	}

    payload, err := json.Marshal(payloadData)
    if err != nil {
	fmt.Println(err)
	return
    }

    //生成token
    token, err := token04.GenerateToken04(appId, userId, serverSecret, effectiveTimeInSeconds, string(payload))
    if err != nil {
	fmt.Println(err)
	return
}
    fmt.Println(token)
}

```
4. 如需使用权限认证 token，请参考 [4.3 使用 Token](10359#4_3)。
5. 若 Token 过期，请参考 [4.4 Token 过期时的处理方式](10359#4_4) 进行处理。

<div class="mk-hint">


运行生成 Token 的 Java 源码时，如果出现 “java.security.InvalidKeyException:illegal Key Size” 异常提示，可参考如下步骤处理：


1. 在官方网站下载 JCE 无限制权限策略文件。
    - 如果您安装的是 JDK7，可以到 [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files 7\|_blank](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html) 下载该文件。
    - 如果您安装的是 JDK8，可以到 [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files 8\|_blank](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html) 下载该文件。
2. 下载完成后，解压该文件，得到 local_policy.jar 、US_export_policy.jar 和 readme.txt 文件。
    - 如果您安装了 JRE，需要将 local_policy.jar 和 US_export_policy.jar 文件拷贝到 “%JRE_HOME%\lib\security” 目录下覆盖原有文件。
    - 如果您安装了 JDK，需要将 local_policy.jar 和 US_export_policy.jar 文件都拷贝到 “%JRE_HOME%\lib\security” 和 “%JDK_HOME%\jre\lib\security” 目录下覆盖原有文件。
</div>
