<div class="mk-hint">

- 发送消息时，统一使用 [sendMessage\|_blank](@sendMessage) 接口，并根据消息类型传入对应的 conversationType 取值。
- 接收消息时：
  + 单聊消息（Peer 类型），通过 [receivePeerMessage\|_blank](@receivePeerMessage) 回调接收。
  + 房间消息（Room 类型），通过 [receiveRoomMessage\|_blank](@receiveRoomMessage) 回调接收。
  + 群组消息（Group 类型），通过 [receiveGroupMessage\|_blank](@receiveGroupMessage) 回调接收。
</div>






