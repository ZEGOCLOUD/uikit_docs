### 播放器播放状态变化回调通知

播放过程中，播放器的状态发生变化时，开发者可以通过以下回调接口，获取相关的状态通知，并在回调中根据不同状态处理业务逻辑。

```objc
// 播放器状态回调，可以在这里更改播放按钮状态
//
// 支持版本 ：v1.0.0。
//
// 详情描述：播放器状态改变或者错误时调用
// @param mediaPlayer 播放器对象
// @param state 播放器状态
// @param errorCode 错误码
- (void)onStateUpdate:(ZegoCopyrightedVideoPlayer*)mediaPlayer state:(ZegoCopyrightedVideoPlayerState)state errorCode:(enum ZegoCopyrightedVideoError)errorCode
{
}

// 播放器网络状况
//
// 支持版本：v1.0.0。
//
// 详情描述：播放器网络状态改变时调用
// @param mediaPlayer 播放器对象
// @param event 网络状况
- (void)onNetworkEvent:(ZegoCopyrightedVideoPlayer *)mediaPlayer event:(ZegoCopyrightedVideoPlayerNetworkEvent)event
{
   
}

// 播放器进度回调，可以用来刷新改变当前播放进度
//
// 支持版本：v1.0.0。
//
// 详情描述：播放器进度改变时调用，1000毫秒调用一次
// @param mediaPlayer 播放器对象
// @param millisecond 播放进度
- (void)onPlayingProgress:(ZegoCopyrightedVideoPlayer *)mediaPlayer progress:(unsigned long long)millisecond
{  
}

// 播放器进度延迟回调，可以用于提示或者调试用
//
// 支持版本：v1.0.0。
//
// 详情描述：播放器进度延迟回调
// @param mediaPlayer 播放器对象
// @param progressGap 与服务端进度误差。正数说明比服务端记录值慢，负数是说明比服务端记录值快，单位为毫秒
- (void)onVideoProgressGapWithServer:(ZegoCopyrightedVideoPlayer *)mediaPlayer progressGap:(long long)progressGap
{    
    NSString * tip = @"";
    if (progressGap > 0) {
        tip = @"进度比服务器慢";
    }else if (progressGap < 0){
        tip = @"进度比服务器快";
    }
    //当前进度与服务器进度比较
    NSString * gap = [NSString stringWithFormat:@"%@%@ ms",tip,@(llabs(progressGap)).stringValue];
}

// 播放器速度改变通知
//
// 支持版本：v1.1.0。
//
// 详情描述：播放器速度改变通知
// @param mediaPlayer 播放器对象
// @param playSpeed 播放倍速
- (void)onPlayerSpeedChanged:(ZegoCopyrightedVideoPlayer *)mediaPlayer playSpeed:(float)playSpeed
{

}
```
