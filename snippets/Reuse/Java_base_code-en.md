## Sample code
The following is sample code for a basic video call and can be used for reference during development.
<details class="zg-primary">
    <summary>XML code for creating a UI layout</summary>

```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/coordinatorLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">


    <TextureView
        android:id="@+id/preview"
        android:layout_width="wrap_content"
        android:layout_height="731dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <Button
        android:id="@+id/startButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/appBarLayout" />

    <Button
        android:id="@+id/stopButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop"
        app:iconTint="#E65A5A"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/startButton" />

    <com.google.android.material.appbar.AppBarLayout
        android:id="@+id/appBarLayout"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:theme="@style/Theme.Helloworld.AppBarOverlay"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent">

        <androidx.appcompat.widget.Toolbar
            android:id="@+id/toolbar"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:background="?attr/colorPrimary"
            app:popupTheme="@style/Theme.Helloworld.PopupOverlay" />

    </com.google.android.material.appbar.AppBarLayout>

    <com.google.android.material.floatingactionbutton.FloatingActionButton
        android:id="@+id/fab"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="16dp"
        android:layout_marginRight="16dp"
        android:layout_marginBottom="16dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:srcCompat="@android:drawable/ic_dialog_email" />

    <TextureView
        android:id="@+id/remoteUserView"
        android:layout_width="150dp"
        android:layout_height="220dp"
        android:layout_marginTop="30dp"
        android:layout_marginEnd="30dp"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/appBarLayout" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
</details>

<details class="zg-primary">
    <summary>Code for implementing a video call</summary>

```java
package com.zego.express.demo.helloworld;

import android.content.pm.PackageManager;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.view.View;

import android.widget.Toast;

import org.json.JSONObject;

import java.util.ArrayList;

import im.zego.zegoexpress.ZegoExpressEngine;
import im.zego.zegoexpress.callback.IZegoDestroyCompletionCallback;
import im.zego.zegoexpress.callback.IZegoEventHandler;
import im.zego.zegoexpress.constants.ZegoPlayerState;
import im.zego.zegoexpress.constants.ZegoPublisherState;
import im.zego.zegoexpress.constants.ZegoRoomStateChangedReason;
import im.zego.zegoexpress.constants.ZegoScenario;
import im.zego.zegoexpress.constants.ZegoStreamQualityLevel;
import im.zego.zegoexpress.constants.ZegoUpdateType;
import im.zego.zegoexpress.entity.ZegoCanvas;
import im.zego.zegoexpress.entity.ZegoEngineProfile;
import im.zego.zegoexpress.entity.ZegoRoomConfig;
import im.zego.zegoexpress.entity.ZegoStream;
import im.zego.zegoexpress.entity.ZegoUser;

public class MainActivity extends AppCompatActivity {

    ZegoExpressEngine engine;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Before starting a call, request the camera and recording permissions.
        requestPermission();

        // Set a listener for the call starting button.
        findViewById(R.id.startButton).setOnClickListener(new View.OnClickListener() {
            // Click to start a call.
            @Override
            public void onClick(View view) {
                // Create a ZegoExpressEngine instance.
                createEngine();
                // Listen for common events.
                setEventHandler();
                // Log in to a room.
                loginRoom();
                // Start the preview and stream publishing.
                startPublish();
            }
        });

        // Set a listener for the call stopping button.
        findViewById(R.id.stopButton).setOnClickListener(new View.OnClickListener() {
            // Click to stop a call.
            @Override
            public void onClick(View view) {
                engine.logoutRoom();
                ZegoExpressEngine.destroyEngine(new IZegoDestroyCompletionCallback() {
                    @Override
                    public void onDestroyCompletion() {
                        // Successfully destroyed.
                    }
                });

            }
        });
    }

    // Request the camera and recording permissions.
    private void requestPermission() {
        String[] permissionNeeded = {
                "android.permission.CAMERA",
                "android.permission.RECORD_AUDIO"};
        if (ContextCompat.checkSelfPermission(getApplicationContext(), "android.permission.CAMERA") != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(getApplicationContext(), "android.permission.RECORD_AUDIO") != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(permissionNeeded, 101);
        }
    }

    // Create a ZegoExpressEngine instance and listen for common events.
    void createEngine() {
        // Create an engine, use the general scenario, and set `eventHandler` to `self`.
        // If callback registration is not needed, `eventHandler` can be set to `null`, and the `setEventHandler:` method can be called to set the callback later on.
        ZegoEngineProfile profile = new ZegoEngineProfile();
        profile.appID = ;  // Register with the official website and obtain the data in the format similar to 1234567890L.
        profile.appSign = ; // Register with the official website and obtain a string of 64 characters in the format similar to "0123456789012345678901234567890123456789012345678901234567890123".
        profile.scenario = ZegoScenario.DEFAULT;  // General scenario.
        profile.application = getApplication();
        engine = ZegoExpressEngine.createEngine(profile, null);
    }

    // Log in to a room.
    void loginRoom() {
        // The `ZegoUser` constructor `public ZegoUser(String userID)` will set `userName` to the value of `userID`. The `userID` and `userName` parameters cannot be set to `null`. Otherwise, logging in to a room will fail.
        ZegoUser user = new ZegoUser("user2");

        ZegoRoomConfig roomConfig = new ZegoRoomConfig();
        // If you use the AppSign for authentication, you do not need to set the `token` parameter. If you want to use the Token for authentication, which is securer, see [Guide for upgrading the authentication mode from using the AppSign to Token](https://docs.zegocloud.com/faq/token_upgrade).
        //roomConfig.token = ;
        // The `onRoomUserUpdate` callback can be received only when `ZegoRoomConfig` in which the `isUserStatusNotify` parameter is set to `true` is passed.
        roomConfig.isUserStatusNotify = true;

        // The value of `roomID` is generated locally and must be globally unique. Users must log in to the same room to call each other.
        String roomID = "room1";

        // Log in to a room.
        engine.loginRoom(roomID, user, roomConfig, (int error, JSONObject extendedData)->{
            // Room login result. This callback is sufficient if you only need to check the login result.
            if (error == 0) {
                // Login successful.
                Toast.makeText(this, "Login successful.", Toast.LENGTH_LONG).show();
            } else {
                // Login failed. For details, see [Error codes\|_blank](!Error_Code).
                Toast.makeText(this, "Login failed. For details, see [Error codes\|_blank](!Error_Code).", Toast.LENGTH_LONG).show();.
            }
        });
    }

    // Preview and publish streams.
    void startPublish() {
        // Set the local preview view and start the preview. The default view mode of the SDK is used and the entire view is filled through proportional scaling.
        ZegoCanvas previewCanvas = new ZegoCanvas(findViewById(R.id.preview));;
        engine.startPreview(previewCanvas);

        // Start to publish streams.
        // After calling the `loginRoom` method, call this method to publish streams.
        // Ensure that the value of `streamID` is globally unique under the same AppID. If different streams are published with the same `streamID`, the ones that are published after the first one will fail.
        engine.startPublishingStream("stream2");
    }

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
            public void onNetworkQuality(String userID, ZegoStreamQualityLevel, ZegoStreamQualityLevel zegoStreamQualityLevel1) {
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
}
```
</details>

