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
<td>is_accompany</td>
<td>Int</td>
<td><p>是否为伴奏。</p><ul><li>0：歌曲</li><li>1：伴奏</li></ul></td>
</tr>
<tr data-row-level="5-2">
<td>song_name</td>
<td>String</td>
<td>歌曲名。</td>
</tr>
<tr data-row-level="5-3">
<td>singer_name</td>
<td>String</td>
<td>歌手名。</td>
</tr>
<tr data-row-level="5-4">
<td>song_id</td>
<td>String</td>
<td>歌曲 ID。</td>
</tr>
<tr data-row-level="5-5">
<td>duration</td>
<td>Int</td>
<td>歌曲时长，单位：毫秒。</td>
</tr>
<tr data-row-level="5-6">
<td>resources_size</td>
<td>Int</td>
<td>歌曲资源数，resources 中资源个数。</td>
</tr>
<tr data-row-level="5-7" data-row-child="true">
<td>resources</td>
<td>Object</td>
<td>歌曲资源信息。</td>
</tr>
<tr data-row-level="5-7-1">
<td>resource_id</td>
<td>String</td>
<td>歌曲资源 ID。</td>
</tr>
<tr data-row-level="5-7-2">
<td>size</td>
<td>Int</td>
<td>歌曲资源大小，单位：字节。</td>
</tr>
<tr data-row-level="5-7-3">
<td>quality</td>
<td>String</td>
<td><p>歌曲音质。</p><ul><li>normal：标准，<b>支持该音质资源的版权方 vendorID 取值为 0（默认）、1、2、4。</b></li><li>hq：高清，<b>支持该音质资源的版权方 vendorID 取值为 0（默认）、1、2。</b></li><li>sq：无损，<b>支持该音质资源的版权方 vendorID 取值为 0（默认）、1。</b></li></ul></td>
</tr>
<tr data-row-level="5-7-4">
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
    "is_accompany": 0,
    "song_name": "string",
    "singer_name": "string",
    "song_id": "string",
    "duration": 0,
    "resources_size": 1,
    "resources": [
      {
        "resource_id": "string",
        "size": 0,
        "quality": "string",
        "resource_ttl": 300000
      }
    ]
  }
}
```















