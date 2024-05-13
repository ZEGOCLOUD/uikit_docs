## 示例代码
我们提供了一个实现视频通话基本流程的示例代码，可作为开发中的参考。
<details class="zg-primary">
    <summary>实现视频通话代码</summary>

```objc
//
//  ViewController.m
//  ZegoExpressExample
//
//  Copyright © 2022 Zego. All rights reserved.
//

#import "ViewController.h"
#import <ZegoExpressEngine/ZegoExpressEngine.h>

@interface ViewController ()<ZegoEventHandler>
//拉取播放其他用户音视频流的 view
@property (strong, nonatomic) UIView *remoteUserView;
//开始视频通话的按钮
@property (strong, nonatomic) UIButton *startVideoTalkButton;
//停止视频通话的按钮
@property (strong, nonatomic) UIButton *stopVideoTalkButton;


@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self setupUI];
}

- (void)setupUI {
    self.remoteUserView = [[UIView alloc] initWithFrame:CGRectMake(100, 100, 180, 250)];
    self.remoteUserView.backgroundColor = [UIColor lightGrayColor];
    [self.view addSubview:self.remoteUserView];
    
    self.startVideoTalkButton = [UIButton buttonWithType:UIButtonTypeSystem];
    [self.view addSubview:self.startVideoTalkButton];
    self.startVideoTalkButton.frame = CGRectMake(100, self.view.bounds.size.height - 280, 150, 50);
    [self.startVideoTalkButton.titleLabel setFont:[UIFont systemFontOfSize:32]];
    [self.startVideoTalkButton setTitle:@"开始通话" forState:UIControlStateNormal];
    [self.startVideoTalkButton addTarget:self action:@selector(startVideoTalk:) forControlEvents:UIControlEventTouchUpInside];
    
    self.stopVideoTalkButton = [UIButton buttonWithType:UIButtonTypeSystem];
    [self.view addSubview:self.stopVideoTalkButton];
    self.stopVideoTalkButton.frame = CGRectMake(100, self.view.bounds.size.height - 200, 150, 50);
    [self.stopVideoTalkButton.titleLabel setFont:[UIFont systemFontOfSize:32]];
    [self.stopVideoTalkButton setTitle:@"停止通话" forState:UIControlStateNormal];
    [self.stopVideoTalkButton setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [self.stopVideoTalkButton addTarget:self action:@selector(stopVideoTalk:) forControlEvents:UIControlEventTouchUpInside];
}

- (void)startVideoTalk:(UIButton *)button {
    [self createEngine];
    [self loginRoom];
    [self startPublish];
}

- (void)stopVideoTalk:(UIButton *)button {
    [[ZegoExpressEngine sharedEngine] logoutRoom];
    [ZegoExpressEngine destroyEngine:^{
        
    }];
}

- (void)createEngine {
    ZegoEngineProfile *profile = [[ZegoEngineProfile alloc] init];
    // 请通过官网注册获取，格式为：1234567890
    profile.appID = <#appID#>;
    //请通过官网注册获取，格式为：@"0123456789012345678901234567890123456789012345678901234567890123"（共64个字符）
    profile.appSign = @"<#appSign#>"; 
    //通用场景接入，请根据实际情况选择合适的场景
    profile.scenario = ZegoScenarioDefault;
    // 创建引擎，并注册 self 为 eventHandler 回调。不需要注册回调的话，eventHandler 参数可以传 nil，后续可调用 "-setEventHandler:" 方法设置回调
    [ZegoExpressEngine createEngineWithProfile:profile eventHandler:self];
}

- (void)loginRoom {
    // roomID 由您本地生成,需保证 “roomID” 全局唯一。不同用户要登录同一个房间才能进行通话
    NSString *roomID = @"room1";

    // 创建用户对象，ZegoUser 的构造方法 userWithUserID 会将 “userName” 设为与传的参数 “userID” 一样。“userID” 与 “userName” 不能为 “nil”，否则会导致登录房间失败。
    // userID 由您本地生成,需保证 “userID” 全局唯一。
    ZegoUser *user = [ZegoUser userWithUserID:@"user1"];
    
    // 只有传入 “isUserStatusNotify” 参数取值为 “true” 的 ZegoRoomConfig，才能收到 onRoomUserUpdate 回调。
    ZegoRoomConfig *roomConfig = [[ZegoRoomConfig alloc] init];
    //如果您使用 appsign 的方式鉴权，token 参数不需填写；如果需要使用更加安全的 鉴权方式： token 鉴权，请参考[如何从 AppSign 鉴权升级为 Token 鉴权](https://doc-zh.zego.im/faq/token_upgrade?product=ExpressVideo&platform=all)

    // roomConfig.token = @"<#token#>";
    
    roomConfig.isUserStatusNotify = YES;
    // 登录房间
    [[ZegoExpressEngine sharedEngine] loginRoom:roomID user:user config:roomConfig callback:^(int errorCode, NSDictionary * _Nullable extendedData) {
        // (可选回调) 登录房间结果，如果仅关注登录结果，关注此回调即可
        if (errorCode == 0) {
            NSLog(@"房间登录成功");
        } else {
            // 登录失败，请参考 errorCode 说明 https://doc-zh.zego.im/article/4377
            NSLog(@"房间登录失败");
        }
    }];
}

- (void)startPublish {
    // 设置本地预览视图并启动预览，视图模式采用 SDK 默认的模式，等比缩放填充整个 View
    [[ZegoExpressEngine sharedEngine] startPreview:[ZegoCanvas canvasWithView:self.view]];
    
    // 用户调用 loginRoom 之后再调用此接口进行推流
    // 在同一个 AppID 下，开发者需要保证 “streamID” 全局唯一，如果不同用户各推了一条 “streamID” 相同的流，后推流的用户会推流失败。
    [[ZegoExpressEngine sharedEngine] startPublishingStream:@"stream1"];
}

//本地调用 loginRoom 加入房间后，您可通过监听 onRoomStateChanged 回调实时监控自己在本房间内的连接状态。
//更多信息请参考 https://doc-zh.zego.im/article/12884
-(void)onRoomStateChanged:(ZegoRoomStateChangedReason)reason errorCode:(int)errorCode extendedData:(NSDictionary *)extendedData roomID:(NSString *)roomID {
    if(reason == ZegoRoomStateChangedReasonLogining) {
        // 正在登录房间。当调用 [loginRoom] 登录房间或 [switchRoom] 切换到目标房间时，进入该状态，表示正在请求连接服务器。通常通过该状态进行应用界面的展示。
    } else if(reason == ZegoRoomStateChangedReasonLogined) {
        //登录房间成功。当登录房间或切换房间成功后，进入该状态，表示登录房间已经成功，用户可以正常收到房间内的其他用户和所有流信息增删的回调通知。
        //只有当房间状态是登录成功或重连成功时，推流（startPublishingStream）、拉流（startPlayingStream）才能正常收发音视频
    } else if(reason == ZegoRoomStateChangedReasonLoginFailed) {
        //登录房间失败。当登录房间或切换房间失败后，进入该状态，表示登录房间或切换房间已经失败，例如 AppID 或 Token 不正确等。
    } else if(reason == ZegoRoomStateChangedReasonReconnecting) {
        //房间连接临时中断。如果因为网络质量不佳产生的中断，SDK 会进行内部重试。
    } else if(reason == ZegoRoomStateChangedReasonReconnected) {
        //房间重新连接成功。如果因为网络质量不佳产生的中断，SDK 会进行内部重试，重连成功后进入该状态。
    } else if(reason == ZegoRoomStateChangedReasonReconnectFailed) {
        //房间重新连接失败。如果因为网络质量不佳产生的中断，SDK 会进行内部重试，重连失败后进入该状态。
    } else if(reason == ZegoRoomStateChangedReasonKickOut) {
        //被服务器踢出房间。例如有相同用户名在其他地方登录房间导致本端被踢出房间，会进入该状态。
    } else if(reason == ZegoRoomStateChangedReasonLogout) {
        //登出房间成功。没有登录房间前默认为该状态，当调用 [logoutRoom] 登出房间成功或 [switchRoom] 内部登出当前房间成功后，进入该状态。
    } else if(reason == ZegoRoomStateChangedReasonLogoutFailed) {
        //登出房间失败。当调用 [logoutRoom] 登出房间失败或 [switchRoom] 内部登出当前房间失败后，进入该状态。
    }
}

//房间内其他用户推流/停止推流时，我们会在这里收到相应流增减的通知
- (void)onRoomStreamUpdate:(ZegoUpdateType)updateType streamList:(NSArray<ZegoStream *> *)streamList extendedData:(NSDictionary *)extendedData roomID:(NSString *)roomID {
    //当 updateType 为 ZegoUpdateTypeAdd 时，代表有音视频流新增，此时我们可以调用 startPlayingStream 接口拉取播放该音视频流
    if (updateType == ZegoUpdateTypeAdd) {
        // 开始拉流，设置远端拉流渲染视图，视图模式采用 SDK 默认的模式，等比缩放填充整个             View
        // 如下 remoteUserView 为 UI 界面上 View.这里为了使示例代码更加简洁，我们只拉取新增的音视频流列表中第的第一条流，在实际的业务中，建议开发者循环遍历 streamList ，拉取每一条音视频流
        NSString *streamID = streamList[0].streamID;
        [[ZegoExpressEngine sharedEngine] startPlayingStream:streamID canvas:[ZegoCanvas canvasWithView:self.remoteUserView]];
    }
}

//同一房间内的其他用户进出房间时，您可通过此回调收到通知。回调中的参数 ZegoUpdateType 为 ZegoUpdateTypeAdd 时，表示有用户进入了房间；ZegoUpdateType 为 ZegoUpdateTypeDelete 时，表示有用户退出了房间。
// 只有在登录房间 loginRoom 时传的配置 ZegoRoomConfig 中的 isUserStatusNotify 参数为 YES 时，用户才能收到房间内其他用户的回调。
// 房间人数大于 500 人的情况下 onRoomUserUpdate 回调不保证有效。若业务场景存在房间人数大于 500 的情况，请联系 ZEGO 技术支持。
- (void)onRoomUserUpdate:(ZegoUpdateType)updateType userList:(NSArray<ZegoUser *> *)userList roomID:(NSString *)roomID {
    if (updateType == ZegoUpdateTypeAdd) {
        for (ZegoUser *user in userList) {
            NSLog(@"用户%@进入了房间 %@", user.userName, roomID);
        }
    } else if (updateType == ZegoUpdateTypeDelete) {
        for (ZegoUser *user in userList) {
            NSLog(@"用户%@退出了房间 %@", user.userName, roomID);
        }
    }
}

//用户推送音视频流的状态通知
//用户推送音视频流的状态发生变更时，会收到该回调。如果网络中断导致推流异常，SDK 在重试推流的同时也会通知状态变化。
- (void)onPublisherStateUpdate:(ZegoPublisherState)state errorCode:(int)errorCode extendedData:(NSDictionary *)extendedData streamID:(NSString *)streamID {
    if (errorCode != 0) {
        NSLog(@"推流状态出错 errorCode: %d", errorCode);
    } else {
        switch (state) {
            case ZegoPublisherStatePublishing:
                NSLog(@"正在推流");
                break;
            case ZegoPublisherStatePublishRequesting:
                NSLog(@"正在请求推流");
                break;
            case ZegoPublisherStateNoPublish:
                NSLog(@"没有推流");
                break;
        }
    }
}

//用户拉取音视频流的状态通知
//用户拉取音视频流的状态发生变更时，会收到该回调。如果网络中断导致拉流异常，SDK 会自动进行重试。
- (void)onPlayerStateUpdate:(ZegoPlayerState)state errorCode:(int)errorCode extendedData:(NSDictionary *)extendedData streamID:(NSString *)streamID {
    if (errorCode != 0) {
        NSLog(@"拉流状态出错 streamID: %@, errorCode:%d", streamID, errorCode);
    } else {
        switch (state) {
            case ZegoPlayerStatePlaying:
                NSLog(@"正在拉流中");
                break;
            case ZegoPlayerStatePlayRequesting:
                NSLog(@"正在请求拉流中");
                break;
            case ZegoPlayerStateNoPlay:
                NSLog(@"未进行拉流");
                break;
        }
    }
}

// 您可以通过监听 onNetworkQuality 回调，收到房间内用户（包括您自己）的上下行网络质量。此回调每隔两秒会收到一次，网络质量等级请参考 ZegoStreamQualityLevel。
- (void)onNetworkQuality:(NSString *)userID upstreamQuality:(ZegoStreamQualityLevel)upstreamQuality downstreamQuality:(ZegoStreamQualityLevel)downstreamQuality {
    if (userID == nil) {
        // 代表本地用户（我）的网络质量
//        NSLog(@"我的上行网络质量是 %lu", (unsigned long)upstreamQuality);
//        NSLog(@"我的下行网络质量是 %lu", (unsigned long)downstreamQuality);
    } else {
        //代表房间内其他用户的网络质量
//        NSLog(@"用户 %@ 的上行网络质量是 %lu", userID, (unsigned long)upstreamQuality);
//        NSLog(@"用户 %@ 的下行网络质量是 %lu", userID, (unsigned long)downstreamQuality);
    }

    /*
     ZegoStreamQualityLevelExcellent 网络质量极好
     ZegoStreamQualityLevelGood 网络质量好
     ZegoStreamQualityLevelMedium 网络质量正常
     ZegoStreamQualityLevelBad 网络质量差
     ZegoStreamQualityLevelDie 网络异常
     ZegoStreamQualityLevelUnknown 网络质量未知
     */
}


@end

```
</details>




















