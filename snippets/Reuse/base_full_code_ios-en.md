## Sample code

The following is sample code for a basic video call and can be used for reference during development.
<details class="zg-primary">
    <summary>Code for implementing a video call</summary>

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
// View for playing the audio and video streams of other users.
@property (strong, nonatomic) UIView *remoteUserView;
// Button for starting a video call.
@property (strong, nonatomic) UIButton *startVideoTalkButton;
// Button for stopping a video call.
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
    [self.startVideoTalkButton setTitle:@"Start" forState:UIControlStateNormal];
    [self.startVideoTalkButton addTarget:self action:@selector(startVideoTalk:) forControlEvents:UIControlEventTouchUpInside];
    
    self.stopVideoTalkButton = [UIButton buttonWithType:UIButtonTypeSystem];
    [self.view addSubview:self.stopVideoTalkButton];
    self.stopVideoTalkButton.frame = CGRectMake(100, self.view.bounds.size.height - 200, 150, 50);
    [self.stopVideoTalkButton.titleLabel setFont:[UIFont systemFontOfSize:32]];
    [self.stopVideoTalkButton setTitle:@"Stop" forState:UIControlStateNormal];
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
    // Register with the official website and obtain the data in the format similar to 1234567890.
    profile.appID = <#appID#>;
    // Register with the official website and obtain a string of 64 characters in the format similar to @"0123456789012345678901234567890123456789012345678901234567890123".
    profile.appSign = @"<#appSign#>"; 
    // General scenario. Select a scenario based on your service requirements.
    profile.scenario = ZegoScenarioDefault;
    // Create an engine and set `eventHandler` to `self`. If callback registration is not needed, `eventHandler` can be set to `nil`, and you can call the `-setEventHandler:` method to set the callback later on.
    [ZegoExpressEngine createEngineWithProfile:profile eventHandler:self];
}

- (void)loginRoom {
    // The value of `roomID` is generated locally and must be globally unique. Users must log in to the same room to call each other.
    NSString *roomID = @"room1";

    // Create a user object. The `ZegoUser` constructor `userWithUserID` will set `userName` to the value of `userID`. The `userID` and `userName` parameters cannot be set to `nil`. Otherwise, logging in to a room will fail.
    // The value of `userID` is generated locally and must be globally unique.
    ZegoUser *user = [ZegoUser userWithUserID:@"user1"];
    
    // The `onRoomUserUpdate` callback can be received only when `ZegoRoomConfig` in which the `isUserStatusNotify` parameter is set to `true` is passed.
    ZegoRoomConfig *roomConfig = [[ZegoRoomConfig alloc] init];
    // If you use the AppSign for authentication, you do not need to set the `token` parameter. If you want to use the Token for authentication, which is securer, see [Guide for upgrading the authentication mode from using the AppSign to Token](https://docs.zegocloud.com/faq/token_upgrade).

    // roomConfig.token = @"<#token#>";
    
    roomConfig.isUserStatusNotify = YES;
    // Log in to a room.
    [[ZegoExpressEngine sharedEngine] loginRoom:roomID user:user config:roomConfig callback:^(int errorCode, NSDictionary * _Nullable extendedData) {
        // (Optional callback) Room login result. This callback is sufficient if you only need to check the login result.
        if (errorCode == 0) {
            NSLog(@"Room login successful.");
        } else {
            // Login failed. For details, see [Error codes\|_blank](!Error_Code).
            NSLog(@"Room login failed.");
        }
    }];
}

- (void)startPublish {
    // Set the local preview view and start the preview. The default view mode of the SDK is used and the entire view is filled through proportional scaling.
    [[ZegoExpressEngine sharedEngine] startPreview:[ZegoCanvas canvasWithView:self.view]];
    
    // After calling the `loginRoom` method, call this method to publish streams.
    // Ensure that the value of `streamID` is globally unique under the same AppID. If different streams are published with the same `streamID`, the ones that are published after the first one will fail.
    [[ZegoExpressEngine sharedEngine] startPublishingStream:@"stream1"];
}

// After the `loginRoom` method is called, you can use the `onRoomStateChanged` callback to listen for the room connection status in real time.
// For details, see https://docs.zegocloud.com/article/13398.
-(void)onRoomStateChanged:(ZegoRoomStateChangedReason)reason errorCode:(int)errorCode extendedData:(NSDictionary *)extendedData roomID:(NSString *)roomID {
    if(reason == ZegoRoomStateChangedReasonLogining) {
        // Logging in to a room. When `loginRoom` is called to log in to a room or `switchRoom` is called to switch to another room, the room enters this status, indicating that it is requesting a connection to the server. On the app UI, the status of logging in to the room is displayed.
    } else if(reason == ZegoRoomStateChangedReasonLogined) {
        // Logging in to a room succeeds. When a user successfully logs in to a room or switches the room, the room enters this status. In this case, the user can receive notifications of addition or deletion of other users and their streams in the room.
        // Only after a user successfully logs in to a room or switches the room, `startPublishingStream` and `startPlayingStream` can be called to publish and play streams properly.
    } else if(reason == ZegoRoomStateChangedReasonLoginFailed) {
        // Logging in to a room fails. When a user fails to log in to a room or switch the room due to a reason such as incorrect AppID or Token, the room enters this status.
    } else if(reason == ZegoRoomStateChangedReasonReconnecting) {
        // The room connection is temporarily interrupted. The SDK will retry internally if the interruption is caused by poor network quality.
    } else if(reason == ZegoRoomStateChangedReasonReconnected) {
        // Reconnecting a room succeeds. The SDK will retry internally if the interruption is caused by poor network quality. If the reconnection is successful, the room enters this status.
    } else if(reason == ZegoRoomStateChangedReasonReconnectFailed) {
        // Reconnecting a room fails. The SDK will retry internally if the interruption is caused by poor network quality. If the reconnection fails, the room enters this status.
    } else if(reason == ZegoRoomStateChangedReasonKickOut) {
        // The server forces a user to log out of a room. If a user who has logged in to room A tries to log in to room B, the server forces the user to log out of room A and room A enters this status.
    } else if(reason == ZegoRoomStateChangedReasonLogout) {
        // Logging out of a room succeeds. This is the default status of a room before login. If a user successfully logs out of a room by calling `logoutRoom` or `switchRoom`, the room enters this status.
    } else if(reason == ZegoRoomStateChangedReasonLogoutFailed) {
        // Logging out of a room fails. If a user fails to log out of a room by calling `logoutRoom` or `switchRoom`, the room enters this status.
    }
}

// When another user in the same room publishes or stops publishing streams, you will receive a notification of stream increase or decrease of the user.
- (void)onRoomStreamUpdate:(ZegoUpdateType)updateType streamList:(NSArray<ZegoStream *> *)streamList extendedData:(NSDictionary *)extendedData roomID:(NSString *)roomID {
    // When `updateType` is set to `ZegoUpdateTypeAdd`, an audio and video stream is added, and you can call the `startPlayingStream` method to play the stream.
    if (updateType == ZegoUpdateTypeAdd) {
        // Start to play streams. Set the view for rendering the remote streams. The default view mode of the SDK is used and the entire view is filled through proportional scaling.
        // In the following code, the value of `remoteUserView` is the same as that of `View` of the UI. For conciseness of the sample code, only the first stream in the list of newly added audio and video streams is played here. In a real service, it is recommended that you traverse the stream list to play each stream.
        NSString *streamID = streamList[0].streamID;
        [[ZegoExpressEngine sharedEngine] startPlayingStream:streamID canvas:[ZegoCanvas canvasWithView:self.remoteUserView]];
    }
}

// You will receive this callback when another user logs in to or out of the room. If the value of `ZegoUpdateType` in the callback is `ZegoUpdateTypeAdd`, a user has logged in to the room. If the value of `ZegoUpdateType` in the callback is `ZegoUpdateTypeDelete`, a user has logged out of the room.
// This callback can be received only when `ZegoRoomConfig` in which the `isUserStatusNotify` parameter is set to `YES` is passed in the `loginRoom` method.
// The `onRoomUserUpdate` callback may be invalid for rooms with more than 500 users. If such rooms need to be supported in your service, contact ZEGOCLOUD technical support.
- (void)onRoomUserUpdate:(ZegoUpdateType)updateType userList:(NSArray<ZegoUser *> *)userList roomID:(NSString *)roomID {
    if (updateType == ZegoUpdateTypeAdd) {
        for (ZegoUser *user in userList) {
            NSLog(@"User %@ logged in to room %@.", user.userName, roomID);
        }
    } else if (updateType == ZegoUpdateTypeDelete) {
        for (ZegoUser *user in userList) {
            NSLog(@"User %@ logged out of room %@.", user.userName, roomID);
        }
    }
}

// Status notification of audio and video stream publishing.
// This callback is received when the status of audio and video stream publishing of a user changes. If an exception occurs during stream publishing due to a network interruption, the SDK retries to publish the streams and triggers this status change notification.
- (void)onPublisherStateUpdate:(ZegoPublisherState)state errorCode:(int)errorCode extendedData:(NSDictionary *)extendedData streamID:(NSString *)streamID {
    if (errorCode != 0) {
        NSLog(@"Stream publishing exception. errorCode: %d", errorCode);
    } else {
        switch (state) {
            case ZegoPublisherStatePublishing:
                NSLog(@"Publishing streams.");
                break;
            case ZegoPublisherStatePublishRequesting:
                NSLog(@"Requesting stream publishing.");
                break;
            case ZegoPublisherStateNoPublish:
                NSLog(@"Streams not published.");
                break;
        }
    }
}

// Status notifications of audio and video stream playing.
// This callback is received when the status of audio and video stream playing of a user changes. If an exception occurs during stream playing due to a network interruption, the SDK automatically retries to play the streams.
- (void)onPlayerStateUpdate:(ZegoPlayerState)state errorCode:(int)errorCode extendedData:(NSDictionary *)extendedData streamID:(NSString *)streamID {
    if (errorCode != 0) {
        NSLog(@"Stream playing exception. streamID: %@, errorCode: %d", streamID, errorCode);
    } else {
        switch (state) {
            case ZegoPlayerStatePlaying:
                NSLog(@"Playing streams.");
                break;
            case ZegoPlayerStatePlayRequesting:
                NSLog(@"Requesting stream playing.");
                break;
            case ZegoPlayerStateNoPlay:
                NSLog(@"Streams not played.");
                break;
        }
    }
}

// You can use the `onNetworkQuality` callback to listen for the upstream and downstream network quality of users (including yourself) in a room. This callback will be received every two seconds. For details about network quality levels, see `ZegoStreamQualityLevel`.
- (void)onNetworkQuality:(NSString *)userID upstreamQuality:(ZegoStreamQualityLevel)upstreamQuality downstreamQuality:(ZegoStreamQualityLevel)downstreamQuality {
    if (userID == nil) {
        // Network quality of the local user.
//        NSLog(@"My upstream network quality is %lu.", (unsigned long)upstreamQuality);
//        NSLog(@"My downstream network quality is %lu.", (unsigned long)downstreamQuality);
    } else {
        // Network quality of other users in a room.
//        NSLog(@"The upstream network quality of user %@ is %lu.", userID, (unsigned long)upstreamQuality);
//        NSLog(@"The downstream network quality of user %@ is %lu.", userID, (unsigned long)downstreamQuality);
    }

    /*
     ZegoStreamQualityLevelExcellent: The network quality is excellent.
     ZegoStreamQualityLevelGood: The network quality is good.
     ZegoStreamQualityLevelMedium: The network quality is medium.
     ZegoStreamQualityLevelBad: The network quality is bad.
     ZegoStreamQualityLevelDie: The network is abnormal.
     ZegoStreamQualityLevelUnknown: The network quality is unknown.
     */
}


@end
```
</details>

