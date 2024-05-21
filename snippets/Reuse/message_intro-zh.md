
<style>
table th:nth-of-type(1) {width: 15%;}
table th:nth-of-type(2) {width: 32%;}
table th:nth-of-type(3) {width: 33%;}
table th:nth-of-type(4) {width: 20%;}
table {width: 100%;}
</style>

ZEGO 提供多种文本消息的收发功能，实现发送房间内广播消息、弹幕消息、简单 IM 文字聊天、点赞、送礼物、答题等功能。


| 消息类型 | 功能描述 | 应用场景 | 发送频率限制 |
|-------|--------|--------|--------|
| 广播消息 | 向同一房间内所有用户发送文本消息，默认支持最多前 500 个加入房间的用户能收到该消息。 | 一般当直播房间人数小于 500 时发送该类消息。可用于简单的房间内聊天室场景。 | 请参考 [限制说明\|_blank](!ExpressVideoSDK-OverView/Restrictions)。 |
| 弹幕消息 | 观众在直播过程中可以发表自己的评论，并以滑动而过的字幕显示出来，增加了观众之间的互动性。 | 一般用于房间内有大量消息收发，且不需要保证消息可靠性的场景，例如直播弹幕。 | 请参考 [限制说明\|_blank](!ExpressVideoSDK-OverView/Restrictions)。|
| 自定义信令 | 向同一房间内单个或多个用户发送消息。 | 一般用于远程控制信令或简单的文字消息发送。比如在线娃娃机场景中，远程控制娃娃机夹子的移动。 | 请参考 [限制说明\|_blank](!ExpressVideoSDK-OverView/Restrictions)。 

另外，ZEGO 还提供完整的即时通讯 ZIM SDK，为开发者提供全平台互动、海量并发、超低延时、消息必达的通信服务，具体请参考 [即时通讯\|_blank](!IM-Introduction/Overview)。





















