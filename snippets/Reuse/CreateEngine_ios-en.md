To create a singleton instance of the `ZegoExpressEngine` class, call the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-app-id-app-sign-is-test-env-scenario-event-handler) method with the **AppID** and **AppSign** of your project.

To receive callbacks, implement an event handler object that conforms to the [`ZegoEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~protocol~zego-event-handler) protocol（for example, `self`), and then pass the implemented event handler object to the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-app-id-app-sign-is-test-env-scenario-event-handler) method as the `eventHandler` parameter.
Alternatively, you can pass `nil` to the [`createEngine`|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-app-id-app-sign-is-test-env-scenario-event-handler) method as the `eventHandler` parameter for now, and then call the method [`setEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#set-event-handler) to set up the event handler after creating the engine.

<div class = 'mk-hint'>

- The AppID you get from the ZEGO Admin Console is by default for use in the testing environment. When you initialize the SDK in the development and testing phase, you need to configure the SDK to use the testing environment. Otherwise, the initialization will fail. **Before your project goes live, you need to contact ZEGO sales for setting up the production environment in advance.**
- If you set the `isTestEnv` parameter to `true`, the SDK uses the testing environment. If you set it to `false`, the SDK uses the production environment. 
</div>

```objc
// Set the AppID and AppSign 
unsigned int appID = 1234567890;  // The AppID value you get from the ZEGO Admin console.
NSString *appSign = @"0123456789012345678901234567890123456789012345678901234567890123"; //The AppSign value (64 characters) you get from the ZEGO Admin Console.

// Create a ZegoExpressEngine instance and initialize it to use the testing environment and general scenario, and set eventHandler to [self]. 
// If eventHandler is set to [nil], no callback will be received. You can set up the event handler later by calling the [-setEventHandler:] method.
[ZegoExpressEngine createEngineWithAppID:appID appSign:appSign isTestEnv:YES scenario:ZegoScenarioGeneral eventHandler:self];
```
