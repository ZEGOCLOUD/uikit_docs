<div class = 'mk-warning'>

- 针对 **2021-08-31** 及之前注册 [ZEGO 控制台\|_blank](https://console.zego.im) 的用户：

    - 从控制台申请的 AppID 和 AppSign 等信息默认是测试环境，需要在初始化 SDK 前设置测试环境，否则 SDK 会初始化失败。**应用正式上线前，请向 ZEGO 商务人员申请开启正式环境。**
    - [createEngine\|_blank](@createEngine) 接口中的 “isTestEnv” 参数设置为 “true” 时表示使用测试环境；为 “false” 时表示使用正式环境。

- 针对 **2021-08-31** 之后注册 [ZEGO 控制台\|_blank](https://console.zego.im) 的用户：

    - 控制台分配的 AppID 和 AppSign 等信息都为正式环境。
    - [createEngine\|_blank](@createEngine) 接口中的 “isTestEnv” 参数取值必须修改为 “false”，表示使用正式环境。
</div>


