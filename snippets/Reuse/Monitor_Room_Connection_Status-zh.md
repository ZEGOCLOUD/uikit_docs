用户可通过监听 [onRoomStateChanged\|_blank](@onRoomStateChanged) 回调，实时监控自己在本房间内的连接状态。当用户连接状态发生改变时，SDK 会触发该回调，并在回调中明确当前的连接状态和相关错误码。

如果因为网络质量不佳导致房间连接中断，SDK 内部会自动进行重试，详情请参考 [Express SDK 是否支持断线重连机制？\|_blank](https://doc-zh.zego.im/faq/reconnect)

#### 房间状态说明

<img src="/Pics/Express/Android/express_roomstate_change_android.png" style="width:100%"/>

房间连接状态会互相转化，开发者可通过 [ZegoRoomStateChangedReason\|_blank](@-ZegoRoomStateChangedReason) 的值判断各种情况，并在必要时结合 errorCode 处理相应的逻辑。











