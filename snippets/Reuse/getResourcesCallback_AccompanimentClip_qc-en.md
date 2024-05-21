##### 回调结果

<table class="collapsible-table" >
  <colgroup>
    <col width="20%">
    <col width="20%">
    <col width="60%">
  </colgroup>
<tbody><tr data-row-level="1">
<td>参数</td>
<td>类型</td>
<td>描述</td>
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
<td>song_id</td>
<td>String</td>
<td>歌曲 ID。</td>
</tr>
<tr data-row-level="5-5">
<td>krc_token</td>
<td>String</td>
<td>获取逐字歌词所需的 krc_token。</td>
</tr>
<tr data-row-level="5-6">
<td>krc_token_ttl</td>
<td>Int</td>
<td>逐字歌词 krc_token 的有效期，默认值为 43200000 毫秒（12 小时）。</td>
</tr>
<tr data-row-level="5-7">
<td>token_ttl</td>
<td>Int</td>
<td>share_token 有效时长，默认值为 3600000 毫秒（1 小时）。该参数为旧版参数，与 share_token_ttl 新版参数含义相同，为了兼容早期接入客户使用。</td>
</tr>
<tr data-row-level="5-8">
<td>share_token_ttl</td>
<td>Int</td>
<td>share_token 有效时长，默认值为 3600000 毫秒（1 小时）。该参数为新版参数，与 token_ttl 旧版参数含义相同，新接入客户主要使用该参数。</td>
</tr>
<tr data-row-level="5-9">
<td>segment_begin</td>
<td>Int</td>
<td>高潮片段相对于原曲时长的开始时间戳，单位：毫秒。</td>
</tr>
<tr data-row-level="5-10">
<td>segment_end</td>
<td>Int</td>
<td>高潮片段相对于原曲时长的结束时间戳，单位：毫秒。</td>
</tr>
<tr data-row-level="5-11" data-row-child="true">
<td>other_segments</td>
<td>Array</td>
<td>抢唱片段的时间分片信息。</td>
</tr>
<tr data-row-level="5-11-1">
<td>begin</td>
<td>Int</td>
<td>抢唱片段相对于高潮片段时长的开始时间戳，播放时可以直接seek到此位置。单位：毫秒。</td>
</tr>
<tr data-row-level="5-11-2">
<td>end</td>
<td>Int</td>
<td>抢唱片段相对于高潮片段时长的结束时间戳，单位：毫秒。</td>
</tr>
<tr data-row-level="5-12">
<td>prelude_duration</td>
<td>Int</td>
<td>高潮片段的前奏时间，单位：毫秒。</td>
</tr>
<tr data-row-level="5-13">
<td>resources_size</td>
<td>Int</td>
<td>歌曲资源数，resources 中资源个数。</td>
</tr>
<tr data-row-level="5-14" data-row-child="true">
<td>resources</td>
<td>Object</td>
<td>歌曲资源信息。</td>
</tr>
<tr data-row-level="5-14-1">
<td>resource_id</td>
<td>String</td>
<td>歌曲资源 ID。</td>
</tr>
<tr data-row-level="5-14-2">
<td>size</td>
<td>Int</td>
<td>歌曲资源大小，单位：字节。</td>
</tr>
<tr data-row-level="5-14-3">
<td>quality</td>
<td>String</td>
<td><p>歌曲音质。</p><ul><li>normal：标准</li><li>hq：高清</li><li>sq：无损</li></ul></td>
</tr>
<tr data-row-level="5-14-4">
<td>share_token</td>
<td>String</td>
<td>旧版参数。</td>
</tr>
<tr data-row-level="5-14-5">
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
    "song_id":"300785364",
    "krc_token":"UQIFmNmY3NbjZggIwNzFl",
    "krc_token_ttl":43200000,
    "token_ttl":3600000,
    "share_token_ttl":3600000,
    "segment_begin":133157,
    "segment_end":235337,
    "other_segments":[
        {
            "begin":59776,
            "end":73000
        }
    ],
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
