<div class="mk-warning">

- 只有调用 [loginRoom\|_blank](@loginRoom) 接口登录房间时传入 [ZegoRoomConfig\|_blank](@-ZegoRoomConfig) 配置，且 “isUserStatusNotify” 参数取值为 “true” 时，用户才能收到 [onRoomUserUpdate\|_blank](@onRoomUserUpdate) 回调。
- 通常情况下，如果某个用户想要播放其他用户推送的视频，可以在收到流状态更新（新增）的回调中，调用 [startPlayingStream\|_blank](@startPlayingStream) 接口拉取远端推送的音视频流。
</div>





