```Java
void setEventHandler() {
        engine.setEventHandler(new IZegoEventHandler() {
            @Override
            // 房间内其他用户推流/停止推流时，我们会在这里收到相应用户的音视频流增减的通知
            public void onRoomStreamUpdate(String roomID, ZegoUpdateType updateType, ArrayList<ZegoStream> streamList, JSONObject extendedData) {
                super.onRoomStreamUpdate(roomID, updateType, streamList, extendedData);
                //当 updateType 为 ZegoUpdateType.ADD 时，代表有音视频流新增，此时我们可以调用 startPlayingStream 接口拉取播放该音视频流
                if (updateType == ZegoUpdateType.ADD) {
                    // 开始拉流，设置远端拉流渲染视图，视图模式采用 SDK 默认的模式，等比缩放填充整个 View
                    ZegoStream stream = streamList.get(0);
                    String playStreamID = stream.streamID;
                    // 如下 remoteUserView 为 UI 界面上的 TextureView.这里为了使示例代码更加简洁，我们只拉取新增的音视频流列表中第的第一条流，在实际的业务中，建议开发者循环遍历 streamList ，拉取每一条音视频流
                    ZegoCanvas playCanvas = new ZegoCanvas(findViewById(R.id.remoteUserView));
                    engine.startPlayingStream(playStreamID, playCanvas);
                }
            }

            //同一房间内的其他用户进出房间时，您可通过此回调收到通知。回调中的参数 ZegoUpdateType 为 ZegoUpdateType.ADD 时，表示有用户进入了房间；ZegoUpdateType 为 ZegoUpdateType.DELETE 时，表示有用户退出了房间。
            // 只有在登录房间 loginRoom 时传的配置 ZegoRoomConfig 中的 isUserStatusNotify 参数为 true 时，用户才能收到房间内其他用户的回调。
            // 房间人数大于 500 人的情况下 onRoomUserUpdate 回调不保证有效。若业务场景存在房间人数大于 500 的情况，请联系 ZEGO 技术支持。
            @Override
            public void onRoomUserUpdate(String roomID, ZegoUpdateType updateType, ArrayList<ZegoUser> userList) {
                super.onRoomUserUpdate(roomID, updateType, userList);
                // 您可以在回调中根据用户的进出/退出情况，处理对应的业务逻辑
                if (updateType == ZegoUpdateType.ADD) {
                    for (ZegoUser user : userList) {
                        String text = user.userID + "进入了房间";
                        Toast.makeText(getApplicationContext(), text, Toast.LENGTH_LONG).show();
                    }
                } else if (updateType == ZegoUpdateType.DELETE) {
                    for (ZegoUser user : userList) {
                        String text = user.userID + "退出了房间";
                        Toast.makeText(getApplicationContext(), text, Toast.LENGTH_LONG).show();
                    }
                }
            }

            // 房间连接状态改变
            @Override
            public void onRoomStateChanged(String roomID, ZegoRoomStateChangedReason reason, int i, JSONObject jsonObject) {
                super.onRoomStateChanged(roomID, reason, i, jsonObject);
                if(reason == ZegoRoomStateChangedReason.LOGINING) {
                    // 正在登录房间。当调用 [loginRoom] 登录房间或 [switchRoom] 切换到目标房间时，进入该状态，表示正在请求连接服务器。通常通过该状态进行应用界面的展示。
                } else if(reason == ZegoRoomStateChangedReason.LOGINED) {
                    //登录房间成功。当登录房间或切换房间成功后，进入该状态，表示登录房间已经成功，用户可以正常收到房间内的其他用户和所有流信息增删的回调通知。
                    //只有当房间状态是登录成功或重连成功时，推流（startPublishingStream）、拉流（startPlayingStream）才能正常收发音视频
                } else if(reason == ZegoRoomStateChangedReason.LOGIN_FAILED) {
                    //登录房间失败。当登录房间或切换房间失败后，进入该状态，表示登录房间或切换房间已经失败，例如 AppID 或 Token 不正确等。
                } else if(reason == ZegoRoomStateChangedReason.RECONNECTING) {
                    //房间连接临时中断。如果因为网络质量不佳产生的中断，SDK 会进行内部重试。
                } else if(reason == ZegoRoomStateChangedReason.RECONNECTED) {
                    //房间重新连接成功。如果因为网络质量不佳产生的中断，SDK 会进行内部重试，重连成功后进入该状态。
                } else if(reason == ZegoRoomStateChangedReason.RECONNECT_FAILED) {
                    //房间重新连接失败。如果因为网络质量不佳产生的中断，SDK 会进行内部重试，重连失败后进入该状态。
                } else if(reason == ZegoRoomStateChangedReason.KICK_OUT) {
                    //被服务器踢出房间。例如有相同用户名在其他地方登录房间导致本端被踢出房间，会进入该状态。
                } else if(reason == ZegoRoomStateChangedReason.LOGOUT) {
                    //登出房间成功。没有登录房间前默认为该状态，当调用 [logoutRoom] 登出房间成功或 [switchRoom] 内部登出当前房间成功后，进入该状态。
                } else if(reason == ZegoRoomStateChangedReason.LOGOUT_FAILED) {
                    //登出房间失败。当调用 [logoutRoom] 登出房间失败或 [switchRoom] 内部登出当前房间失败后，进入该状态。
                }
            }

            //用户推送音视频流的状态通知
            //用户推送音视频流的状态发生变更时，会收到该回调。如果网络中断导致推流异常，SDK 在重试推流的同时也会通知状态变化。
            @Override
            public void onPublisherStateUpdate(String streamID, ZegoPublisherState state, int errorCode, JSONObject extendedData) {
                super.onPublisherStateUpdate(streamID, state, errorCode, extendedData);
                if (errorCode != 0) {
                    //推流状态出错
                }
                if (state == ZegoPublisherState.PUBLISHING) {
                    //正在推流中
                } else if (state == ZegoPublisherState.NO_PUBLISH){
                    //未推流
                } else if (state == ZegoPublisherState.PUBLISH_REQUESTING){
                    //正在请求推流中
                }
            }
            //用户拉取音视频流的状态通知
            //用户拉取音视频流的状态发生变更时，会收到该回调。如果网络中断导致拉流异常，SDK 会自动进行重试。
            @Override
            public void onPlayerStateUpdate(String streamID, ZegoPlayerState state, int errorCode, JSONObject extendedData) {
                super.onPlayerStateUpdate(streamID, state, errorCode, extendedData);
                if (errorCode != 0) {
                    //拉流状态出错
                }
                if (state == ZegoPlayerState.PLAYING) {
                    //正在拉流中
                } else if (state == ZegoPlayerState.NO_PLAY){
                    //未拉流
                } else if (state == ZegoPlayerState.PLAY_REQUESTING){
                    //正在请求拉流中
                }
            }

            @Override
            public void onNetworkQuality(String userID, ZegoStreamQualityLevel zegoStreamQualityLevel, ZegoStreamQualityLevel zegoStreamQualityLevel1) {
                super.onNetworkQuality(userID, zegoStreamQualityLevel, zegoStreamQualityLevel1);
                if (userID == null) {
                    // 代表本地用户（我）的网络质量
                    //("我的上行网络质量是 %lu", (unsigned long)upstreamQuality);
                    //("我的下行网络质量是 %lu", (unsigned long)downstreamQuality);
                } else {
                    //代表房间内其他用户的网络质量
                    //("用户 %s 的上行网络质量是 %lu", userID, (unsigned long)upstreamQuality);
                    //("用户 %s 的下行网络质量是 %lu", userID, (unsigned long)downstreamQuality);
                }

                /*
                ZegoStreamQualityLevel.EXCELLENT, 网络质量极好
                ZegoStreamQualityLevel.GOOD, 网络质量好
                ZegoStreamQualityLevel.MEDIUM, 网络质量正常
                ZegoStreamQualityLevel.BAD, 网络质量差
                ZegoStreamQualityLevel.DIE, 网络异常
                ZegoStreamQualityLevel.UNKNOWN, 网络质量未知
                */
            }
        });
}
```





