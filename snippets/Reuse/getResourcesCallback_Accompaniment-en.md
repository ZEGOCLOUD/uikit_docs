##### 回调结果

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| code   | Number | 返回码，具体请参见 <a target="_blank" href="15070#18">错误码</a>，如查询不到可联系 ZEGO 技术支持。 |
| message   | String | 操作结果描述。 |
| request_id   | String | 请求 ID。 |
| data   | Object | 响应数据。 |
| └ has_original   | Int | <p>伴奏是否有原唱。</p><ul><li>0：没有</li><li>1：有</li></ul> |
| └ is_accompany   | Int | <p>是否为伴奏。</p><ul><li>0：歌曲</li><li>1：伴奏</li></ul> |
| └ song_id | String | 歌曲 ID。 |
| └ krc_token   | String | 获取逐字歌词所需的 krc_token。 |
| └ krc_token_ttl   | Int | 逐字歌词 krc_token 的有效期，默认值为 43200000 毫秒（12 小时）。 |
| └ resources_size | Int | 歌曲资源数，resources 中资源个数。 |
| └ resources | Object | 歌曲资源信息。 |
| &nbsp;&nbsp;└ resource_id   | String | 标准音质歌曲资源 ID。 |
| &nbsp;&nbsp;└ size | Int | 标准音质歌曲资源大小，单位：字节。 |
| &nbsp;&nbsp;└ quality   | String | <p>歌曲音质。</p><ul><li>nomal：标准</li><li>hq：高清</li><li>sq：无损</li></ul> |


**回调示例**

```json
{
  "code": 0,
  "message": "string",
  "request_id": "string",
  "data": {
    "has_original": 1,
    "is_accompany": 1,
    "song_id": "string",
    "krc_token":"string",
    "krc_token_ttl":0,
    "resources_size": 1,
    "resources": [
      {
        "resource_id": "string",
        "size": 0,
        "quality": "string"
      }
    ]
  }
}
```
