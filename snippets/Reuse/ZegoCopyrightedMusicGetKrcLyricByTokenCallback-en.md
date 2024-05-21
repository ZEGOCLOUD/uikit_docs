#### 回调结果

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| lines | Object | SDK 解析后的歌词。 |
| └ begin_time | Int | 行开始时间，单位：毫秒。 |
| └ duration | Int | 行持续时间，单位：毫秒。<div class="mk-warning"><p>此处与获取逐行歌词的参数格式不同。</p></div>|
| └ content | String | 歌词内容。 |
| └ words | Object | 逐字内容。 |
| &nbsp;&nbsp;└ offset | Int | 字偏移时间，单位：毫秒。<div class="mk-hint"><p>字偏移指的是在歌词中该字的开始时间与该行开始时间对比的偏移。</p></div> |
| &nbsp;&nbsp;└ duration | Int | 字持续时间，单位：毫秒。 |
| &nbsp;&nbsp;└ content | String | 歌词内容。 |
| krc_format_offset | Int | 歌词偏移（使用歌词 UI 组件时需要），单位：毫秒。<div class="mk-hint"><p>歌词偏移指的是歌词显示与歌曲音乐节奏上时间对比的偏移。</p></div> |
| krc_format | String | krc 原格式歌词（一般不需要使用）。 |


其他字段为歌词源文件中的 title 字段，不同的歌词文件中不一定存在，一般可以选择忽略。具体如下：

| 参数    | 类型   | 描述     |
| ------- | ------ | -------- |
| al | String | 唱片集。 |
| ar | String | 歌手。 |
| au | String | 歌词作者。 |
| by | String | 歌词文件创建者。 |
| lenght | Int | 歌曲时长，单位：毫秒。 |
| re    | String    | 创建歌词文件的播放器或编辑器。 |
| ti | String | 歌词标题。 |
| ve | String | 程序版本。 |


**回调示例**

```json
{

  "lines": [
    {
      "begin_time": 12076,
      "duration": 6158,
      "content": "string",
      "words": [
        {
          "offset": 0,
          "duration": 496,
          "word": "string"
        }
      ]
    }
  ],
  "krc_format_offset":0,
  "krc_format": "string",
  "al": "",
  "ar": "",
  "au": "",
  "by": "",
  "lenght": 0,
  "re": "",
  "ti": "",
  "ve": "",
}
```
