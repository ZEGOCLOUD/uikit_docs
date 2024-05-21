如果进行本地服务端录制、云端录制、数据流录制时使用了 H.265 编解码功能，则会影响录制文件的生成，详情如下：

在对推流（H.265 视频编码码流）进行录制时，有可能因为 H.265 编码失败而触发编码降级，此时会收到 [onPublisherVideoEncoderChanged\|_blank](@onPublisherVideoEncoderChanged) 回调，表示视频编码格式发生变更。

该场景下，为了避免对录制文件造成损坏，SDK 内部会结束并保存当前的录制任务，并自动重启一个新的录制任务。新录制任务的录制文件路径会重新生成，避免覆盖原始录制文件。新文件的生成规则为给原始的录制文件名基础上加一个时间戳：

例如，开发者传入的原始录制文件路径为：/user/data/mediarecord.mp4，则新的录制文件为: /user/data/mediarecord_1626880634948.mp4，其中 1626880634948 为当前时间戳。


<div class="mk-hint">

如果开发者在录制期间收到过 [onPublisherVideoEncoderChanged\|_blank](@onPublisherVideoEncoderChanged) 回调，需要在录制结束后，收集录制文件存储路径下的其他文件。
</div>



