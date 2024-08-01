# 自定义文本消息的 UI


## 功能概述

默认样式的文本消息 UI 展示可能无法满足日益多样化的用户场景需求，因此，ZEGO UIKit 提供了自定义文本消息UI 的功能，比如为文本消息展示不同的 UI 装饰、展示文本发送者的级别等功能，可以用于实现更多的直播业务玩法。

## 房间消息的附加属性

发送房间消息时，您可以将自定义内容附加到消息中，例如发送者的级别等业务信息。

```javascript
zp.joinRoom({
    //...
    addInRoomMessageAttributes: () => {
        // 返回需要发送的附加属性
       return { lv: "9" }
    },
})
```

## 自定义文本消息的显示

现有的文本消息列表默认仅显示消息正文内容，不显示附加内容。您可以通过以下配置来显示出附加内容：

1. 在 customMessageUI 中返回自定义元素。

   ```javascript
   zp.joinRoom({
      //...
      customMessageUI: (msg) => {
         // 您需要返回一个元素，我们将在消息列表中渲染这个元素。
         const wrapper = document.createElement('div');
         wrapper.classList.add('custom-message-wrapper');
         if (userID === msg.fromUser.userID) {
         wrapper.classList.add('send-message');
         }
         wrapper.innerHTML = `<div class="custom-message-header">
               ${
                  msg?.attrs
                     ? `<span class="level">LV.${msg?.attrs?.lv}</span>`
                     : ''
               }
               <span class="name">${msg.fromUser.userName}</span>
               <span class="sendTime">${new Date(
                  msg.sendTime
               ).toLocaleTimeString()}
               </span>
               </div>
               <p
               class="custom-message-content ${
                  msg.status === 'SENDING' && 'loading'
               } ${msg.status === 'FAILED' && 'error'}">${msg.message}</p>`;
         return wrapper;
      },
   })
   ```

2. 为您设置的自定义元素添加 CSS 样式。

   ```CSS
   /* 自定义消息样式 */
   .custom-message-wrapper {
   display: flex;
   flex-direction: column;
   }
   .custom-message-header {
   display: flex;
   align-items: center;
   font-size: 12px;
   font-weight: 400;
   line-height: 17px;
   margin-bottom: 4px;
   }
   .custom-message-header .level {
   background-color: coral;
   color: black;
   border-radius: 8px;
   padding: 2px 4px;
   margin-right: 10px;
   text-align: center;
   }
   .custom-message-header .name {
   max-width: 198px;
   color: #a4a4a4;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
   }
   .custom-message-header .sendTime {
   color: rgba(164, 164, 164, 0.6);
   margin: 0 10px;
   }

   .send-message {
   align-items: flex-end;
   }

   .send-message .custom-message-header {
   flex-direction: row-reverse;
   }

   .send-message .custom-message-content {
   background-color: #e1cbe7;
   }
   ```
