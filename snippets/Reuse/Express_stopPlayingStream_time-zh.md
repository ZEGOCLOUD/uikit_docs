<div class="mk-warning">

如果开发者通过 [onRoomStreamUpdate\|_blank](@onRoomStreamUpdate) 回调收到了音视频流 “减少” 的通知，请及时调用 [stopPlayingStream \|_blank](@stopPlayingStream) 接口停止拉流，避免拉到空流、产生额外的成本；或者，开发者可以根据自己的业务需求，选择合适的时机，主动调用 [stopPlayingStream \|_blank](@stopPlayingStream) 接口停止拉流。
</div>


