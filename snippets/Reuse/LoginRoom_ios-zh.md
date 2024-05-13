传入用户 ID 参数 “userID” 创建 [ZegoUser \|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-user#includes) 用户对象后，调用 [loginRoom \|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#login-room-user) 接口，传入房间 ID 参数 “roomID” 和用户参数 “user”，登录房间。


<div class="mk-warning">
    

- 同一个 AppID 内，需保证 “roomID” 全局唯一。  
- 同一个 AppID 内，需保证 “userID” 全局唯一，建议开发者将其设置成一个有意义的值，可将 “userID” 与自己业务账号系统进行关联。   
- ZegoUser 的构造方法 [userWithUserID \|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-user#user-with-user-id) 会将 “userName” 设为与传的参数 “userID” 一样。“userID” 与 “userName” 不能为 “nil”，否则会导致登录房间失败。  

</div>


```objc
// 创建用户对象
ZegoUser *user = [ZegoUser userWithUserID:@"user1"];

// 开始登录房间
[[ZegoExpressEngine sharedEngine] loginRoom:@"room1" user:user];
```
