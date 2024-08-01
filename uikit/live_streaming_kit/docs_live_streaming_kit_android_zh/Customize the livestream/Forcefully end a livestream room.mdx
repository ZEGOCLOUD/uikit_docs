# 强制关闭直播间

互动直播 UIKit（Live Streaming Kit）允许主播下播时强制结束直播间并自动解散所有观众。

## 实现流程

如需实现此功能，请使用 `onLiveStreamingEnded` 回调。当主播结束直播时，将触发此回调，并所有观众将自动退出直播间。

参考代码如下：

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

    // 在此处修改您的自定义配置
    ZegoUIKitPrebuiltLiveStreamingConfig config;
    if (isHost) {
        config = ZegoUIKitPrebuiltLiveStreamingConfig.host();
    } else {
        config = ZegoUIKitPrebuiltLiveStreamingConfig.audience(false);
    }
    config.liveStreamingEndedListener = new LiveStreamingEndedListener() {
        @Override
        public void onLiveStreamingEnded() {
            finish(); // 自动退出直播间
        }
    };
    ZegoUIKitPrebuiltLiveStreamingFragment fragment = ZegoUIKitPrebuiltLiveStreamingFragment
            .newInstance(appID, appSign, userID, userName, liveID, config);

    getSupportFragmentManager()
            .beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow();
  }
}
```
```kotlin title="Kotlin"
class LiveActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_live)
        val appID: Long = YourAppID
        val appSign: String = YourAppSign
        val userID = "userID"
        val userName = "userName"
        val liveID = "testLiveID"

        // 在此处修改您的自定义配置
        val config: ZegoUIKitPrebuiltLiveStreamingConfig = if (isHost) {
            ZegoUIKitPrebuiltLiveStreamingConfig.host()
        } else {
            ZegoUIKitPrebuiltLiveStreamingConfig.audience(false)
        }
        config.liveStreamingEndedListener = LiveStreamingEndedListener {
            finish() // 自动退出直播间
        }
        val fragment = ZegoUIKitPrebuiltLiveStreamingFragment
            .newInstance(appID, appSign, userID, userName, liveID, config)
        supportFragmentManager
            .beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow()
    }
}
```
</CodeGroup>
