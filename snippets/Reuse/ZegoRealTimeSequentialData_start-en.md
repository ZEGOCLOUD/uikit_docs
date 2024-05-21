实时有序数据是基于“流”进行传输的。

发送端在发送数据之前，需要广播一条流（即推流）。开发者可以调用 [ZegoRealTimeSequentialDataManager\|_blank](@-ZegoRealTimeSequentialDataManager) 对象的 [startBroadcasting\|_blank](@startBroadcasting) 接口，开始广播一条数据流。

而接收端需要订阅这条流（即拉流），然后才能收到实时有序数据。开发者可以调用 [ZegoRealTimeSequentialDataManager\|_blank](@-ZegoRealTimeSequentialDataManager) 对象的 [startSubscribing\|_blank](@startSubscribing) 函数开始订阅一条数据流。

<div class="mk-warning">

- 流 ID 要在 AppID 范围下保证全局唯一。
- 一个管理器对象可以广播/订阅多条流，可以通过多次调用 [startBroadcasting\|_blank](@startBroadcasting)/[startSubscribing\|_blank](@startSubscribing) 接口，传入不同的流 ID 即可。
</div>
