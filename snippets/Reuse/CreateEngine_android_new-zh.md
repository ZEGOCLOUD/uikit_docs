
定义 SDK 引擎对象，调用 [createEngine\|_blank](/zh/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) 接口，将申请到的 AppID 传入参数 “appID”，创建引擎单例对象。

如果需要注册回调，可将实现了 [IZegoEventHandler\|_blank](/zh/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-callback-i-zego-event-handler) 的对象传入参数 “eventHandler”。如果不需要注册回调，可将 “null” 传入参数 “eventHandler”，创建引擎后仍需要注册回调时可通过调用 [setEventHandler\|_blank](/zh/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#set-event-handler) 接口设置回调。

```java
// 创建引擎，通用场景接入，并注册 self 为 eventHandler 回调
// 不需要注册回调的话，eventHandler 参数可以传 null，后续可调用 "setEventHandler:" 方法设置回调
ZegoEngineProfile profile = new ZegoEngineProfile();
profile.appID = ;  // 请通过官网注册获取，格式为：1234567890L
profile.appSign = ;  // 请通过官网注册获取，格式为：@"0123456789012345678901234567890123456789012345678901234567890123"（共64个字符）
profile.scenario = ZegoScenario.GENERAL;  // 通用场景接入
profile.application = getApplication();
engine = ZegoExpressEngine.createEngine(profile, null);
```  























