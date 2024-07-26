# 自定义文本消息的 UI 

如需自定义聊天文本消息的 UI ，可以通过 `ZegoUIKitPrebuiltLiveAudioRoomConfig.inRoomMessageViewConfig.inRoomMessageItemViewProvider` 进行设置。

您可以通过 `inRoomMessageItemViewProvider` 获取并读取 `inRoomMessage`，其消息类型为 `ZegoInRoomMessage`，具体结构如下：

```java
public class ZegoInRoomMessage {
    public String message;
    public long messageID;
    public long timestamp;
    public ZegoUIKitUser user;
    public ZegoInRoomMessageState state;
}
```

此外，您可以自定义消息发送失败或成功时的 UI 效果，还可以设置消息发送失败时、重新发送消息的逻辑。

自定义文本消息的 UI 的具体实现方式如下：

<CodeGroup>
```java title="Java"
boolean isHost = ;
ZegoUIKitPrebuiltLiveAudioRoomConfig config;
if (isHost) {
    config = ZegoUIKitPrebuiltLiveAudioRoomConfig.host();
} else {
    config = ZegoUIKitPrebuiltLiveAudioRoomConfig.audience();
}
config.inRoomMessageViewConfig.inRoomMessageItemViewProvider = new ZegoInRoomMessageItemViewProvider() {
    @Override
    public View onCreateView(ViewGroup parent) {
        return new TextView(parent.getContext());
    }

    @Override
    public void onBindView(View view, ZegoInRoomMessage inRoomMessage, int position) {
        TextView textView = (TextView) view;
        textView.setText(inRoomMessage.user.userName + " : " + inRoomMessage.message);
    }
};
ZegoUIKitPrebuiltLiveAudioRoomFragment fragment = ZegoUIKitPrebuiltLiveAudioRoomFragment.newInstance(appID, appSign, userID, userName, roomID, config);

getSupportFragmentManager().beginTransaction()
        .replace(R.id.fragment_container, fragment)
        .commitNow();
```
```kotlin title="Kotlin"
val isHost = 
val config = if (isHost) {
    ZegoUIKitPrebuiltLiveAudioRoomConfig.host()
} else {
    ZegoUIKitPrebuiltLiveAudioRoomConfig.audience()
}

config.inRoomMessageViewConfig.inRoomMessageItemViewProvider =
    object : ZegoInRoomMessageItemViewProvider() {
        override fun onCreateView(parent: ViewGroup): View? {
            return TextView(parent.context)
        }

        override fun onBindView(view: View, inRoomMessage: ZegoInRoomMessage, position: Int) {
            val textView = view as TextView
            textView.text = inRoomMessage.user.userName + " : " + inRoomMessage.message
        }
    }

val fragment: ZegoUIKitPrebuiltLiveAudioRoomFragment = ZegoUIKitPrebuiltLiveAudioRoomFragment.newInstance(appID, appSign, userID, userName, roomID, config)

supportFragmentManager.beginTransaction()
        .replace(R.id.fragment_container, fragment)
        .commitNow()
```
</CodeGroup>