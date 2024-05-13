实时有序数据是基于“流”进行传输的。

发送端首先需要广播一条实时有序数据流，开发者可以调用 ZegoRealTimeSequentialDataManager 对象的 `startBroadcasting` 接口，开始广播一条有序数据流。

而接收端需要订阅这条实时有序数据流，然后才能收到实时有序数据。开发者可以调用 ZegoRealTimeSequentialDataManager 对象的 `startSubscribing` 函数开始订阅一条有序数据流。

<div class="mk-warning">

- 实时有序数据流 ID 要在 AppID 范围下保证全局唯一。
- 一个管理器对象可以广播/订阅多条实时有序数据流，可以通过多次调用 `startBroadcasting`/`startSubscribing` 接口，传入不同的流 ID 即可。
</div>





