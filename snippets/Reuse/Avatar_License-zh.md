## 概览

本文将介绍如何获取鉴权文件、以及在线鉴权的实现方案。

### 鉴权文件

鉴权文件是软件使用权的凭证，包含以下特征：

- 包名（iOS：bundleID；Android：applicationID）
- 授权的时间
- 授权的平台
- 授权的 SDK 版本号
- 授权的功能特性


### 在线鉴权

在线鉴权，是指用户的客户端访问 ZegoAvatar 服务端，申请鉴权文件，进行网络验证的方式。通过在线鉴权，开发者可以快速且安全地通过网络验证，与离线鉴权相比，更可控更高效。

在线鉴权只是获取鉴权文件 License，只有通过 SDK 鉴权校验的客户端，才可以使用 Zego Avatar SDK 功能。

<div class="mk-warning">

- ZEGO 建议您在业务层上，定时拉取、更新在线鉴权的 License 数据，避免出现本地缓存 License 数据过期、导致校验不通过的问题。
- 开发者可以参考示例代码的 ZegoLicenseHelper 中的 `getLicense` 接口，该接口已经实现了发起网络请求，获取鉴权 License 字符串的功能，可以直接使用。
</div>

## 前提条件

实现“在线鉴权”之前：

1. 请先在 [ZEGO 控制台\|_blank](https://console.zego.im/) 创建项目，并申请有效的 AppId 并申请有效的 AppId，详情请参考 [控制台 - 项目管理\|_blank](#12107) 中的“项目信息”。

2. 请联系 ZEGO 商务人员，提供申请到的 AppId，获取鉴权需要使用的 AppSign，并开通相关权限。













