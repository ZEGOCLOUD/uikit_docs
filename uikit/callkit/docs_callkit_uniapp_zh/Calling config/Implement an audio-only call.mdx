# 实现纯语音互动

- - -


在开始通话时，音视频通话 UIKit 默认打开摄像头和麦克风，并将扬声器作为音频输出设备。

如需更改此默认配置，例如在开始通话时关闭摄像头，或者不使用扬声器（如果不使用扬声器，则将使用系统的默认音频输出设备，如听筒、耳机、蓝牙等），您可以修改以下配置：

- `turnOnCameraWhenJoining`：通话开始时是否打开摄像头。true：打开（默认）。false：关闭。
- `turnOnMicrophoneWhenJoining`：通话开始时是否打开麦克风。true：打开（默认）。false：关闭。
- `useSpeakerWhenJoining`：通话开始时是否使用扬声器。true：使用扬声器（默认）。false：使用系统的默认音频输出设备，如听筒、耳机、蓝牙等。

您也可以使用预设配置 `ZegoUIKitPrebuiltCallConfig.oneOnOneVoiceCall()` 来快速创建一个基本的纯语音通话配置。

以下是参考代码：

<CodeGroup>
```js title="基本通话"
// Callkit.nvue
<template>
    <ZegoUIKitPrebuiltCall :appID="appID" :callID="callID" :appSign="appSign" :userID="userID" :userName="userName"
        :config="config">
    </ZegoUIKitPrebuiltCall>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import keyCenter from "@/pages/KeyCenter";
import ZegoUIKitPrebuiltCall from "@/uni_modules/zego-PrebuiltCall/components/ZegoUIKitPrebuiltCall.nvue"
import { ZegoUIKitPrebuiltCallConfig } from "@/uni_modules/zego-PrebuiltCall"

const appID = ref(keyCenter.getAppID());
const appSign = ref(keyCenter.getAppSign());
const userID = ref(keyCenter.getUserID());
const userName = ref(keyCenter.getUserID() + '_Nick');
const callID = ref(keyCenter.getCallID());

const config: ZegoUIKitPrebuiltCallConfig = {
    ...ZegoUIKitPrebuiltCallConfig.oneOnOneVoiceCall(), // 预设配置
    turnOnCameraWhenJoining: false,
    turnOnMicrophoneWhenJoining: true,
    useSpeakerWhenJoining: true, 
    onHangUp: () => {
        // 挂断后返回上一页
        uni.navigateBack()
    },
};

</script>

```
</CodeGroup>