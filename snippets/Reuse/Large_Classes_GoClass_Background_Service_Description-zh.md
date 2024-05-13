## 1 概览

ZEGO 为开发者提供GO课堂服务源代码，开发者可以直接部署也能够根据自己的需求定制开发。现已支持教室，教师，学生状态管理以及状态变更的通知。

<div class="mk-warning">

ZEGO 不提供GO课堂后台运营服务，开放GO课堂服务源代码，开发者需要自已下载源码搭建后台系统。  
</div>


具体功能包括：

- 登录教室，会自动创建教室。
- 教室内成员变更通知。
- 中途离开教室。
- 结束教学，销毁教室。
- 共享状态控制。

可以通过修改 `app.conf` 配置文件，来配置每个教室可以容纳的人数以及同时连麦的人数。

通过直接部署后台服务，并配合 Express SDK、ZegoWhiteBoardView SDK、ZegoDocsView SDK 快速搭建在线互动教学场景。



## 2 服务简介

GO课堂服务是采用 Go 语言，基于开源的 HTTP 框架 [beego\|_blank](https://github.com/astaxie/beego) 开发出来的一款后端服务应用。目前版本仅依赖 `redis` 来存储数据，支持水平扩展，开发者可以根据需要进行扩容。


<div class="mk-warning">

* 目前所有接口都没有做鉴权，建议开发者自己增加鉴权模块。  
* 房间 ID 由用户输入，不存在的房间会自动创建，存在的房间逻辑允许即可直接进入。  
* 用户 ID 由客户端生成，由客户端保证唯一性，必须保证同一个教室内用户 ID 不发生冲突。  
</div>


## 3 服务部署

1. 部署 redis，GO课堂的教室、教师、学生的状态会存储于 redis。

2. 修改 `app.conf` 配置文件中如下配置项，配置好 redis，以及 AppId、AppSecret。

<div class="mk-hint">

请到 [ZEGO 控制台\|_blank](https://console-express.zego.im/account/login) 注册账号并申请 AppID 与 ServerSecret，申请流程请参考 [项目管理\|_blank](https://doc-zh.zego.im/zh/1265.html)。  
</div>

```
RedisAddr = "192.168.100.62:6379" # redis host
RedisPassword = ""	# redis password
RedisIndex = 8			# redis数据库

[SmallClass] # 小班课appid相关配置
AppId = 1234567890
AppSecret = "eb2280544902dc1b7ab1fde3985bd083" # 从 zego 控制台获取的 ServerSecret

[LargeClass] # 大班课appid相关配置
AppId = 1234567890
AppSecret = "eb2280544902dc1b7ab1fde3985bd083" # 从 zego 控制台获取的 ServerSecret
```

3. 进入源码目录，启动对应系统的可执行文件。

```
cd edu_room
./edu_room_linux # linux系统
./edu_room_mac # mac os
edu_room.exe # win
```
或者安装 Go 开发环境，然后执行如下命令：

```go
cd edu_room;go run main.go
```










