<div class = 'mk-hint'>

若选择使用直推 CDN 功能，则无需执行本节所有步骤，请参考 [直推 CDN](!Publisher_Player_Advanced/RelayToCDN#5)。

</div>

### 1 初始化和登录房间

请参考 [快速开始 - 实现流程\|_blank](!Integration/Solution_Implementation#CreateEngine) 的 “创建引擎”、“登录房间”。

### 2 开始推流

请参考 [快速开始 - 实现流程\|_blank](!Integration/Solution_Implementation#publishingStream) 的 “推流”。

### 3 开始转推

当推流成功后，调用 [addPublishCdnUrl\|_blank](@addPublishCdnUrl) 接口增加动态转推至 CDN 的 URL，即可将已经成功推向 ZEGO 实时云的音视频流动态向第三方 CDN 进行转推。支持的转推地址格式为 “rtmp”。

<div class = 'mk-hint'>

- 若开发者有转推到多家第三方 CDN 厂商的需求，可使用同一个流 ID 多次调用 [addPublishCdnUrl\|_blank](@addPublishCdnUrl) 接口（URL 需要不同）。
- 开发者转推到多家第三方 CDN 后，停止转推时也同样需要调用多次来停止所有转推的流。
- 开发者转推到多家第三方 CDN 后，可从 CDN 回调状态通知 [onPublisherRelayCDNStateUpdate\|_blank](@onPublisherRelayCDNStateUpdate) 的列表参数中获取到每条转推流的状态变更通知。
</div>












