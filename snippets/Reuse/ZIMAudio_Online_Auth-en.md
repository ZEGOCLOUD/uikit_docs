<style>
table th:nth-of-type(1) {width: 14%;}
table th:nth-of-type(1) {width: 20%;}

table {width: 100%;}
</style>

# 在线鉴权

- - -

ZIM 语音组件的部分进阶功能需要鉴权文件 License 才能使用。ZEGO 建议您使用在线鉴权的方式实现获取和验证 License。

在线鉴权，是指客户端访问 ZIM 服务端，申请鉴权文件，进行网络验证的方式。通过在线鉴权，开发者可自行搭建的业务后台，请求网络相对稳定；且由于服务器的位置相对稳定，命中 DNS 缓存的几率也会提高，开发者可通过自己的客户端，自行设置鉴权能力，管理鉴权文件，灵活性较高。

在线鉴权只是获取鉴权文件 License，只有通过 SDK 鉴权校验的客户端，才可以使用 ZIMAudio SDK 的进阶功能功能。

<div class="mk-warning">

ZEGO 建议您在业务层上，定时拉取、更新在线鉴权的 License 数据，避免出现本地缓存 License 数据过期、导致校验不通过的问题。
</div>

## 鉴权实现原理

<img src="/Pics/ZIM/ZIMAudio/onlien_auth.png" width="98%">

1. 开发者服务端通过公共网关接口 URL，直接向 ZIM 服务端发送请求。ZIM 服务端返回鉴权文件 License 到开发者服务端。
2. 开发者服务端下发 License 文件到客户端。<strong>（由开发者自行实现此业务功能）</strong>
3. 客户端传入获取到的 License 文件，初始化 ZIMAudio SDK。
4. 启用 ZIMAudio 进阶功能，开始语音处理。

## 前提条件

开始实现鉴权之前，请在 [ZEGO 控制台\|_blank](https://console.zego.im) 创建项目，获取到了接入 ZEGO 服务所需的 AppID 和 ServerSecret，详情请参考 [控制台 - 项目管理\|_blank](#12107) 中的“项目信息”。

## 实现流程

### 1 向 ZEGO 服务端请求鉴权文件

开发者服务端通过公共网关接口，构造消息体，直接发送请求到 ZEGO 服务端，申请鉴权文件。消息体结构请参考服务端 API - 获取鉴权信息文档的 [接口原型\|_blank](!IM-CgiDescribeZIMAudioLicense#2)、[请求参数\|_blank](!IM-CgiDescribeZIMAudioLicense#3) 和 [请求示例\|_blank](!IM-CgiDescribeZIMAudioLicense#4)。

### 2 ZEGO 服务端返回鉴权文件 License

ZEGO 服务端返回的消息请参考服务端 API - 获取鉴权信息文档的 [响应参数\|_blank](!IM-CgiDescribeZIMAudioLicense#5) 和 [响应示例\|_blank](!IM-CgiDescribeZIMAudioLicense#6)。
