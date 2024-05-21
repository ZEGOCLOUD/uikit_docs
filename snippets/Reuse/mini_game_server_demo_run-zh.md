## 跑通服务端示例源码（Node.js）

<div class="mk-warning">

为保障数据安全，本服务端示例源码不得用于上线。对于擅自将本服务端源码用于生产环境而造成的一切风险和损失，ZEGO 不负任何责任。
</div>

### 准备环境

在运行客户端示例源码（Node.js）前，请确保开发环境满足以下要求：

- 已安装 Node.js。
- Windows 或 macOS 计算机已连接到 Internet。

### 前提条件

- 已在 [ZEGO 控制台\|_blank](https://console.zego.im) 创建项目，并获取该项目的 AppID 和 ServerSecret，详情请参考 [控制台 - 项目信息\|_blank](https://doc-zh.zego.im/article/12107)。
- 已联系 ZEGO 商务人员开通小游戏服务。
- 已获取服务端示例源码，详情请参考 [下载\|_blank](!ZegoMiniGameEngine-download)。

### 示例源码目录结构

下面目录结构为服务端示例源码的文件结构，本节所涉及的文件路径均为相对于此目录的路径。

```
ZegoMiniGameServerDemo
├── index.js        # 主文件
├── package.json    # 配置文件
└── utils
    ├── config.js    # 填写在 ZEGO 控制台创建的项目的 AppID 和 ServerSecret
    ├── gameToken.js # 服务端生成 Token 
    └── getToken04.js 
```

### 运行示例源码

1. 解压服务端源码压缩包 “ZegoMiniGameServerDemo.zip”，获取 “ZegoMiniGameServerDemo”文件夹。

2. 修改 “ZegoMiniGameServerDemo/utils/config.js” 文件，在下图红框标识区域填写 “AppID”。

    <img src="/Pics/MiniGames/server_demo_appid.jpeg" width=80%>

3. 在同文件中，填写 “ServerSecret“。

    <img src="/Pics/MiniGames/ServerSecret.jpeg" width=80%>
    
    <div class="mk-warning">

    此文件提供的后台地址（host）`https://mini-game-api.zego.im`，为小游戏服务端的接入地址，不可替换。
    </div>

4. 进入 “ZegoMiniGameServerDemo”文件夹，在终端执行以下代码，以启动小游戏服务端。

    ```
    npm i # 安装依赖
    node index.js
    ```

5. 执行代码后，即可获得服务端地址，可用作 <a href="#host_ip">客户端示例源码的后台服务地址</a>。

    服务端示例源码运行后结果如图所示：

    <img src="/Pics/MiniGames/server_sourcecodes_address.jpeg" width=80%>































