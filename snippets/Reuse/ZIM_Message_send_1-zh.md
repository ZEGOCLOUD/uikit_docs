<div class="mk-hint">

- 发送消息时，统一使用 [sendMessage\|_blank](@sendMessage) 接口，并根据消息类型传入对应的 ZIMConversationType 取值。
- 接收消息时：
  + 单聊消息（Peer 类型），通过 [onReceivePeerMessage\|_blank](@onReceivePeerMessage) 回调接收。
  + 房间消息（Room 类型），通过 [onReceiveRoomMessage\|_blank](@onReceiveRoomMessage) 回调接收。
  + 群组消息（Group 类型），通过 [onReceiveGroupMessage\|_blank](@onReceiveGroupMessage) 回调接收。
</div>






