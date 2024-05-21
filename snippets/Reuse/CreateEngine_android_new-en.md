To create a singleton instance of the `ZegoExpressEngine` class, call the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) method with the **AppID** of your project.

To receive callbacks, implement an event handler object that conforms to the [`IZegoEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-callback-i-zego-event-handler) protocol, and then pass the implemented event handler object to the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) method as the `eventHandler` parameter.
Alternatively, you can pass `null` to the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) method as the `eventHandler` parameter for now, and then call the method [`setEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#set-event-handler) to set up the event handler after creating the engine.


```java
//  Create a ZegoExpressEngine instance and set eventHandler to [self]. 
// If eventHandler is set to [null], no callback will be received. You can set up the event handler later by calling the [setEventHandler:] method.
ZegoEngineProfile profile = new ZegoEngineProfile();
profile.appID = ;  // The AppID you get from ZEGOCLLOUD Admin Console. AppID format: 123456789L
profile.appSign = ;  // The AppSign you get from ZEGOCLOUD Admin Console. AppSign format: @"0123456789012345678901234567890123456789012345678901234567890123" (64 characters)
profile.scenario = ZegoScenario.GENERAL;  // Use general scenario.
profile.application = getApplication();
engine = ZegoExpressEngine.createEngine(profile, null);
```  

