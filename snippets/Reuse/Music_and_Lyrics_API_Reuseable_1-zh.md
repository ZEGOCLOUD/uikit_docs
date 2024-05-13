<table>
  <colgroup>
    <col width="23%">
    <col width="15%">
    <col width="45%">
    <col width="17%">
  </colgroup>
<tbody><tr>
<th>接口</th>
<th>方法名</th>
<th>详情描述</th>
<th>支持的 vendorID 取值</th>
</tr>
<tr>
<td><a href="#1_1">获取包含人声的歌曲资源</a></td>
<td>requestResource</td>
<td>获取 songID 对应包含人声的歌曲的资源，包括歌曲时长、歌手名、resource_id，我们也称为点歌。</td>
<td>0、1、2、4</td>
</tr>
<tr>
<td><a href="#1_2">获取歌曲伴奏资源</a></td>
<td>requestResource</td>
<td>获取 songID 对应歌曲的<b>伴奏资源</b>，包括歌曲资源个数、resource_id、krc_token 等。</td>
<td>0、1、2、4</td>
</tr>
<tr>
<td><a href="#1_3">获取长分片高潮片段资源</a></td>
<td>requestResource</td>
<td>获取 songID 对应歌曲伴奏的<b>高潮片段资源的长分片</b>，包括高潮片段的开始与结束时间、resource_id、krc_token 等。</td>
<td>0、1</td>
</tr>
<tr>
<td><a href="#1_4">获取短分片高潮片段资源</a></td>
<td>requestResource</td>
<td>获取 songID 对应歌曲伴奏的<b>高潮片段资源的短分片</b>，包括高潮片段短分片的开始与结束时间、抢唱片段的开始与结束时间、resource_id、krc_token 等。</td>
<td>0、1、2</td>
</tr>
<tr>
<td><a href="#1_5">获取其他用户分享的歌曲资源</a></td>
<td>getSharedResource</td>
<td>免费获取一次其他用户分享的歌曲资源。</td>
<td>0、1、2、4</td>
</tr>
<tr>
<td><a href="#2_1">获取逐行歌词</a></td>
<td>getLrcLyricWithVendorID</td>
<td>获取 songID 对应歌曲的逐行歌词。<br>逐行歌词指的是根据歌曲/伴奏/高潮片段播放进度，将匹配的歌词一行行的展示。</td>
<td>0、1、2、4</td>
</tr>
<tr>
<td><a href="#2_2">获取逐字歌词</a></td>
<td>getKrcLyricByToken</td>
<td>我们可以通过 requestResource、getSharedResource 接口获取到 krc_token，再调用 getKrcLyricByToken 接口获取到逐字歌词。<br>逐字歌词指的是在歌曲/伴奏/高潮片段播放时，先出现逐行歌词，然后对应播放节奏，将歌词的每个字进行高亮显示。</td>
<td>0、1、2、4</td>
</tr>
</tbody></table>


其中，[获取歌曲伴奏资源](!Songs_resources_and_lyrics_interface_description#1_2)、[获取长分片高潮片段资源](!Songs_resources_and_lyrics_interface_description#1_3)、[获取短分片高潮片段资源](!Songs_resources_and_lyrics_interface_description#1_4) 可获取的资源片段，区别如下：

<img src="/Pics/CopyrightedMusic/requestResourcesCallback_AccompanimentClip_requestResource_1.png" width="80%" />



















