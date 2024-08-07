# 向离线应用发送呼叫邀请


## 功能介绍

当原生应用在后台运行或退出时，Call Kit 允许您的 Web 应用向原生应用发送离线呼叫邀请。目前，它仅支持 Web 应用向原生应用发送呼叫邀请。

## 启用离线呼叫邀请

要向离线应用发送呼叫邀请，您首先需要运行以下代码以启用离线呼叫邀请功能：

```js
const zp = ZegoUIKitPrebuilt.create(token);
zp.addPlugins({ ZIM });

zp.setCallInvitationConfig({
    enableNotifyWhenAppRunningInBackgroundOrQuit: true,
})
```

## 自定义通知对话框

当您的 Web 应用向离线应用发送呼叫邀请时，您可以自定义通知对话框的界面。请参考以下内容：

```typescript
sendCallInvitation(params: {
    callees: ZegoUser[];
    callType: ZegoInvitationType;
    timeout?: number;
    data?: string;
    notificationConfig?: ZegoSignalingPluginNotificationConfig;
})

interface ZegoSignalingPluginNotificationConfig {
  resourcesID?: string;
  title?: string;
  message?: string;
}


//for example 
zp.sendCallInvitation({
    callees: [{userID:'123',userName:'U_123'}],
    callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
    notificationConfig?: {
        resourcesID:'zegouikit_call',
        title:'呼叫邀请', 
        message:'收到视频通话...'
    }
})
```

#### ZegoSignalingPluginNotificationConfig 参数

| 参数        | 类型   | 是否必填 | 描述                                                                                                                                                                                               |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resourcesID | string | 否       | `resourcesID` 可用于指定离线呼叫邀请的铃声，必须与&nbsp; [ZEGO 控制台](https://console.zego.im) 中已设置的 resourceID 相同。仅当 `enableNotifyWhenAppRunningInBackgroundOrQuit` 为 true 时才生效。 |
| title       | string | 否       | 离线呼叫的标题。默认使用发送者的用户名。                                                                                                                                                           |
| message     | string | 否       | 离线呼叫通知的内容。                                                                                                                                                                               |

