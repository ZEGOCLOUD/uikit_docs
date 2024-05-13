To create a singleton instance of the `ZegoExpressEngine` class, call the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) method with the **AppID** and **AppSign** of your project.

To receive callbacks, implement an event handler object that conforms to the [`IZegoEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-callback-i-zego-event-handler) protocol, and then pass the implemented event handler object to the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) method as the `eventHandler` parameter.
Alternatively, you can pass `null` to the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#create-engine) method as the `eventHandler` parameter for now, and then call the method [`setEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~Java_android~class~im-zego-zegoexpress-zego-express-engine#set-event-handler) to set up the event handler after creating the engine.

<div class = 'mk-hint'>

- The AppID you get from the ZEGO Admin Console is by default for use in the testing environment. When you initialize the SDK in the development and testing phase, you need to configure the SDK to use the testing environment. Otherwise, the initialization will fail. **Before your project goes live, you need to contact ZEGO sales for setting up the production environment in advance.**
- If you set the `isTestEnv` parameter to `true`, the SDK uses the testing environment. If you set it to `false`, the SDK uses the production environment. 
</div>

```java
/** Define a ZegoExpressEngine object */
ZegoExpressEngine engine;

/** Use the AppID and AppSign assigned by ZEGO when you create your project in the ZEGO Admin Console. */
long appID = ;  /** AppID format: 123456789L */
String appSign = ;  /** AppSign format: "0123456789012345678901234567890123456789012345678901234567890123"（64 characters）*/

/** Create a ZegoExpressEngine instance with your AppID and AppSign, and initialize it to use the testing environment and the settings for the general scenario. */
engine = ZegoExpressEngine.createEngine(appID, appSign, true, ZegoScenario.GENERAL, getApplication(), null);  
```
