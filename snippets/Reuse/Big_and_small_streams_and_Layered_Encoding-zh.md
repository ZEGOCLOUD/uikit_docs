## 功能简介

当开发者的连麦或混流业务场景中，出现以下要求时，推荐使用 SDK 提供的 `视频分层编码` 或 `视频大小流编码` 功能：

- 需要不同终端显示不同质量的视频流。
- 需要在较差的网络环境中，保持连麦的通畅。
- 需要根据网络状态，自适应拉取视频流的质量。


`视频分层编码（H.264 SVC）`，是 H.264 AVC 的扩展，支持具有分层特性的码流。`视频大小流编码（H.264 DualStream）` 参考了 H.264 SVC 的理念，通过对视频码流分层，保障不同网络和设备性能的终端流畅的体验。

两种编码方式，都是将码流分为 “基本层” 和 “扩展层”，可以为不同网络状态、不同设备性能的用户提供更好的体验。基本层保证了最基本的视频质量，而扩展层则是对基本层的补充。对于网络较好的用户，可拉取扩展层获得更好的体验，对于网络状态较差的用户，只拉取基本层可以保证基本的视频质量。以下是两种功能的详细对比：

<table>
  <colgroup>
    <col width="12%">
    <col width="48%">
    <col width="40%">
  </colgroup>
<tbody><tr>
<th>-</th>
<th><b>视频分层编码（H.264 SVC）</b></th>
<th><b>视频大小流编码（H.264 DualStream）</b></th>
</tr>
<tr>
<td>实现逻辑</td>
<td>启动 1 个编码器分别编出不同的参数的码流，作为码流的基本层和扩展层。</td>
<td>启动 2 个编码器分别编出不同的参数的码流，作为码流的基本层和扩展层。</td>
</tr>
<tr>
<td>使用协议</td>
<td colspan="2">使用 ZEGO 的私有协议，拉流端只有从 ZEGO 服务器上，才能拉取到不同分层的视频流。</td>
</tr>
<tr>
<td>编码/解码</td>
<td>基本层和扩展层的编码过程不独立，可以独立解码。</td>
<td>基本层和扩展层的编码、解码过程都相互独立。</td>
</tr>
<tr>
<td>推流</td>
<td>选择编码格式为 “ZegoVideoCodecIDSvc”。</td>
<td><ol><li>选择编码格式为 “ZegoVideoCodecIDH264DualStream”。</li><li>（可选）通过 [setPublishDualStreamConfig] 接口分别配置基本层和扩展层的视频参数。</li></ol></td>
</tr>
<tr>
<td rowspan="2">拉流</td>
<td colspan="2">接口调用无差异，同一用户同一时间只能拉取视频流的一层。默认网络情况良好时，只拉扩展层；网络情况不好时，只拉取基础层。</td>
</tr>
<tr>
<td>拉取的基本层的分辨率为扩展层的 50%、码率为扩展层的 25%、帧率保持一致，无法自定义配置。</td>
<td>取决于推流端设置的基本层和扩展层的视频参数。</td>
</tr>
<tr>
<td>优点</td>
<td><ul><li>可以根据需要产生不同的码流或者提取出不同的码流，使用分层视频编码实现一次编码比用普通编码方式编码多次更高效。</li><li>应用更灵活。</li><li>网络适应性更强。</li></ul></td>
<td><ul><li>可以对扩展层和基本层的视频参数进行单独配置。</li><li>可以使用硬件编码，减少 CPU 性能负担。</li><li>可扩展性更好，未来可以支持多种编码标准。</li><li>通用性更好，主流软硬件编码器都支持。</li></ul></td>
</tr>
<tr>
<td>缺点</td>
<td><ul><li>压缩效率稍低：在同样的条件下，分层视频编码比普通编码方式的压缩效率低 20% 左右，即要达到和普通编码方式相同的视频质量，分层视频编码的码率比普通编码方式多 20%，分层数越多，效率下降越多。（目前 SDK 只支持 1 路基本层和 1 路扩展层）</li><li>编码效率低：分层视频编码在同样的条件下，比普通编码方式的编码计算复杂度高，所以编码效率相比普通编码方式约低 10%。</li><li>不支持硬件编码（支持硬件解码）：分层视频编码不支持硬件编码，对 CPU 的性能负担较大。</li><li>支持的编码器较少，目前只有 openH264 编码器支持。</li></ul></td>
<td>使用软件编码时，性能消耗略大于分层视频编码。</td>
</tr>
</tbody></table>


















