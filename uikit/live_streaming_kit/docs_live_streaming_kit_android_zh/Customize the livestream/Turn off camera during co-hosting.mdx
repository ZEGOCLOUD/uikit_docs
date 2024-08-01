# 连麦时默认关闭摄像头


考虑到部分用户可能非常重视隐私，希望在直播连麦期间不要自动打开摄像头。在这种情况下，支持设置观众连麦时默认关闭摄像头，但观众可以在后续界面通过点击摄像头按钮来手动开启摄像头。

## 实现流程

您可以通过配置 `turnOnCameraWhenCohosted` 参数来实现该能力。

参考代码如下：

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

        ZegoUIKitPrebuiltLiveStreamingConfig config;
        if (isHost) {
            config = ZegoUIKitPrebuiltLiveStreamingConfig.host();
        } else {
            config = ZegoUIKitPrebuiltLiveStreamingConfig.audience();
        }
        // 在此处修改你的自定义配置
        config.turnOnCameraWhenCohosted = false


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
            ZegoUIKitPrebuiltLiveStreamingConfig.host()
        } else {
            ZegoUIKitPrebuiltLiveStreamingConfig.audience()
        }

        // 在此处修改你的自定义配置
        config.turnOnCameraWhenCohosted = false
       
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
```swift
 let config: ZegoUIKitPrebuiltLiveStreamingConfig = ZegoUIKitPrebuiltLiveStreamingConfig.host(enableSignalingPlugin: true)
     config.turnOnCameraWhenJoining = false
 let liveVC: ZegoUIKitPrebuiltLiveStreamingVC = ZegoUIKitPrebuiltLiveStreamingVC(self.appID, appSign: self.appSign, userID: self.userID ?? "", userName: self.userName ?? "", liveID: self.roomIDTextField.text ?? "", config: config)
self.present(liveVC, animated: true, completion: nil)
}
```
:::