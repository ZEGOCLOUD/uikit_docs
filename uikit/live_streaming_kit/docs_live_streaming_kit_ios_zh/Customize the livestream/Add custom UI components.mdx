# 添加自定义 UI 组件


UIKit 支持在视图的顶层添加一些自定义 UI 组件，例如，在有视频视图时显示用户头像、添加用户级别图标等。

## 实现流程

使用 `ZegoUIKitPrebuiltLiveStreamingVCDelegate.getForegroundView` 协议实现。

`getForegroundView` 需要开发者返回一个自定义视图，该视图将放置在视图顶部。

参考代码如下所示：

```swift
class ViewController: UIViewController {
    
    let selfUserID: String = "userID" 
    let selfUserName: String = "userName"
    let yourAppID: UInt32 = YourAppID
    let yourAppSign: String = YourAppSign
    let liveID: String = "testLiveID"
    
    @IBAction func makeNewLive(_ sender: Any) {
        
        // 在这里修改您的自定义配置。
        let config: ZegoUIKitPrebuiltLiveStreamingConfig = ZegoUIKitPrebuiltLiveStreamingConfig.host()
        config.turnOnCameraWhenjoining = false;
        config.bottomMenuBarButtons = [.toggleMicrophoneButton,.hangUpButton,.swtichAudioOutputButton]

        let liveVC = ZegoUIKitPrebuiltLiveStreamingVC.init(yourAppID, appSign: yourAppSign, userID: selfUserID, userName: self.selfUserName ?? "", liveID: liveID, config: config)
        
        liveVC.delegate = self

        liveVC.modalPresentationStyle = .fullScreen
        self.present(liveVC, animated: true, completion: nil)
    }
    
    func getForegroundView(_ userInfo: ZegoUIkitUser?) -> UIView? {
        return YourCustomView()
    }
}
```
