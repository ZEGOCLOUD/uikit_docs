To create a singleton instance of the `ZegoExpressEngine` class, call the [`createEngineWithProfile`|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-profile-event-handler) method with the **AppID** of your project.

To receive callbacks, implement an event handler object that conforms to the [`ZegoEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~protocol~zego-event-handler) protocol（for example, `self`), and then pass the implemented event handler object to the [`createEngineWithProfile`|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-profile-event-handler) method as the `eventHandler` parameter.
Alternatively, you can pass `nil` to the [`createEngineWithProfile`|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#create-engine-with-profile-event-handler) method as the `eventHandler` parameter for now, and then call the method [`setEventHandler`\|_blank](/article/api?doc=Express_Video_SDK_API~ObjectiveC_ios~class~zego-express-engine#set-event-handler) to set up the event handler after creating the engine.


```objc
/**
*  appID: The AppID value you get from the ZEGOCLOUD Admin console.
*  The AppID ranges from 0 - 4294967295.
* appSign: The AppSign you get from the ZEGOCLOUD Admin console.
* scenario: the scenario you use. [ZegoScenarioGeneral] refers to the general scenario. 
*/
ZegoEngineProfile *profile = [[ZegoEngineProfile alloc] init];
profile.appID = <#appID#>;
profile.appSign = <#appSign#>;
profile.scenario = ZegoScenarioGeneral;
// Create a ZegoExpressEngine instance and set eventHandler to [self]. If eventHandler is set to [nil], no callback will be received. You can set up the event handler later by calling the [-setEventHandler:] method.
[ZegoExpressEngine createEngineWithProfile:profile eventHandler:self];
```








