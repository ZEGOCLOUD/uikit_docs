# 自定义 UI 文案


语聊房 UIKit（Live Audio Room Kit）的用户界面文本由内部组件提供，可以进行编辑。要修改这些文本，请使用`ZegoInnerText`配置。

以下是参考代码：

<CodeGroup>

```java Java
public class LiveAudioRoomActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_call);

        addFragment();
    }

    public void addFragment() {
        long appID = yourAppID;
        String appSign = yourAppSign;
        String userID = yourUserID;
        String userName = yourUserName;

        boolean isHost = getIntent().getBooleanExtra("host", false);
        String roomID = getIntent().getStringExtra("roomID");

        ZegoUIKitPrebuiltLiveAudioRoomConfig config;
        if (isHost) {
            config = ZegoUIKitPrebuiltLiveAudioRoomConfig.host();
        } else {
            config = ZegoUIKitPrebuiltLiveAudioRoomConfig.audience();
        }
        config.innerText.memberListTitle = "Audience";

        ZegoUIKitPrebuiltLiveAudioRoomFragment fragment = ZegoUIKitPrebuiltLiveAudioRoomFragment.newInstance(appID, appSign, userID, userName,roomID,config);
        getSupportFragmentManager().beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow();
    }
}
```

```kotlin Kotlin
class LiveAudioRoomActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_live)
        addFragment()
    }

    private fun addFragment() {
        val appID: Long = yourAppID
        val appSign = yourAppSign
        val userID = YourUserID
        val userName = YourUserName
        
        val isHost = intent.getBooleanExtra("host", false)
        val roomID = intent.getStringExtra("roomID")

        val config: ZegoUIKitPrebuiltLiveAudioRoomConfig = if (isHost) {
            ZegoUIKitPrebuiltLiveAudioRoomConfig.host()
        } else {
            ZegoUIKitPrebuiltLiveAudioRoomConfig.audience()
        }

       config.innerText.memberListTitle = "Audicence"

        val fragment = ZegoUIKitPrebuiltLiveAudioRoomFragment.newInstance(appID, appSign, userID, userName, roomID, config)
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow()
    }
}
```

</CodeGroup>