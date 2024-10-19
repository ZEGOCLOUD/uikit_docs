# 自定义菜单栏

## 自定义菜单栏按钮列表

您可以配置 Call Kit 菜单栏的按钮。要删除默认按钮或向底部菜单栏添加自定义按钮，您可以配置`bottomMenuBarConfig`：

- `buttons`：菜单栏中放置的内置按钮。默认情况下，所有按钮都会显示。如果您需要隐藏某些按钮，请修改此配置。

## 自定义菜单栏的隐藏行为

Call Kit 支持自动或手动隐藏菜单栏。您可以使用`ZegoBottomMenuBarConfig`中的以下两个配置来控制此功能：

- `hideByClick`：是否可以通过单击不响应区域来隐藏菜单栏，默认启用。
- `hideAutomatically`：是否在用户不活动 5 秒后自动隐藏菜单栏，默认启用。


代码参考如下：

<CodeGroup>
```js title="基本通话"
<template>
    <ZegoUIKitPrebuiltCall :appID="appID" :callID="callID" :appSign="appSign" :userID="userID" :userName="userName"
        :config="config">
    </ZegoUIKitPrebuiltCall>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import keyCenter from "@/pages/KeyCenter";
import ZegoUIKitPrebuiltCall from "@/uni_modules/zego-PrebuiltCall/components/ZegoUIKitPrebuiltCall.nvue"
import { ZegoUIKitPrebuiltCallConfig, ZegoMenuBarButtonName } from "@/uni_modules/zego-PrebuiltCall"

const appID = ref(keyCenter.getAppID());
const appSign = ref(keyCenter.getAppSign());
const userID = ref(keyCenter.getUserID());
const userName = ref(keyCenter.getUserID() + '_Nick');
const callID = ref(keyCenter.getCallID());

const config: ZegoUIKitPrebuiltCallConfig = {
    ...ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall(), // 预设配置
    bottomMenuBarConfig: {
        buttons: [
            ZegoMenuBarButtonName.HangUpButton, // 挂断按钮放在第一位
            ZegoMenuBarButtonName.ToggleCameraButton,
            ZegoMenuBarButtonName.ToggleMicrophoneButton,
        ],
        hideAutomatically: false,  // 不要自动隐藏
        hideByClick: true,
    },
    onHangUp: () => {
        // 挂断后返回上一页
        uni.navigateBack()
    },
};
</script>
```
</CodeGroup>