调用 [setPublishStreamEncryptionKey\|_blank](@setPublishStreamEncryptionKey) 接口可设置推流的加密密钥，该接口在推流前后调用都可生效。加密密钥由开发者自行设定，长度仅支持 16/24/32 字节。开发者在拉加密后的流时，需提供与加密密钥一致的解密密钥，否则无法成功拉流。

<div class="mk-warning">

- 该接口仅当向 **ZEGO 实时音视频服务器** 或 **低延迟直播服务器** 推流时调用有效。
- 支持在推流中途调用 [setPublishStreamEncryptionKey\|_blank](@setPublishStreamEncryptionKey) 更新加密密钥，注意需要先更新拉流端解密密钥后，才能更新推流端加密密钥。
- 若先更新推流端加密密钥再更新拉流端解密密钥，拉流端可能出现部分帧无法解密的情况，进而导致拉流失败。若先更新拉流端解密密钥，则 SDK 会存储新旧两个解密密钥，可以做到无缝切换。
- 调用 [stopPublishingStream\|_blank](@stopPublishingStream) 或 [logoutRoom\|_blank](@logoutRoom) 都将会清空加密密钥。

</div>






