##### 回调结果

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| code   | Number | 返回码，具体请参见 <a target="_blank" href="15070#18">错误码</a>，如查询不到可联系 ZEGO 技术支持。 |
| message   | String | 操作结果描述。 |
| request_id   | String | 请求 ID。 |
| data   | Object | 响应数据。 |
| └ is_clip| Int | <p>是否为高潮片段。</p><ul><li>0：否</li><li>1：是</li></ul> |
| └ is_accompany| Int | <p>是否为伴奏。</p><ul><li>0：歌曲</li><li>1：伴奏</li></ul> |
| └ song_id | String | 歌曲 ID。 |
| └ krc_token   | String | 获取逐字歌词所需的 krc_token。 |
| └ krc_token_ttl   | Int | 逐字歌词 krc_token 的有效期，默认值为 43200000 毫秒（12 小时）。 |
| └ token_ttl   | Int | share_token 有效时长，默认值为 3600000 毫秒（1 小时）。该参数为旧版参数，与 share_token_ttl 新版参数含义相同，为了兼容早期接入客户使用。 |
| └ share_token_ttl   | Int | share_token 有效时长，默认值为 3600000 毫秒（1 小时）。该参数为新版参数，与 token_ttl 旧版参数含义相同，新接入客户主要使用该参数。|
| └ segment_begin| Int | 高潮片段相对于原曲时长的开始时间戳，单位：毫秒。 |
| └ segment_end| Int | 高潮片段相对于原曲时长的结束时间戳，单位：毫秒。 |
| └ prelude_duration| Int | 高潮片段的前奏时间，单位：毫秒。 |
| └ resources_size | Int | 歌曲资源数，resources 中资源个数。 |
| └ resources | Object | 歌曲资源信息。 |
| &nbsp;&nbsp;└ resource_id   | String | 歌曲资源 ID。 |
| &nbsp;&nbsp;└ size | Int | 歌曲资源大小，单位：字节。 |
| &nbsp;&nbsp;└ quality   | String | <p>歌曲音质。</p><ul><li>nomal：标准</li><li>hq：高清</li><li>sq：无损</li></ul> |
| &nbsp;&nbsp;└ share_token   | String | 旧版参数。 |

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
            "share_token":"7878787SDASDASDASDASD.SADSDASDASDASDSADSASDASDASDASD.V-sT427morLeej5sYUXgQzEgNjQ-YAoShYHGy5dGFKI"
        }
    ]
}
}
```
