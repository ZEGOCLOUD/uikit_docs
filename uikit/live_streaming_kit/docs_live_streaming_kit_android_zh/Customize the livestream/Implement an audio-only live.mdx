# 实现纯语音互动


ZEGO UIKit 默认同时启用音频和视频功能，即实现视频直播模式。您可以根据需要禁用视频功能来实现纯音频直播，本文档将介绍如何实现纯音频直播。

## 实现流程

纯语音直播不需要视频相关的实现逻辑，可以配置以下参数：

- `bottomMenuBarConfig`：配置此项来移除摄像头相关的按钮。
- `turnOnCameraWhenJoining`：配置此项实现加入直播时仅使用麦克风。

参考代码如下所示：

:::if{props.platform=undefined}
<CodeGroup>
```java title="Java"
public class LiveActivity extends AppCompatActivity {
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_live);

    long appID = YourAppID;
    String appSign = YourAppSign;
    String userID = "userID";
    String userName = "userName";
    String liveID = "testLiveID";

    // 在此处修改您的自定义配置.
    ZegoUIKitPrebuiltLiveStreamingConfig config;
    if (isHost) {
        config = ZegoUIKitPrebuiltLiveStreamingConfig.host();
    } else {
        config = ZegoUIKitPrebuiltLiveStreamingConfig.audience();
    }
    config.turnOnCameraWhenJoining = false;
    config.bottomMenuBarConfig.hostButtons = Arrays.asList(ZegoMenuBarButtonName.TOGGLE_MICROPHONE_BUTTON);
    config.bottomMenuBarConfig.coHostButtons = Arrays.asList(ZegoMenuBarButtonName.TOGGLE_MICROPHONE_BUTTON,ZegoMenuBarButtonName.COHOST_CONTROL_BUTTON);
    config.bottomMenuBarConfig.audienceButtons = Arrays.asList(ZegoMenuBarButtonName.COHOST_CONTROL_BUTTON);

    ZegoUIKitPrebuiltLiveStreamingFragment fragment = ZegoUIKitPrebuiltLiveStreamingFragment
            .newInstance(appID, appSign, userID, userName,liveID, config);

    getSupportFragmentManager()
            .beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow();
}
}
```
```kotlin title="Kotlin"
class LiveActivity : AppCompatActivity() {
    private var isHost = false
    private var mLiveID: String? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_live)
        addFragment()
    }

    private fun addFragment() {
        val appID: Long = yourAppID
        val appSign = yourAppSign
        val userID = "userID"
        val userName = "userName"
        val liveID = "testLiveID"

        val config: ZegoUIKitPrebuiltLiveStreamingConfig = if (isHost) {
            ZegoUIKitPrebuiltLiveStreamingConfig.host().also {
                it.turnOnCameraWhenJoining = false;
        } else {
            ZegoUIKitPrebuiltLiveStreamingConfig.audience()
        }
        config.bottomMenuBarConfig.hostButtons = Arrays.asList<Any>(ZegoMenuBarButtonName.TOGGLE_MICROPHONE_BUTTON)
        config.bottomMenuBarConfig.coHostButtons = Arrays.asList<Any>(ZegoMenuBarButtonName.TOGGLE_MICROPHONE_BUTTON, ZegoMenuBarButtonName.COHOST_CONTROL_BUTTON)
        config.bottomMenuBarConfig.audienceButtons =
            Arrays.asList<Any>(ZegoMenuBarButtonName.COHOST_CONTROL_BUTTON)

        val fragment = ZegoUIKitPrebuiltLiveStreamingFragment.newInstance(
            appID, appSign, userID, userName, liveID, config
        )
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow()
    }
}
```
</CodeGroup>
:::
:::if{props.platform="iOS"}
<CodeGroup>
```swift
class ViewController: UIViewController {
    
    let selfUserID: String = "userID" 
    let selfUserName: String = "userName"
    let yourAppID: UInt32 = YourAppID
    let yourAppSign: String = YourAppSign
    let liveID: String = "testLiveID"
    
    @IBAction func makeNewLive(_ sender: Any) {
        
        // 在此处修改您的自定义配置。
        let config: ZegoUIKitPrebuiltLiveStreamingConfig = ZegoUIKitPrebuiltLiveStreamingConfig.host()
        config.turnOnCameraWhenjoining = false;
        config.bottomMenuBarConfig.hostButtons = [.toggleMicrophoneButton]

        let liveVC = ZegoUIKitPrebuiltLiveStreamingVC.init(yourAppID, appSign: yourAppSign, userID: selfUserID, userName: self.selfUserName ?? "", liveID: liveID, config: config)
        
        liveVC.modalPresentationStyle = .fullScreen
        self.present(liveVC, animated: true, completion: nil)
    }
}
```
</CodeGroup>
:::
