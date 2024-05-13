<div class = 'mk-warning'>

针对 **2021-08-30** 及之前注册 [ZEGO 控制台\|_blank](https://console.zego.im) 的用户：

- 从控制台申请的 AppID 默认是测试环境，需要在初始化 SDK 前设置测试环境，否则 SDK 会初始化失败。**开发者的应用上线前，请向 ZEGO 商务人员申请开启正式环境。**
- [createEngine\|_blank](@createEngine) 接口中的 “isTestEnv” 参数设置为 “YES” 时表示使用测试环境；为 “NO” 时表示使用正式环境。

针对 **2021-08-30** 之后注册 [ZEGO 控制台\|_blank](https://console.zego.im) 的用户：

- 控制台不再区分测试环境和正式环境，此时分配的 “AppID” 只有正式环境。
- [createEngine\|_blank](@createEngine) 接口中的 “isTestEnv” 参数必须设置为 “NO”，表示使用正式环境。
</div>
