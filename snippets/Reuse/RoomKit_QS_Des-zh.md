## 1. 功能介绍
RoomKit 提供的接入方案，为不同的业务方案提供了适配方式：
1. 如果您的产品已具备用户系统和房间系统（房间也可以是频道、小组、群等），可自行管理用户 ID与房间 ID。
2. 如果您的产品没有自己的房间系统，我们提供了教育云服务帮助您进行房间管理，集成方法请参考文档 [使用教育云 API 管理房间\|_blank](!RoomKit-Edu_Cloud_ServiceAPi/AdvFunc_EduCS)。

本篇文档基于上述的第一种场景介绍实现流程。

接入架构图：

<img src="/Pics/RoomKit/AllPlatform/roomkit_architecture.png" width=80%>

在这个架构中，您需要通过您自己的业务系统实现以下业务逻辑：

1. 搭建用户管理逻辑，并下发用户 ID 给客户端用于加入房间。
2. 搭建房间管理逻辑，并下发房间 ID 给客户端用户加入房间。
3. 鉴权 Token，建议由您的业务后台向 RoomKit 服务器请求 SDK Token 以保证鉴权数据安全。






