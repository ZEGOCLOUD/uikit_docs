<div class = 'mk-hint'>

若选择使用转推 CDN 功能，则无需执行本节所有步骤，请参考 [转推 CDN](!Publisher_Player_Advanced/RelayToCDN#4)。
</div>

### 1 开始直推 CDN

在推流前调用 [enablePublishDirectToCDN\|_blank](@enablePublishDirectToCDN) 接口将音视频流直接推往 CDN。

<div class = 'mk-warning'>

- 调用 [enablePublishDirectToCDN\|_blank](@enablePublishDirectToCDN) 接口后再调用 [addPublishCdnUrl\|_blank](@addPublishCdnUrl) 与 [removePublishCdnUrl\|_blank](@removePublishCdnUrl) 动态转推至 CDN 则不再生效，因为这两个接口是从 ZEGO 实时音视频云将音视频流转推或停止转推到 CDN，若将音视频流直接推往 CDN 则无法通过 ZEGO 实时音视频云将音视频流再动态转推至 CDN。
- 若调用 [enablePublishDirectToCDN\|_blank](@enablePublishDirectToCDN) 接口出现 1000038 错误码，可能存在的问题有：域名配置错误、媒体网络异常或媒体网络链接为空，请联系 ZEGO 技术支持。
</div> 






