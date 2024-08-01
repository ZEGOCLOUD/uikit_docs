# 强制关闭直播间

互动直播 UIKit（Live Streaming Kit）允许主播下播时强制结束直播间并自动解散所有观众。

## 实现流程

如需实现此功能，请开启 `onLiveStreamingEnded` 回调。当主播结束直播时，将自动触发此回调，所有观众将自动退出直播间。

参考代码如下：

```swift
class ViewController: UIViewController {
    
    let selfUserID: String = "userID" 
    let selfUserName: String = "userName"
    let yourAppID: UInt32 = YourAppID
    let yourAppSign: String = YourAppSign
    let liveID: String = "testLiveID"
    
    var liveVC: ZegoUIKitPrebuiltLiveStreamingVC?
    
    @IBAction func makeNewLive(_ sender: Any) {
        
        // 在此处修改您的自定义配置。
        let config: ZegoUIKitPrebuiltLiveStreamingConfig = ZegoUIKitPrebuiltLiveStreamingConfig.host()
        config.turnOnCameraWhenjoining = false;
        config.bottomMenuBarButtons = [.toggleMicrophoneButton]

        self.liveVC = ZegoUIKitPrebuiltLiveStreamingVC.init(yourAppID, appSign: yourAppSign, userID: selfUserID, userName: self.selfUserName ?? "", liveID: liveID, config: config)
        
        self.liveVC!.modalPresentationStyle = .fullScreen
        self.liveVC!.delegate = self
        self.present(self.liveVC!, animated: true, completion: nil)
    }

    func onLiveStreamingEnded() {
        self.liveVC?.dismiss(animated: true, completion: {
            self.liveVC = nil
        })
    }
}
```
