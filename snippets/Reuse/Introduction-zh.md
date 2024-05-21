## 1 导读

### 1.1 简介
在实际业务开发过程中，互动白板 (ZegoWhiteboardView SDK）经常与文件共享 (ZegoDocsView SDK) 搭配使用。通常情况下，ZegoWhiteboardView 会覆盖在 ZegoDocsView 之上，然后通过一定的逻辑处理，就能实现在文件上绘制图元的业务需求。

### 1.2 概念解释

- ZegoExpress-Video SDK：ZEGO 音视频互动 SDK，能够提供互动白板所需的实时信令传输的能力，其核心类为 ZegoExpressEngine。
- ZegoWhiteboardView SDK：提供 ZEGO 互动白板服务的 SDK。
- ZegoDocsView SDK：提供 ZEGO 文件共享服务 的 SDK。
- ZegoWhiteboardView：在代码实现过程中，开发者直接使用的 ZegoWhiteboardView 视图。
- ZegoDocsView：在代码实现过程中，开发者直接使用的 ZegoDocsView 视图。
- 文件白板：ZegoWhiteboardView 覆盖在 ZegoDocsView 之上组成的视图。
- 普通白板：ZegoWhiteboardView 视图。

## 2 前提条件

- 已在项目中集成 ZegoExpress-Video SDK，实现基本的实时音视频功能，详情请参考实时音视频的 [快速开始 - 集成\|_blank](!ExpressVideoSDK-Integration/SDK_Integration)。

- 已在项目中集成 [ZegoWhiteboardView SDK\|_blank](!WhiteBoard-DownloadSDK/DownloadSDK)，详情请参考 [快速开始 - 集成\|_blank](!WhiteBoard-QuickStart/Integration)。

- 已在项目中集成 [ZegoDocsView SDK\|_blank](!DocsView-DownloadSDK/DownloadSDK)，详情请参考文件共享的 [快速开始 - 集成\|_blank](!DocsView-QuickStart/Integration)。

- 已在 [ZEGO 控制台](https://console.zego.im/) 创建项目，并申请有效的 AppID 和 AppSign，详情请参考 [控制台 - 项目管理\|_blank](https://doc-zh.zego.im/zh/1265.html)。


<div class="mk-warning">

`2.3.0 或以上` 版本的 SDK 支持 Token 鉴权，若您需要升级鉴权方式，可参考 [如何从 AppSign 鉴权升级为 Token 鉴权\|_blank](http://doc-zh.zego.im/faq/token_upgrade?product=ExpressVideo)。
</div>













