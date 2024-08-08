# 实现纯语音互动

- - -


在开始通话时，音视频通话 UIKit 默认打开摄像头和麦克风，并将扬声器作为音频输出设备。

如需更改此默认配置，例如在开始通话时关闭摄像头，或者不使用扬声器（如果不使用扬声器，则将使用系统的默认音频输出设备，如听筒、耳机、蓝牙等），您可以修改以下配置：

- `turnOnCameraWhenJoining`：通话开始时是否打开摄像头。true：打开（默认）。false：关闭。
- `turnOnMicrophoneWhenJoining`：通话开始时是否打开麦克风。true：打开（默认）。false：关闭。
- `useSpeakerWhenJoining`：通话开始时是否使用扬声器。true：使用扬声器（默认）。false：使用系统的默认音频输出设备，如听筒、耳机、蓝牙等。

以下是参考代码：

:::if{props.platform=undefined}
<CodeGroup>
```java title="基本通话"
public class CallActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_call);

    long appID = YourAppID;
    String appSign = YourAppSign;
    String userID = "userID";
    String userName = "userName";
    String callID = "testCallID";

    // Modify your custom configurations here.
    ZegoUIKitPrebuiltCallConfig config = ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall();
    config.turnOnCameraWhenJoining = false;
    config.turnOnMicrophoneWhenJoining = false;
    config.useSpeakerWhenJoining = true;

    ZegoUIKitPrebuiltCallFragment fragment = ZegoUIKitPrebuiltCallFragment
            .newInstance(appID, appSign, callID, userID, userName, config);

    getSupportFragmentManager()
            .beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commitNow();
  }
}
```
```java title="携带邀请的通话"
public class MainActivity extends AppCompatActivity {
    long appID = YourAppID;
    String appSign = YourAppSign;
    String userID = "userID";
    String userName = "userName";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initCallInviteService();
    }

    public void initCallInviteService() {
        ZegoUIKitPrebuiltCallInvitationConfig callInvitationConfig = new ZegoUIKitPrebuiltCallInvitationConfig(),
        callInvitationConfig.provider = new ZegoUIKitPrebuiltCallConfigProvider() {
                @Override
                public ZegoUIKitPrebuiltCallConfig requireConfig(ZegoCallInvitationData invitationData) {
                    ZegoUIKitPrebuiltCallConfig config;
                    boolean isVideoCall = invitationData.type == ZegoInvitationType.VIDEO_CALL.getValue();
                    boolean isGroupCall = invitationData.invitees.size() > 1;
                    if (isVideoCall && isGroupCall) {
                        config = ZegoUIKitPrebuiltCallConfig.groupVideoCall();
                    } else if (!isVideoCall && isGroupCall) {
                        config = ZegoUIKitPrebuiltCallConfig.groupVoiceCall();
                    } else if (!isVideoCall) {
                        config = ZegoUIKitPrebuiltCallConfig.oneOnOneVoiceCall();
                    } else {
                        config = ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall();
                    }
                    // Modify your custom calling configurations here.
                    config.turnOnCameraWhenJoining = false;
                    config.turnOnMicrophoneWhenJoining = false;
                    config.useSpeakerWhenJoining = true;
                    return config;
                }
        );
        ZegoUIKitPrebuiltCallService.init(getApplication(), appID, appSign, userID, userName,
            callInvitationConfig);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ZegoUIKitPrebuiltCallService.logout();
    }
}
```
</CodeGroup>
:::
:::if{props.platform="iOS"}
<CodeGroup>
```swift title="基本通话"
class ViewController: UIViewController {
    
    let selfUserID: String = "userID"
    let selfUserName: String = "userName"
    let yourAppID: UInt32 = YourAppID 
    let yourAppSign: String = YourAppSign
    let callID: String = "testCallID"
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    @IBAction func makeNewCall(_ sender: Any) {
        
        // 在此处修改您的自定义配置。
        let config: ZegoUIKitPrebuiltCallConfig = ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall()

        config.turnOnCameraWhenJoining = false;
        config.turnOnMicrophoneWhenJoining = false;
        config.useSpeakerWhenJoining = true;

        let callVC = ZegoUIKitPrebuiltCallVC.init(yourAppID, appSign: yourAppSign, userID: selfUserID, userName: selfUserName ?? "", callID: callID, config: config)
        callVC.modalPresentationStyle = .fullScreen
        self.present(callVC, animated: true, completion: nil)
    }
}
```
```swift title="携带邀请的通话"
class CallInvitationVC: UIViewController {
    let appID: UInt32 = yourAppID
    let appSign: String = "yourAppSign"
    let userID: String = "userID"
    let userName: String = "userName"
    let voiceCallButton: ZegoSendCallInvitationButton = ZegoSendCallInvitationButton(ZegoInvitationType.voiceCall.rawValue)
    let videoCallButton: ZegoSendCallInvitationButton = ZegoSendCallInvitationButton(ZegoInvitationType.videoCall.rawValue)

    override func viewDidLoad() {
        super.viewDidLoad()
        let config = ZegoUIKitPrebuiltCallInvitationConfig([ZegoUIKitSignalingPlugin()], notifyWhenAppRunningInBackgroundOrQuit: false, isSandboxEnvironment: false)
        ZegoUIKitPrebuiltCallInvitationService.shared.initWithAppID(self.appID, appSign: self.appSign, userID: self.userID, userName: self.userName, config: config)
        ZegoUIKitPrebuiltCallInvitationService.shared.delegate = self
    }
}

extension CallInvitationVC: ZegoUIKitPrebuiltCallInvitationServiceDelegate {
    //MARK: -ZegoUIKitPrebuiltCallInvitationServiceDelegate
    func requireConfig(_ data: ZegoCallInvitationData) -> ZegoUIKitPrebuiltCallConfig {
        var config = ZegoUIKitPrebuiltCallConfig.groupVoiceCall()
        if data.type == .voiceCall {
            if data.invitees?.count ?? 0 > 1 {
                config = ZegoUIKitPrebuiltCallConfig.groupVoiceCall()
            } else {
                config = ZegoUIKitPrebuiltCallConfig.oneOnOneVoiceCall()
            }
        } else {
            if data.invitees?.count ?? 0 > 1 {
                config = ZegoUIKitPrebuiltCallConfig.groupVideoCall()
            } else {
                config = ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall()
            }
        }
        // 在此处修改您的自定义配置。
        config.turnOnCameraWhenJoining = false;
        config.turnOnMicrophoneWhenJoining = false;
        config.useSpeakerWhenJoining = true;
        return config
    }
}
```
</CodeGroup>
:::
