传入用户 ID 参数 “userID” 创建 ZegoUser 用户对象后，调用 [loginRoom \|_blank](/zh/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#login-room) 接口，传入房间 ID 参数 “roomID” 和用户参数 “user”，登录房间。  

<div class = 'mk-warning'>  

- 同一个 AppID 内，需保证 “roomID” 全局唯一。
- 同一个 AppID 内，需保证 “userID” 全局唯一，建议开发者将其设置成一个有意义的值，可将 “userID” 与自己业务账号系统进行关联。
- ZegoUser 的构造方法 `public ZegoUser(String userID)` 会将 “userName” 设为与传的参数 “userID” 一样。“userID” 与 “userName” 不能为 “null” 否则会导致登录房间失败。
</div>  

```java
/** 创建用户 */
ZegoUser user = new ZegoUser("user1");

/** 开始登录房间 */
engine.loginRoom("room1", user, roomConfig, (int error, JSONObject extendedData)->{
    // (Optional callback) The result of logging in to the room. If you only pay attention to the login result, you can use this callback.
}); 
```  

