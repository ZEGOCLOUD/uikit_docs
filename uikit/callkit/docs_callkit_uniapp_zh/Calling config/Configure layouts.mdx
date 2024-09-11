# 调整布局


音视频通话 UIKit 目前支持画中画（picture-in-picture）布局，每种布局都有自己的配置。
如需选择和配置布局，请在 `ZegoUIKitPrebuiltCallConfig` 中使用 `layout` 参数。

## 画中画布局（ZegoLayoutPictureInPictureConfig）

画中画布局支持的配置包括：

- `switchLargeOrSmallViewByClick`：是否允许用户点击小视图以在大视图和小视图之间切换。默认为 true（允许切换）。
- `smallViewPosition`：小音频视频视图的位置。
- `smallViewSize`：小音频视频视图的大小。

以下是参考代码：

<CodeGroup>
```js title="基础通话"
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
import { ZegoLayoutMode, ZegoViewPosition } from "@/uni_modules/zego-UIKitCore";

const appID = ref(keyCenter.getAppID());
const appSign = ref(keyCenter.getAppSign());
const userID = ref(keyCenter.getUserID());
const userName = ref(keyCenter.getUserID() + '_Nick');
const callID = ref(keyCenter.getCallID());

const config: ZegoUIKitPrebuiltCallConfig = {
    ...ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall(), // 预设配置
    layout: {
        mode: ZegoLayoutMode.PictureInPicture, // 画中画布局
        config: {
            smallViewPosition: ZegoViewPosition.TopLeft, // 小的视图显示在左上角
            switchLargeOrSmallViewByClick: true, // 点击小图会交换大小视图的画面
        }
    },
    onHangUp: () => {
        // 挂断后返回上一页
        uni.navigateBack()
    },
};

</script>

<style scoped>
</style>

```
</CodeGroup>


### 自定义用户关闭摄像头后的视图

如需自定义用户关闭摄像头后的视图，例如设置背景图片或背景颜色，您可以使用 `ZegoLayoutPictureInPictureConfig` 中的 `largeViewBackgroundImage`、`smallViewBackgroundImage`、`largeViewBackgroundColor`、`smallViewBackgroundColor`。

<Note title="说明">

这些配置仅在用户关闭摄像头时有效（因为在摄像头打开时，视频视图将自动显示）。
</Note>

以下是参考代码：

<CodeGroup>
```js title="基础通话"
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
import { ZegoLayoutMode, ZegoViewPosition } from "@/uni_modules/zego-UIKitCore";

const appID = ref(keyCenter.getAppID());
const appSign = ref(keyCenter.getAppSign());
const userID = ref(keyCenter.getUserID());
const userName = ref(keyCenter.getUserID() + '_Nick');
const callID = ref(keyCenter.getCallID());

const config: ZegoUIKitPrebuiltCallConfig = {
    ...ZegoUIKitPrebuiltCallConfig.oneOnOneVideoCall(), // 预设配置
    layout: {
        mode: ZegoLayoutMode.PictureInPicture, // 画中画布局
        config: {
            smallViewBackgroundColor: '#007fff', // 蓝色
            largeViewBackgroundColor: '#ff7b00', // 橙色
        }
    },
    onHangUp: () => {
        // 挂断后返回上一页
        uni.navigateBack()
    },
};

</script>

<style scoped>
</style>

```
</CodeGroup>

