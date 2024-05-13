#### 回调结果

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| code   | Number | 返回码，具体请参见 <a target="_blank" href="15070#18">错误码</a>，如查询不到可联系 ZEGO 技术支持。 |
| message   | String | 操作结果描述。 |
| request_id   | String | 请求 ID。 |
| data   | Object | 响应数据。 |
| └ is_accompany   | Int | <p>是否为伴奏。</p><ul><li>0：歌曲</li><li>1：伴奏</li></ul> |
| └ song_name   | String | 歌曲名。 |
| └ singer_name | String | 歌手名。 |
| └ song_id   | String | 歌曲 ID。 |
| └ duration    | Int    | 歌曲时长，单位：毫秒。      |
| └ token_ttl | Int | share_token 有效时长，默认值为 3600000 毫秒（1 小时）。 |
| └ resources_size | Int | 歌曲资源数，resources 中资源个数。 |
| └ resources | Object | 歌曲资源信息。 |
| &nbsp;&nbsp;└ resource_id   | String | 歌曲资源 ID。 |
| &nbsp;&nbsp;└ size | Int | 歌曲资源大小，单位：字节。 |
| &nbsp;&nbsp;└ quality   | String | <p>歌曲音质。</p><ul><li>nomal：标准</li><li>hq：高清</li><li>sq：无损</li></ul> |


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
    "token_ttl": 0,
    "resources_size": 1,
    "resources": [
      {
        "resource_id": "string",
        "size": 0,
        "quality": "string",
        "share_token": "string"
      }
    ]
  }
}
