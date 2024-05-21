```javascript
declare interface ZegoCloudRoomConfig {
  // 1 UI控件
  // 1.1 全局
  container?: HTMLElement | undefined | null; // 组件容器。
  maxUsers?: number; // 通话参与人数范围为 [2-20]。默认值为无限制。
  scenario?: {
    mode?: ScenarioModel; // 场景选择。
    config?: ScenarioConfig[ScenarioModel]; // 相应场景的具体配置。
  };
  console?: ConsoleLevel; // 用于问题定位，不是常规设置。设置此项可以决定要打印的日志的严重程度。
  screenSharingConfig?: {
    resolution?: ScreenSharingResolution;
    width?: number;
    height?: number;
    frameRate?: number;
    maxBitRate?: number;
  }; // 屏幕共享设置，分辨率设置

  // 1.2 加入前页面
  showPreJoinView?: boolean; // 是否显示加入前页面。默认显示。
  preJoinViewConfig?: {
    title?: string; // 加入前页面的标题。默认为“进入房间”。
  };
  turnOnMicrophoneWhenJoining?: boolean; // 加入通话时是否开启麦克风。默认开启。
  turnOnCameraWhenJoining?: boolean; // 加入通话时是否开启摄像头。默认开启。
  useFrontFacingCamera?: boolean; // 加入房间时是否使用前置摄像头。默认使用前置摄像头。
  videoResolutionDefault?: VideoResolution; // 默认视频分辨率。
  enableStereo?: boolean; // 是否开启立体声模式。默认关闭。

  // 1.3 房间页面
  // 您可以使用此按钮关闭其他参与者的摄像头。
  showTurnOffRemoteCameraButton?: boolean; // 是否显示关闭远程摄像头的按钮。默认不显示。
  // 您可以使用此按钮静音其他参与者的麦克风。
  showTurnOffRemoteMicrophoneButton?: boolean; // 是否显示关闭远程麦克风的按钮。默认不显示。
  showMyCameraToggleButton?: boolean; // 是否显示切换我的摄像头的按钮。默认显示。
  showMyMicrophoneToggleButton?: boolean; // 是否显示切换我的麦克风的按钮。默认显示。
  showAudioVideoSettingsButton?: boolean; // 是否显示音视频设置的按钮。默认显示。
  showTextChat?: boolean; // 是否显示右侧的文本聊天。默认显示。
  showUserList?: boolean; // 是否显示参与者列表。默认显示。
  showRemoveUserButton?: boolean; // 是否显示移除参与者的按钮。默认不显示。
  lowerLeftNotification?: {
    showUserJoinAndLeave?: boolean; // 是否在左下角显示参与者加入和离开的通知。默认显示。
    showTextChat?: boolean; // 是否在左下角显示最新的消息。默认显示。
  };
  branding?: {
    logoURL?: string; // 品牌LOGO的URL。
  };
  layout?: "Sidebar" | "Grid" | "Auto"; // 布局模式。默认使用自动模式。
  showLayoutButton?: boolean; // 是否显示切换布局的按钮。默认显示。
  showNonVideoUser?: boolean; // 是否显示无视频的参与者。默认显示。
  showOnlyAudioUser?: boolean; // 是否显示仅音频参与者。默认显示。
  sharedLinks?: { name?: string; url?: string }[]; // 生成的共享链接的描述。
  showScreenSharingButton?: boolean; // 是否显示屏幕共享按钮。默认显示。
  showPinButton?: boolean; // 是否显示固定按钮。默认显示。
  whiteboardConfig?: {
    showAddImageButton?: boolean; // 默认为 false。要使用此功能，请激活文件共享功能，然后导入插件。否则，将出现此提示：“添加图像失败，不支持此功能。”
    showCreateAndCloseButton?: boolean; // 是否显示用于创建/关闭白板的按钮。默认显示。
  };
  showRoomTimer?: boolean; // 是否显示计时器。默认不显示。
  showRoomDetailsButton?: boolean; // 是否显示查看房间详情的按钮。默认显示。
  showInviteToCohostButton?: boolean; // 是否显示邀请观众连麦的按钮。
  showRemoveCohostButton?: boolean; // 是否显示下麦连麦观众的按钮。
  showRequestToCohostButton?: boolean; // 是否显示请求连麦的按钮。
  rightPanelExpandedType?: RightPanelExpandedType; // 控制右侧面板显示的信息类型，默认显示“无”。
  autoHideFooter?: boolean; // 是否自动隐藏底部工具栏，默认自动隐藏。仅适用于移动浏览器。
  enableUserSearch?: boolean; // 是否启用用户搜索功能，默认为false。

  // 1.4 离开房间页面
  showLeavingView?: boolean; // 是否显示离开房间页面。默认显示。
  showLeaveRoomConfirmDialog?: boolean; // 离开房间时是否显示确认弹窗，默认为true

  // 2 相关事件回调
  onJoinRoom?: () => void; // 加入房间时触发此回调函数。
  onLeaveRoom?: () => void; // 离开房间时触发此回调函数。
  onUserJoin?: (users: ZegoUser[]) => void; // 房间内有参与者加入时触发此回调函数。
  onUserLeave?: (users: ZegoUser[]) => void; // 房间内有参与者离开时触发此回调函数。
  onUserAvatarSetter?: (user: ZegoUser[]) => void; // 设置用户头像的回调函数。
  onLiveStart?: (user: ZegoUser) => void; // 直播开始时的回调函数。
  onLiveEnd?: (user: ZegoUser) => void; // 直播结束时的回调函数。
  onYouRemovedFromRoom?: () => void; // 被移出房间时的回调函数。
  onInRoomMessageReceived?: (messageInfo: InRoomMessageInfo) => void; // 收到房间内聊天消息时的回调函数。
  onInRoomCustomCommandReceived?: (command: ZegoSignalingInRoomCommandMessage[]) => void;
  onReturnToHomeScreenClicked?: () => void; // 点击“返回主屏幕”按钮时触发此回调函数。设置此回调函数后，点击按钮将不会导航到主屏幕；而是您可以在此处添加自己的页面导航逻辑。
}

// 这是一个隐藏加入前页面的示例：
zp.joinRoom({
          container: document.querySelector("#root"),
          showPreJoinView: false
});
```



