#### 回调结果

<table class="collapsible-table" >
  <colgroup>
    <col width="20%">
    <col width="20%">
    <col width="60%">
  </colgroup>
<tbody><tr data-row-level="1">
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr data-row-level="2">
<td>code</td>
<td>Number</td>
<td>返回码，具体请参见 <a target="_blank" href="15070#18">错误码</a>，如查询不到可联系 ZEGO 技术支持。</td>
</tr>
<tr data-row-level="3">
<td>message</td>
<td>String</td>
<td>操作结果描述。</td>
</tr>
<tr data-row-level="4">
<td>request_id</td>
<td>String</td>
<td>请求 ID。</td>
</tr>
<tr data-row-level="5" data-row-child="true">
<td>data</td>
<td>Object</td>
<td>响应数据。</td>
</tr>
<tr data-row-level="5-1">
<td>is_clip</td>
<td>Int</td>
<td><p>是否为高潮片段。</p><ul><li>0：否</li><li>1：是</li></ul></td>
</tr>
<tr data-row-level="5-2">
<td>is_accompany</td>
<td>Int</td>
<td><p>是否为伴奏。</p><ul><li>0：歌曲</li><li>1：伴奏</li></ul></td>
</tr>
<tr data-row-level="5-3">
<td>krc_token</td>
<td>String</td>
<td>获取逐字歌词所需的 krc_token。</td>
</tr>
<tr data-row-level="5-4">
<td>krc_token_ttl</td>
<td>Int</td>
<td>逐字歌词 krc_token 的有效期，默认值为 43200000 毫秒（12 小时）。</td>
</tr>
<tr data-row-level="5-5">
<td>song_id</td>
<td>String</td>
<td>歌曲 ID。</td>
</tr>
<tr data-row-level="5-6">
<td>share_token_ttl</td>
<td>Int</td>
<td>share_token 有效时长，默认值为 3600000 毫秒（1 小时）。该参数为新版参数，与 token_ttl 旧版参数含义相同，新接入用户主要使用该参数。</td>
</tr>
<tr data-row-level="5-7">
<td>token_ttl</td>
<td>Int</td>
<td>share_token 有效时长，默认值为 3600000 毫秒（1 小时）。该参数为旧版参数，与 share_token_ttl 新版参数含义相同，为了兼容早期接入用户使用。</td>
</tr>
<tr data-row-level="5-8">
<td>segment_begin</td>
<td>Int</td>
<td>高潮片段相对于原曲时长的开始时间戳，单位：毫秒。</td>
</tr>
<tr data-row-level="5-9">
<td>segment_end</td>
<td>Int</td>
<td>高潮片段相对于原曲时长的结束时间戳，单位：毫秒。</td>
</tr>
<tr data-row-level="5-10">
<td>prelude_duration</td>
<td>Int</td>
<td>高潮片段的前奏时间，单位：毫秒。</td>
</tr>
<tr data-row-level="5-11">
<td>resources_size</td>
<td>Int</td>
<td>歌曲资源数，resources 中资源个数。</td>
</tr>
<tr data-row-level="5-12" data-row-child="true">
<td>resources</td>
<td>Object</td>
<td>歌曲资源信息。</td>
</tr>
<tr data-row-level="5-12-1">
<td>resource_id</td>
<td>String</td>
<td>歌曲资源 ID。</td>
</tr>
<tr data-row-level="5-12-2">
<td>size</td>
<td>Int</td>
<td>歌曲资源大小，单位：字节。</td>
</tr>
<tr data-row-level="5-12-3">
<td>quality</td>
<td>String</td>
<td>歌曲音质，当前仅包含 <b>normal（标准）音质</b>的长分片高潮片段资源。</td>
</tr>
<tr data-row-level="5-12-4">
<td>share_token</td>
<td>String</td>
<td>旧版参数。</td>
</tr>
<tr data-row-level="5-12-5">
<td>resource_ttl</td>
<td>Int</td>
<td>该资源的剩余有效时长，单位：毫秒。</td>
</tr>
</tbody></table>

**回调示例**

```json
{
  "code": 0,
  "message": "string",
  "request_id": "string",
  "data": {
    "is_clip":1,
    "is_accompany":0,
    "krc_token":"UQIFmNmY3NbjZggIwNzFl",
    "krc_token_ttl":43200000,
    "song_id":"300785364",
    "share_token_ttl":3600000,
    "token_ttl":3600000,
    "segment_begin":133157,
    "segment_end":235337,
    "prelude_duration":5000,
    "resources_size":1,
    "resources":[
        {
            "resource_id":"z_301215364_3",
            "size":0,
            "quality":"normal",
            "share_token":"7878787SDASDASDASDASD.SADSDASDASDASDSADSASDASDASDASD.V-sT427morLeej5sYUXgQzEgNjQ-YAoShYHGy5dGFKI",
            "resource_ttl": 300000
        }
    ]
  }
}
```



















