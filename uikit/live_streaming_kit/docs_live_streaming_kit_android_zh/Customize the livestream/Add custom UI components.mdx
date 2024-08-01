# 添加自定义 UI 组件


您可以在视图的顶层添加一些自定义 UI 组件，比如在视频视图显示时显示用户头像，添加用户级别图标等。

## 实现流程

使用 audioVideoViewConfig.provider。

`audioVideoViewConfig.provider` 需要开发者返回一个自定义小部件，该小部件将放置在视图的顶部。

参考代码如下所示：

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

    // 在此处修改您的自定义配置。
    ZegoUIKitPrebuiltLiveStreamingConfig config;
    if (isHost) {
        config = ZegoUIKitPrebuiltLiveStreamingConfig.host();
    } else {
        config = ZegoUIKitPrebuiltLiveStreamingConfig.audience();
    }
    
    config.audioVideoViewConfig.provider = new ZegoViewProvider() {
        @Override
        public View getForegroundView(ViewGroup parent,ZegoUIKitUser userInfo) {
            return new YourCustomVideoForegroundView(parent.getContext(), userInfo);
        }
    };

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
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_live)
        val appID: Long = YourAppID
        val appSign: String = YourAppSign
        val userID = "userID"
        val userName = "userName"
        val liveID = "testLiveID"

         // 在此处修改您的自定义配置。
        val config: ZegoUIKitPrebuiltLiveStreamingConfig = if (isHost) {
            ZegoUIKitPrebuiltLiveStreamingConfig.host()
        } else {
            ZegoUIKitPrebuiltLiveStreamingConfig.audience()
        }
        config.audioVideoViewConfig.provider = object : ZegoViewProvider() {
            fun getForegroundView(parent:ViewGroup,userInfo: ZegoUIKitUser?): View {
                return YourCustomVideoForegroundView(parent.context, userInfo)
            }
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
