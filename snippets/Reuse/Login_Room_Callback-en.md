<div class="mk-warning">

- To receive the [`onRoomUserUpdate`\|_blank](@onRoomUserUpdate) callback, you must set the `isUserStatusNotify` property of the room configuration parameter [`ZegoRoomConfig`\|_blank](@-ZegoRoomConfig) to `true` when you call the [`loginRoom`\|_blank](@loginRoom) method to log in to a room.
- To play streams published by other users in the room: you can listen for the [`onRoomStreamUpdate`\|_blank](@onRoomStreamUpdate) callback, and when there is a stream added, call the [`startPlayingStream`\|_blank](@startPlayingStream) method to start receiving and playing the newly added stream.
</div>





