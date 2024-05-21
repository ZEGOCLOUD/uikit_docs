调用 [createEngineWithProfile \|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-profile-event-handler) 接口，将申请到的 AppID 传入参数 “appID”，创建引擎单例对象。

如果需要注册回调，可将实现了 [ZegoEventHandler\|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~protocol~zego-event-handler) 的对象（例如 “self”）传入参数 “eventHandler”。如果不需要注册回调，可将 “nil” 传入参数 “eventHandler”，创建引擎后仍需要注册回调时可通过调用 [setEventHandler\|_blank](/zh/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#set-event-handler) 接口设置回调。

```objc
/**
* appID:ZEGO 为开发者签发的应用 ID，请从 ZEGO 控制台 https://console-express. 
* zego.im 申请，取值范围为 0~4294967295。
* appSign: ZEGO 为开发者签发的应用 appSign，请从 ZEGO 控制台 https://console-express.  zego.im 申请
* scenario: 所属的应用场景,ZegoScenarioGeneral为通用场景
*/
ZegoEngineProfile *profile = [[ZegoEngineProfile alloc] init];
profile.appID = <#appID#>;
profile.appSign = <#appSign#>;
profile.scenario = ZegoScenarioGeneral;
// 创建引擎，并注册 self 为 eventHandler 回调。不需要注册回调的话，eventHandler 参数可以传 nil，后续可调用 "-setEventHandler:" 方法设置回调
[ZegoExpressEngine createEngineWithProfile:profile eventHandler:self];
```














