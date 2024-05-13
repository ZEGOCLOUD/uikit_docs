
以 Go 语言为例，开发者可参考以下步骤使用 zego_server_assistant 生成 Token：

1. 将 “go/zegoserverassistant” 目录拷贝到开发者的服务端项目中。
2. 使用命令 `import zsa "your-project-go-mod-path/zegoserverassistant"` 引入插件，需要将 “your-project-go-mod-path” 替换为开发者自己的项目名称。
3. 调用插件提供的 GenerateToken 方法生成 Token。

生成基础鉴权 Token 示例代码如下：

```go
package main

import (
    "fmt"
    "github.com/zegoim/zego_server_assistant/token/go/src/token04"
)

/*
基础鉴权 Token 示例代码
*/

func main() {
    var appId uint32 = 1
    userId := "demo"
    serverSecret := "fa94dd0f974cf2e293728a526b028271"
    var effectiveTimeInSeconds int64 = 3600
    var payload string = ""

    token, err := token04.GenerateToken04(appId, userId, serverSecret, effectiveTimeInSeconds, payload)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(token)
}
```

生成权限认证 Token 的示例代码如下：

```go
package main

import (
    "encoding/json"
    "fmt"
    "github.com/zegoim/zego_server_assistant/token/go/src/token04"
)

/*
权限认证 Token 生成示例代码
 */


//token业务扩展：RTC房间认证属性
type RtcRoomPayLoad struct {
    RoomId       string      `json:"room_id"`           //房间id；用于对接口的房间id进行强验证
    Privilege    map[int]int `json:"privilege"`         //权限位开关列表；用于对接口的操作权限进行强验证
    StreamIdList []string    `json:"stream_id_list"`    //流列表；用于对接口的流id进行强验证；允许为空，如果为空，则不对流id验证
}

func main() {
    var appId uint32 = 1
    roomId := "demo"
    userId := "demo"
    serverSecret := "fa94dd0f974cf2e293728a526b028271"
    var effectiveTimeInSeconds int64 = 3600
    privilege := make(map[int]int)
    privilege[token04.PrivilegeKeyLogin] = token04.PrivilegeEnable
    privilege[token04.PrivilegeKeyPublish] = token04.PrivilegeDisable

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

    token, err := token04.GenerateToken04(appId, userId, serverSecret, effectiveTimeInSeconds, string(payload))
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(token)
}
```


<div class="mk-hint">


运行生成 Token 的 Java 源码时，如果出现 “java.security.InvalidKeyException:illegal Key Size” 异常提示，可参考如下步骤处理：


1. 在官方网站下载 JCE 无限制权限策略文件。
    - 如果您安装的是 JDK7，可以到 [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files 7\|_blank](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html) 下载该文件。
    - 如果您安装的是 JDK8，可以到 [Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files 8\|_blank](http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html) 下载该文件。
2. 下载完成后，解压该文件，得到 local_policy.jar 、US_export_policy.jar 和 readme.txt 文件。
    - 如果您安装了 JRE，需要将 local_policy.jar 和 US_export_policy.jar 文件拷贝到 “%JRE_HOME%\lib\security” 目录下覆盖原有文件。
    - 如果您安装了 JDK，需要将 local_policy.jar 和 US_export_policy.jar 文件都拷贝到 “%JRE_HOME%\lib\security” 和 “%JDK_HOME%\jre\lib\security” 目录下覆盖原有文件。
</div>

**临时 Token 获取方式**

为方便开发者体验使用 Token 鉴权，[ZEGO 控制台\|_blank](https://console.zego.im/) 提供生成临时 Token 的功能，开发者可直接获取临时 Token 来使用，详情请参考 [控制台（新版） - 项目管理\|_blank](12107) 中的 “项目信息”。但是在开发者自己的线上环境中，一定要通过自己的服务端生成 Token。
