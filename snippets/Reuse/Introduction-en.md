## 1 Introduction

### 1.1 Introduction
In the actual business development process, the Collaborative Whiteboard (ZegoWhiteboardView SDK) is often used with File Sharing (ZegoDocsView SDK). Under normal circumstances, ZegoWhiteboardView will be overlaid on ZegoDocsView, and then through certain logical processing, the business requirements of drawing primitives on the file can be realized.

### 1.2 Concept Explanation

- ZegoExpress-Video SDK: ZEGO audio and Video interactive SDK, which can provide the ability of real-time signaling transmission required by Collaborative Whiteboard. Its core class is ZegoExpressEngine.
- ZegoWhiteboardView SDK: SDK that provides ZEGO Collaborative Whiteboard service.
- ZegoDocsView SDK: SDK that provides ZEGO File Sharing services.
- ZegoWhiteboardView: The ZegoWhiteboardView view used directly by the developer during the code implementation process.
- ZegoDocsView: The ZegoDocsView view used directly by developers in the code implementation process.
- File whiteboard: ZegoWhiteboardView is a view composed of overlaid on ZegoDocsView.
- Ordinary whiteboard: ZegoWhiteboardView view.

## 2 Prerequisites

- ZegoExpress-Video SDK\|_blank has been integrated in the project to achieve basic real-time audio and Video functions. For details, please refer to the [Quick Starts - Integration\|_blank](!ExpressVideoSDK-Integration/SDK_Integration) of real-time audio and Video .

- [ZegoWhiteboardView SDK\|_blank](!WhiteBoard-DownloadSDK/DownloadSDK) has been integrated in the project. For details, please refer to [Quick Starts - Integration\|_blank](!WhiteBoard-QuickStart/Integration).

- [ZegoDocsView SDK\|_blank](!DocsView-DownloadSDK/DownloadSDK) has been integrated in the project. For details, please refer to the [Quick Starts - Integration\|_blank](!DocsView-QuickStart/Integration) of File Sharing .

- You have created a project in the [ZEGO Console](https://console.zegocloud.com) and applied for a valid AppID and AppSign. For details, please refer to [Console - Project Management\|_blank](#1271).





