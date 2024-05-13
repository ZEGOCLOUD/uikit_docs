After getting your AppID and ServerSecret, you can define the validation rules on your app server or client based on your business requirements. 

Upon request from your app clients, your app server generates Tokens and sends the Tokens to the corresponding app clients. 

ZEGOCLOUD provides an open-source [Token generator\|_blank](https://github.com/ZEGOCLOUD/zego_server_assistant) plug-in on GitHub, which you can use to generate Tokens on your app server using different programming languages such as Go, C++, Java, Python, PHP,.NET, and Node.js.

Currently, the Token generator we provided supports generating the following two Tokens:

- **User identity Token**: to check user identity, you can pass null to the `payload` field.
- **User privilege Token**: to check user privileges by validating the room ID and the ID of the published stream, the `payload` field needs to be generated based on the following validation rules:
    - Validate room login privilege only: to check users' privilege to log in to a room, but not to check their privilege to publish streams in a room.
    - Validate stream publishing privilege only: to check users' privilege to publish streams in a room, but not to check their privilege to log in to a room.
    - Validate both room login and stream publishing privileges: to check users' privilege to log in to a room and also their privilege to publish streams in a room.

<div class="mk-warning">

- For business security, you must generate Tokens on your app server; Otherwise, there is a risk of ServerSecret being stolen.
- For the ZEGO Express SDK 2.17.0 or later, use the `token04` of the [Token generator\|_blank](https://github.com/ZEGOCLOUD/zego_server_assistant) to generate a Token.
</div>

<table>
  <colgroup>
    <col width="10%">
    <col width="20%">
    <col width="20%">
    <col width="20%">
    <col width="15%">
    <col width="15%">
  </colgroup>
  <tbody><tr>
    <th rowspan="2">Language</th>
    <th rowspan="2">Supported version</th>
    <th rowspan="2">Core function</th>
    <th rowspan="2">Code base</th>
    <th colspan="2">Sample code</th>
  </tr>
  <tr>
    <th>User identity Token</th>
    <th>User privilege Token</th>
  </tr>
  <tr>
    <td>Go</td>
    <td>Go 1.14.15 or later</td>
    <td>GenerateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/go/src/token04">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/go/sample/sample.go">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/go/sample/sample-for-rtcroom.go">GitHub</a></li></ul></td>
  </tr>
  <tr>
    <td>C++</td>
    <td>C++ 11&nbsp; or later</td>
    <td>GenerateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/c%2B%2B">GitHub</a></li></ul></td>
    <td colspan="2"><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/c%2B%2B/sample/demo/main.cc">GitHub</a></li></ul></td>
  </tr>
  <tr>
    <td>Java</td>
    <td>Java 1.8&nbsp; or later</td>
    <td>generateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/java/token04">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/java/token04/src/im/zego/serverassistant/sample/Token04SampleBase.java">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/java/token04/src/im/zego/serverassistant/sample/Token04SampleForRtcRoom.java">GitHub</a></li></ul></td>
  </tr>
  <tr>
    <td>Python</td>
    <td>Python 3.6.8&nbsp; or later</td>
    <td>generate_token04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/python/token04">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/python/token04/test/base_sample.py">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/python/token04/test/rtcroom_sample.py">GitHub</a></li></ul></td>
  </tr>
  <tr>
    <td>PHP</td>
    <td>PHP 7.0&nbsp; or later</td>
    <td>generateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/php/token04">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/php/token04/test/test.php">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/php/token04/test/testForRtcRoom.php">GitHub</a></li></ul></td>
  </tr>
  <tr>
    <td>.NET</td>
    <td>.NET Framework 3.5&nbsp; or later</td>
    <td>GenerateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/.net">GitHub</a></li></ul></td>
    <td colspan="2"><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/.net/demo/WindowsFormsApp1/Form1.cs">GitHub</a></li></ul></td>
  </tr>
  <tr>
    <td>Node.js</td>
    <td>Node.js 8&nbsp; or later</td>
    <td>generateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/nodejs">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/nodejs/sample/sample-base.js">GitHub</a></li></ul></td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/nodejs/sample/sample-rtc-room.js">GitHub</a></li></ul></td>
  </tr>
</tbody></table>



Take Go language as an example, you can do the following steps to generate a Token：

1. go get github.com/ZEGOCLOUD/zego_server_assistant
2. import "github.com/ZEGOCLOUD/zego_server_assistant/token/go/src/token04"
3. Call the `GenerateToken04` method to generate a Token.

The following code shows how to generate a user identity Token:


```go
package main

import (
    "fmt"
    "github.com/ZEGOCLOUD/zego_server_assistant/token/go/src/token04"
)

/*
Sample code for generating a user identity Token: 
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

The following code shows how to generate a user privilege Token:

```go
package main

import (
    "encoding/json"
    "fmt"
    "github.com/ZEGOCLOUD/zego_server_assistant/token/go/src/token04"
)

/*
Sample code for generating a user privilege Token:
 */


//Token-based business logic: RTC room-related authentication property 
type RtcRoomPayLoad struct {
    RoomId       string      `json:"room_id"`           //Room ID: used to to validate the room.
    Privilege    map[int]int `json:"privilege"`         //User privilege authentication control list: used to validate user privileges 
    StreamIdList []string    `json:"stream_id_list"`    //Stream list: used to validate the stream. This value can be null, and no stream will be validated if it is null.
}

func main() {
    var appId uint32 = 1
    roomId := "demo"
    userId := "demo"
    serverSecret := "fa94dd0f974cf2e293728a526b028271"
    var effectiveTimeInSeconds int64 = 3600
    privilege := make(map[int]int)
    privilege[token04.PrivilegeKeyLogin] = token04.PrivilegeEnable
    privilege[token04.PrivilegeKeyPublish] = token04.PrivilegeEnable

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

## How to get a temporary Token

To make it easier for you to try and test the user authentication feature, [ZEGOCLOUD Admin Console\|_blank](https://console.zegocloud.com) provides a tool for generating temporary Tokens, which you can use directly in a testing environment. In production, you must generate Tokens on your app server.





















