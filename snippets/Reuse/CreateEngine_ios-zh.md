调用 [createEngine \|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-app-id-app-sign-is-test-env-scenario-event-handler) 接口，将申请到的 AppID 和 AppSign 传入参数 “appID” 和 “appSign”，创建引擎单例对象。

如果需要注册回调，可将实现了 [ZegoEventHandler\|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~protocol~zego-event-handler) 的对象（例如 “self”）传入参数 “eventHandler”。如果不需要注册回调，可将 “nil” 传入参数 “eventHandler”，创建引擎后仍需要注册回调时可通过调用 [setEventHandler\|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#set-event-handler) 接口设置回调。


<div class = 'mk-warning'>

- 针对 **2021-11-16** 及之前注册 [ZEGO 控制台\|_blank](https://console.zego.im) 的用户：

    - 从控制台申请的 AppID 和 AppSign 等信息默认是测试环境，需要在初始化 SDK 前设置测试环境，否则 SDK 会初始化失败。**应用正式上线前，请向 ZEGO 商务人员申请开启正式环境。**
    - [createEngine\|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-app-id-app-sign-is-test-env-scenario-event-handler) 接口中的 “isTestEnv” 参数设置为 “YES” 时表示使用测试环境；为 “NO” 时表示使用正式环境。

- 针对 **2021-11-16** 之后注册 [ZEGO 控制台\|_blank](https://console.zego.im) 的用户：

    - 控制台分配的 AppID 和 AppSign 等信息都为正式环境。
    - [createEngine\|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-app-id-app-sign-is-test-env-scenario-event-handler) 接口中的 “isTestEnv” 参数取值必须修改为 “NO”，表示使用正式环境。
</div>


```objc
// 填写 appID 和 appSign
unsigned int appID = ;  // 请通过官网注册获取，格式为：1234567890
NSString *appSign = ;  //请通过官网注册获取，格式为：@"0123456789012345678901234567890123456789012345678901234567890123"（共64个字符）

// 创建引擎，使用测试环境，通用场景接入，并注册 self 为 eventHandler 回调
// 不需要注册回调的话，eventHandler 参数可以传 nil，后续可调用 "-setEventHandler:" 方法设置回调
[ZegoExpressEngine createEngineWithAppID:appID appSign:appSign isTestEnv:YES scenario:ZegoScenarioGeneral eventHandler:self];
```

















