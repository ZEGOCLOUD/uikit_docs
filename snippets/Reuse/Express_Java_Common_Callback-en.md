```Java
void setEventHandler() {
        engine.setEventHandler(new IZegoEventHandler() {
            @Override
            // When another user in the same room publishes or stops publishing streams, you will receive a notification of stream increase or decrease of the user.
            public void onRoomStreamUpdate(String roomID, ZegoUpdateType updateType, ArrayList<ZegoStream> streamList, JSONObject extendedData) {
                super.onRoomStreamUpdate(roomID, updateType, streamList, extendedData);
                // When `updateType` is set to `ZegoUpdateType.ADD`, an audio and video stream is added, and you can call the `startPlayingStream` method to play the stream.
                if (updateType == ZegoUpdateType.ADD) {
                    // Start to play streams. Set the view for rendering the remote streams. The default view mode of the SDK is used and the entire view is filled through proportional scaling.
                    ZegoStream stream = streamList.get(0);
                    String playStreamID = stream.streamID;
                    // In the following code, the value of `remoteUserView` is the same as that of `TextureView` of the UI. For conciseness of the sample code, only the first stream in the list of newly added audio and video streams is played here. In a real service, it is recommended that you traverse the stream list to play each stream.
                    ZegoCanvas playCanvas = new ZegoCanvas(findViewById(R.id.remoteUserView));
                    engine.startPlayingStream(playStreamID, playCanvas);
                }
            }

            // You will receive this callback when another user logs in to or out of the room. If the value of `ZegoUpdateType` in the callback is `ZegoUpdateType.ADD`, a user has logged in to the room. If the value of `ZegoUpdateType` in the callback is `ZegoUpdateType.DELETE`, a user has logged out of the room.
            // This callback can be received only when `ZegoRoomConfig` in which the `isUserStatusNotify` parameter is set to `true` is passed in the `loginRoom` method.
            // The `onRoomUserUpdate` callback may be invalid for rooms with more than 500 users. If such rooms need to be supported in your service, contact ZEGOCLOUD technical support.
            @Override
            public void onRoomUserUpdate(String roomID, ZegoUpdateType updateType, ArrayList<ZegoUser> userList) {
                super.onRoomUserUpdate(roomID, updateType, userList);
                // You can implement service logic in the callback based on the login and logout status of users.
                if (updateType == ZegoUpdateType.ADD) {
                    for (ZegoUser user : userList) {
                        String text = user.userID + "logged in to the room.";
                        Toast.makeText(getApplicationContext(), text, Toast.LENGTH_LONG).show();
                    }
                } else if (updateType == ZegoUpdateType.DELETE) {
                    for (ZegoUser user : userList) {
                        String text = user.userID + "logged out of the room.";
                        Toast.makeText(getApplicationContext(), text, Toast.LENGTH_LONG).show();
                    }
                }
            }

            // Notifications of room connection status changes.
            @Override
            public void onRoomStateChanged(String roomID, ZegoRoomStateChangedReason reason, int i, JSONObject jsonObject) {
                super.onRoomStateChanged(roomID, reason, i, jsonObject);
                if(reason == ZegoRoomStateChangedReason.LOGINING) {
                    // Logging in to a room. When `loginRoom` is called to log in to a room or `switchRoom` is called to switch to another room, the room enters this status, indicating that it is requesting a connection to the server. On the app UI, the status of logging in to the room is displayed.
                } else if(reason == ZegoRoomStateChangedReason.LOGINED) {
                    // Logging in to a room succeeds. When a user successfully logs in to a room or switches the room, the room enters this status. In this case, the user can receive notifications of addition or deletion of other users and their streams in the room.
                    // Only after a user successfully logs in to a room or switches the room, `startPublishingStream` and `startPlayingStream` can be called to publish and play streams properly.
                } else if(reason == ZegoRoomStateChangedReason.LOGIN_FAILED) {
                    // Logging in to a room fails. When a user fails to log in to a room or switch the room due to a reason such as incorrect AppID or Token, the room enters this status.
                } else if(reason == ZegoRoomStateChangedReason.RECONNECTING) {
                    // The room connection is temporarily interrupted. The SDK will retry internally if the interruption is caused by poor network quality.
                } else if(reason == ZegoRoomStateChangedReason.RECONNECTED) {
                    // Reconnecting a room succeeds. The SDK will retry internally if the interruption is caused by poor network quality. If the reconnection is successful, the room enters this status.
                } else if(reason == ZegoRoomStateChangedReason.RECONNECT_FAILED) {
                    // Reconnecting a room fails. The SDK will retry internally if the interruption is caused by poor network quality. If the reconnection fails, the room enters this status.
                } else if(reason == ZegoRoomStateChangedReason.KICK_OUT) {
                    // The server forces a user to log out of a room. If a user who has logged in to room A tries to log in to room B, the server forces the user to log out of room A and room A enters this status.
                } else if(reason == ZegoRoomStateChangedReason.LOGOUT) {
                    // Logging out of a room succeeds. This is the default status of a room before login. If a user successfully logs out of a room by calling `logoutRoom` or `switchRoom`, the room enters this status.
                } else if(reason == ZegoRoomStateChangedReason.LOGOUT_FAILED) {
                    // Logging out of a room fails. If a user fails to log out of a room by calling `logoutRoom` or `switchRoom`, the room enters this status.
                }
            }

            // Status notification of audio and video stream publishing.
            // This callback is received when the status of audio and video stream publishing of a user changes. If an exception occurs during stream publishing due to a network interruption, the SDK retries to publish the streams and triggers this status change notification.
            @Override
            public void onPublisherStateUpdate(String streamID, ZegoPublisherState state, int errorCode, JSONObject extendedData) {
                super.onPublisherStateUpdate(streamID, state, errorCode, extendedData);
                if (errorCode != 0) {
                    // Stream publishing exception.
                }
                if (state == ZegoPublisherState.PUBLISHING) {
                    // Publishing streams.
                } else if (state == ZegoPublisherState.NO_PUBLISH){
                    // Streams not published.
                } else if (state == ZegoPublisherState.PUBLISH_REQUESTING){
                    // Requesting stream publishing.
                }
            }
            // Status notifications of audio and video stream playing.
            // This callback is received when the status of audio and video stream playing of a user changes. If an exception occurs during stream playing due to a network interruption, the SDK automatically retries to play the streams.
            @Override
            public void onPlayerStateUpdate(String streamID, ZegoPlayerState state, int errorCode, JSONObject extendedData) {
                super.onPlayerStateUpdate(streamID, state, errorCode, extendedData);
                if (errorCode != 0) {
                    // Stream playing exception.
                }
                if (state == ZegoPlayerState.PLAYING) {
                    // Playing streams.
                } else if (state == ZegoPlayerState.NO_PLAY){
                    // Streams not played.
                } else if (state == ZegoPlayerState.PLAY_REQUESTING){
                    // Requesting stream playing.
                }
            }

            @Override
            public void onNetworkQuality(String userID, ZegoStreamQualityLevel zegoStreamQualityLevel, ZegoStreamQualityLevel zegoStreamQualityLevel1) {
                super.onNetworkQuality(userID, zegoStreamQualityLevel, zegoStreamQualityLevel1);
                if (userID == null) {
                    // Network quality of the local user.
                    // ("My upstream network quality is %lu.", (unsigned long)upstreamQuality);
                    // ("My downstream network quality is %lu.", (unsigned long)downstreamQuality);
                } else {
                    // Network quality of other users in a room.
                    // ("The upstream network quality of user %s is %lu.", userID, (unsigned long)upstreamQuality);
                    // ("The downstream network quality of user %s is %lu.", userID, (unsigned long)downstreamQuality);
                }

                /*
                ZegoStreamQualityLevel.EXCELLENT: The network quality is excellent.
                ZegoStreamQualityLevel.GOOD: The network quality is good.
                ZegoStreamQualityLevel.MEDIUM: The network quality is medium.
                ZegoStreamQualityLevel.BAD: The network quality is bad.
                ZegoStreamQualityLevel.DIE: The network is abnormal.
                ZegoStreamQualityLevel.UNKNOWN: The network quality is unknown.
                */
            }
        });
}
```
