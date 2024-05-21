### 常见问题
1. 为什么自定义消息采用 ZIMTextMessage，而不是 ZIMCommandMessage？   
在目前场景下，自定义消息的使用并不是用于展示 IM 聊天消息，而是类似于一对一的“信令”效果。因此不需要 ZIMCommandMessage 支持高并发的特性。   
除此之外，ZIMTextMessage 比 ZIMCommandMessage 拥有更多特性，例如保证消息可靠有序、可存储为历史消息等，方便之后进行功能扩展。    
不过，由于本场景较为简单，使用 ZIMCommandMessage 当然同样可行。
