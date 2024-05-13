**1. 获取登录 Token**

调用 [ZegoExpressEngine\|_blank](/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine) 的 [loginRoom\|_blank](/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine#login-room) 接口登录房间。登录时，请传入本文 [前提条件](!QuickStart/CreateWboard#2) 所获取到的 Token 进行鉴权。


**注意：临时 Token 仅供调试，正式上线时，请从开发者的业务服务器生成 token，详情可参考 [使用 Token 鉴权\|_blank](!User_Access_Control)。如果 Token 错误，请参考 [错误码\|_blank](!ExpressVideoSDK-Error_Code/Error_Code) 文档中的 1002067 和 1003072 排查问题。** 


**2. 登录房间**  

调用 [loginRoom \|_blank](/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine#login-room) 接口，传入房间 ID 参数 “roomID”、“token” 和用户参数 “user”，根据实际情况传入参数 “config”，登录房间。

<div class="mk-warning">


- 在登录房间之前，请先注册登录房间后需要监听的所有回调。成功登录房间后，即可接收相关的回调。
- “roomID”、“userID” 和 “userName” 参数的取值都为自定义。
- “roomID” 和 “userID” 都必须唯一，建议开发者将 “userID” 设置为一个有意义的值，可将其与自己的业务账号系统进行关联。 
</div>

```javascript
// 登录房间，成功则返回 true
// userUpdate 设置为 true 才能收到 roomUserUpdate 回调。

let userID = Util.getBrow() + '_' + new Date().getTime();
let userName = "user0001";
let roomID = "0001";
let token = ;
// 为避免错过任何通知，您需要在登录房间前先监听用户加入/退出房间、房间连接状态变更、推流状态变更等回调。
zg.on('roomStateChanged', async (roomID, reason, errorCode, extendedData) => {

})
zg.loginRoom(roomID, token, { userID, userName: userID }, { userUpdate: true }).then(result => {
     if (result == true) {
        console.log("login success")
     }
});
```











