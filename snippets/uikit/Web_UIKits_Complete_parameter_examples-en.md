```js
declare interface ZegoCloudRoomConfig {
  // 1 UI controls
  // 1.1 Global
  container?: HTMLElement | undefined | null; // Component container.
  maxUsers?: number; // In-call participants range from [2 - 20]. The default value is unlimited.
  scenario?: {
    mode?: ScenarioModel; // Scenario selection.
    config?: ScenarioConfig[ScenarioModel]; // Specific configurations in the corresponding scenario.
  };
  console?: ConsoleLevel; // Used to problem localization, not a regular setup. While setting this can decide what severity of logs you want to print.
  screenSharingConfig?: {
    resolution?: ScreenSharingResolution;
    width?: number;
    height?: number;
    frameRate?: number;
    maxBitRate?: number;
  }; // Screen sharing settings, resolution settings

  // 1.2 Prejoin view
  showPreJoinView?: boolean; // Whether to display the prejoin view. Displayed by default.
  preJoinViewConfig?: {
    title?: string; // The title of the prejoin view. Uses "enter Room" by default.
  };
  turnOnMicrophoneWhenJoining?: boolean; // Whether to enable the microphone when joining the call. Enabled by default.
  turnOnCameraWhenJoining?: boolean; // Whether to enable the camera when joining the call. Enabled by default.
  useFrontFacingCamera?: boolean; // Whether to use the front-facing camera when joining the room. Uses a front-facing camera by default.
  videoResolutionDefault?: VideoResolution; // The default video resolution.
  enableStereo?: boolean; // Whether to enable the stereo mode. Disabled by default.

  // 1.3 Room view
  // You can use this button to mute other Participant's camera.
  showTurnOffRemoteCameraButton?: boolean; // Whether to display the button for turning off the remote camera. Not displayed by default.
  // You can use this button to mute other Participant's microphone.
  showTurnOffRemoteMicrophoneButton?: boolean; // Whether to display the button for turning off the remote microphone. Not displayed by default.
  showMyCameraToggleButton?: boolean; // Whether to display the button for toggling my camera. Displayed by default.
  showMyMicrophoneToggleButton?: boolean; // Whether to display the button for toggling my microphone. Displayed by default.
  showAudioVideoSettingsButton?: boolean; // Whether to display the button for audio and video settings. Displayed by default.
  showTextChat?: boolean; // Whether to display the text chat on the right side. Displayed by default.
  showUserList?: boolean; // Whether to display the participant list. Displayed by default. 
  showRemoveUserButton?: boolean; // Whether to display the button for removing participants. Not displayed by default.
  lowerLeftNotification?: {
    showUserJoinAndLeave?: boolean; // Whether to display notifications on the lower left area when participants join and leave the room. Displayed by default.
    showTextChat?: boolean; // Whether to display the latest messages on the lower left area. Displayed by default.
  };
  branding?: {
    logoURL?: string; // The branding LOGO URL.
  };
  layout?: "Sidebar" | "Grid" | "Auto"; // The layout modes. Uses the Auto mode by default.
  showLayoutButton?: boolean; // Whether to display the button for switching layouts. Displayed by default.
  showNonVideoUser?: boolean; // Whether to display the non-video participants. Displayed by default.
  showOnlyAudioUser?: boolean; // Whether to display audio-only participants. Displayed by default.
  sharedLinks?: { name?: string; url?: string }[]; // Description of the generated shared links.
  showScreenSharingButton?: boolean; // Whether to display the Screen Sharing button. Displayed by default.
  showPinButton?: boolean; // Whether to display the Pin button. Displayed by default.
  whiteboardConfig?: {
    showAddImageButton?: boolean; // It's set to false by default. To use this feature, activate the File Sharing feature, and then import the plugin. Otherwise, this prompt will occur: "Failed to add image, this feature is not supported."
    showCreateAndCloseButton?: boolean; // Whether to display the button that is used to create/turn off the whiteboard. Displayed by default.
  };
  showRoomTimer?: boolean; // Whether to display the timer. Not displayed by default.
  showRoomDetailsButton?: boolean; // Whether to display the button that is used to check the room details. Displayed by default.
  showInviteToCohostButton?: boolean; // Whether to show the button that is used to invite the audience to co-host on the host end.
  showRemoveCohostButton?: boolean; // Whether to show the button that is used to remove the audience on the host end.
  showRequestToCohostButton?: boolean; // Whether to show the button that is used to request to co-host on the audience end.
  rightPanelExpandedType?: RightPanelExpandedType; // Controls the type of the information displayed on the right panel, display "None" by default.
  autoHideFooter?: boolean; // Whether to automatically hide the footer (bottom toolbar), auto-hide by default. This only applies to mobile browsers.
  enableUserSearch?: boolean; // Whether to enable the user search feature, false by default.

  // 1.4 Leaving view
  showLeavingView?: boolean; // Whether to display the leaving view. Displayed by default.
  showLeaveRoomConfirmDialog?: boolean; // When leaving the room, whether to display a confirmation pop-up window, the default is true

  // 2 Related event callbacks
  onJoinRoom?: () => void; // This will be triggered when you join the room. 
  onLeaveRoom?: () => void; // This will be triggered when you left the room.
  onUserJoin?: (users: ZegoUser[]) => void; // This will be triggered when in-room participants join the room.
  onUserLeave?: (users: ZegoUser[]) => void; // This will be triggered when in-room participants left the room.
  onUserAvatarSetter?: (user: ZegoUser[]) => void; // Callback for the user avatar can be set.
  onLiveStart?: (user: ZegoUser) => void; //  Callback for livestream starts.
  onLiveEnd?: (user: ZegoUser) => void; // Callback for livestream ends.
  onYouRemovedFromRoom?: () => void; // Callback for you removed from the room.
  onInRoomMessageReceived?: (messageInfo: InRoomMessageInfo) => void; // Callback for in-room chat message received.
  onInRoomCustomCommandReceived?: (command: ZegoSignalingInRoomCommandMessage[]) => void;
  onReturnToHomeScreenClicked?: () => void; // When the "Return to home screen" button is clicked, this callback is triggered. After setting up this callback, clicking the button will not navigate to the home screen; instead, you can add your own page navigation logic here.
}

// Here’s an example that hides the prejoin view page:
zp.joinRoom({
          container: document.querySelector("#root"),
          showPreJoinView: false
});
```






