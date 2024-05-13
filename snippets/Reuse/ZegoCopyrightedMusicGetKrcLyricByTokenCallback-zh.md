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
<tr data-row-level="2" data-row-child="true">
<td>lines</td>
<td>Object</td>
<td>SDK 解析后的歌词。</td>
</tr>
<tr data-row-level="2-1">
<td>begin_time</td>
<td>Int</td>
<td>行开始时间，单位：毫秒。</td>
</tr>
<tr data-row-level="2-2">
<td>duration</td>
<td>Int</td>
<td>行持续时间，单位：毫秒。<div class="mk-warning">此处与获取逐行歌词的参数格式不同。</div></td>
</tr>
<tr data-row-level="2-3">
<td>content</td>
<td>String</td>
<td>歌词内容。</td>
</tr>
<tr data-row-level="2-4" data-row-child="true">
<td>words</td>
<td>Object</td>
<td>逐字内容。</td>
</tr>
<tr data-row-level="2-4-1">
<td>offset</td>
<td>Int</td>
<td>字偏移时间，单位：毫秒。<div class="mk-hint">字偏移指的是在歌词中该字的开始时间与该行开始时间对比的偏移。</div></td>
</tr>
<tr data-row-level="2-4-2">
<td>duration</td>
<td>Int</td>
<td>字持续时间，单位：毫秒。</td>
</tr>
<tr data-row-level="2-4-3">
<td>word</td>
<td>String</td>
<td>歌词内容。</td>
</tr>
</tbody></table>


其他字段为歌词源文件中的 title 字段，不同的歌词文件中不一定存在，一般可以选择忽略。具体如下：

<table>
  <colgroup>
    <col width="20%">
    <col width="20%">
    <col width="60%">
  </colgroup>
<tbody><tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
<tr>
<td>al</td>
<td>String</td>
<td>唱片集。</td>
</tr>
<tr>
<td>ar</td>
<td>String</td>
<td>歌手。</td>
</tr>
<tr>
<td>au</td>
<td>String</td>
<td>歌词作者。</td>
</tr>
<tr>
<td>by</td>
<td>String</td>
<td>歌词文件创建者。</td>
</tr>
<tr>
<td>lenght</td>
<td>Int</td>
<td>歌曲时长，单位：毫秒。</td>
</tr>
<tr>
<td>re</td>
<td>String</td>
<td>创建歌词文件的播放器或编辑器。</td>
</tr>
<tr>
<td>ti</td>
<td>String</td>
<td>歌词标题。</td>
</tr>
<tr>
<td>ve</td>
<td>String</td>
<td>程序版本。</td>
</tr>
</tbody></table>


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













