创建 [ZegoExpressEngine \|_blank](/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine) 引擎实例，将申请到的 AppID 传入参数 “appID”，将接入服务器地址传入参数 “server”。 

<div class="mk-hint">

“server” 为接入服务器地址，获取方式如下：
1. 登录 [ZEGO 控制台\|_blank](https://console-express.zego.im/)。
2. 在对应项目下单击“查看”。
3. 弹出基本信息后单击“环境配置”下的“查看”按钮。
4. 在弹窗中的“集成的SDK”中选择 “Express” 后，再选择 “Web” 平台便可获取对应的接入服务器地址。     
</div>

```javascript
// 初始化实例
const zg = new ZegoExpressEngine(appID, server);

```  


