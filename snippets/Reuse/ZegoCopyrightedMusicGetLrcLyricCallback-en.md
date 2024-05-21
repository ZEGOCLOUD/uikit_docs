#### 回调结果

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| lines | Object | 逐行歌词。 |
| └ begin_time | Int | 当前行歌词开始时间，单位：毫秒。 |
| └ end_time | Int | 当前行歌词结束时间，单位：毫秒。 |
| └ content | String | 歌词内容。 |
| lrc_format | String | lrc 格式歌词。 |

其他字段为歌词源文件中的 title 字段，不同的歌词文件中不一定存在，一般可以选择忽略。具体如下：

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| al | String | 唱片集。 |
| ar | String | 歌手。 |
| au | String | 歌词作者。 |
| by | String | 歌词文件创建者。 |
| offset | Int | 以毫秒为单位、加快（+）或延后（-）歌词播放。 |
| lenght | Int | 歌曲时长，单位：毫秒。 |
| re    | String    | 创建歌词文件的播放器或编辑器。 |
| ti | String | 歌词标题。 |
| ve | String | 程序版本。 |

**回调示例**

```json
{
  "lines": [
    {
      "begin_time": 0,
      "end_time": 0,
      "content": ""
    }
  ],
  "lrc_format": "string",
  "al": "",
  "ar": "",
  "au": "",
  "by": "",
  "offset": 0,
  "lenght": 0,
  "re": "",
  "ti": "",
  "ve": ""
}
```
