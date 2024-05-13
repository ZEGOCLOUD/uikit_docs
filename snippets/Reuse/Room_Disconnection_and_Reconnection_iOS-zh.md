
房间断连后重连的情况有如下三种：

#### 情况一：在服务端判断用户 A 心跳超时前重连成功

<img src="/Pics/FAQ/roomconnect1.png" />

如果用户 A 短暂断线，但是在 90s 内重连成功了，那么用户 B 不会收到 [onRoomUserUpdate\|_blank](@onRoomUserUpdate) 的回调通知。

- T0 = 0s：用户 A 的 SDK 收到客户端发起的 [loginRoom\|_blank](/article/api?doc=express-video-sdk_API~objectivec_ios~class~ZegoExpressEngine#login-room-user-config) 请求。
- T1 ≈ T0 + 120 ms：通常在调用 [loginRoom\|_blank](/article/api?doc=express-video-sdk_API~objectivec_ios~class~ZegoExpressEngine#login-room-user-config) 120 ms 后，客户端可以加入房间。加入房间过程中，用户 A 的客户端会收到 2 次 [onRoomStateChanged\|_blank](@onRoomStateChanged) 回调，分别通知客户端正在连接房间（Logining）以及连接房间成功（Logined）。
- T2 ≈ T1 + 100 ms：因网络传输延迟，用户 B 约在 100 ms 后收到 [onRoomUserUpdate\|_blank](@onRoomUserUpdate) 回调以通知客户端用户 A 加入房间。
- T3：某个时间点，用户 A 因网络断开等原因导致上行网络变差。SDK 会尝试重新加入房间，同时客户端会收到 [onRoomStateChanged\|_blank](@onRoomStateChanged) 回调以通知客户端用户 A 正在断线重连。
- T5 = T3 + time（小于 90s）：用户 A 在重连时间内恢复网络，重连成功。会收到 [onRoomStateChanged\|_blank](@onRoomStateChanged) 回调以通知客户端用户 A 重连成功。

#### 情况二：在服务端判断用户 A 心跳超时后重连成功

<img src="/Pics/FAQ/connect3.jpg" />


- T0、T1、T2、T3 时刻的情况同 [情况一：在服务端判断用户 A 心跳超时前重连成功](!AdvancedModule/Room_Connection_Status#2) 中的 T0、T1、T2、T3。

- T4' ≈ T3 + 90s：用户 B 此时收到 [onRoomUserUpdate\|_blank](@onRoomUserUpdate) 回调以通知用户 A 已断线。

- T5' = T3 + time（大于 90s，小于 20 min）：用户 A 在重连时间内恢复网络，重连成功。会收到 [onRoomStateChanged\|_blank](@onRoomStateChanged) 回调以通知客户端用户 A 重连成功。

- T6' ≈ T5' + 100 ms：因网络传输延迟，用户 B 约在 100ms 后收到 [onRoomUserUpdate\|_blank](@onRoomUserUpdate) 回调以通知客户端用户 A 加入房间。

#### 情况三：用户 A 重连失败

<img src="/Pics/FAQ/Reconnect3.png" />

- T0、T1、T2、T3 时刻的情况同 [情况一：在服务端判断用户 A 心跳超时前重连成功](!AdvancedModule/Room_Connection_Status#2) 中的 T0、T1、T2、T3。

- T4'' ≈ T3 + 90s：用户 B 此时收到 [onRoomUserUpdate\|_blank](@onRoomUserUpdate) 回调以通知用户 A 已断线。

- T5'' = T3 + 20 min：如果用户 A 连续 20 min 内无法重新加入房间，SDK 不再继续尝试重新连接。用户 A 将会收到 [onRoomStateChanged\|_blank](@onRoomStateChanged) 回调以通知客户端重连失败。
























































