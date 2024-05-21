调用 [setPlayStreamDecryptionKey\|_blank](@setPlayStreamDecryptionKey) 接口可设置拉流解密密钥，该接口在拉流前后调用都可生效。

<div class="mk-warning">

- 该接口仅当从 **ZEGO 实时音视频服务器** 或 **低延迟直播服务器** 拉流时调用有效。
- 支持在拉流中途调用 [setPlayStreamDecryptionKey\|_blank](@setPlayStreamDecryptionKey) 更新解密密钥，注意需要先更新拉流端解密密钥后，才能更新推流端加密密钥。
- 调用 [stopPlayingStream\|_blank](@stopPlayingStream) 或 [logoutRoom\|_blank](@logoutRoom) 都将会清空解密密钥。

</div>





