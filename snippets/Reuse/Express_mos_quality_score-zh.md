## MOS 音质评分

ZEGO Express SDK 2.16.0 版本开始，拉流质量回调 [onPlayerQualityUpdate\|_blank](@onPlayerQualityUpdate) 中新增 "mos" 字段，表示对拉流音质的评分。开发者对音频质量比较关注时，可通过该字段了解当前音频的质量情况。

mos 字段的取值范围为 [-1, 5]，其中 -1 表示未知（例如异常拉流时无法评分），[0, 5] 表示正常评分区间。实时音频 MOS 评分对应的主观音质感受如下：

<table>
  <colgroup>
    <col width="25%">
    <col width="75%">
  </colgroup>
  <tbody><tr>
    <th>MOS 值</th>
    <th>评价标准</th>
  </tr>
  <tr>
    <td>4.0 ～ 5.0</td>
    <td>音质很好，清晰流畅，听的清楚。</td>
  </tr>
  <tr>
    <td>3.5 ～ 4.0</td>
    <td>音质较好，偶有音质损伤，但依然清晰流畅，听的清楚。</td>
  </tr>
  <tr>
    <td>3.0 ～ 3.5</td>
    <td>音质一般，偶有卡顿，需要一点注意力才能听清。</td>
  </tr>
  <tr>
    <td>2.5 ～ 3.0</td>
    <td>音质较差，卡顿频繁，需要集中注意力才能听清。</td>
  </tr>
  <tr>
    <td>2.0 ～ 2.5</td>
    <td>音质很差，部分语义丢失，难以交流。</td>
  </tr>
  <tr>
    <td>0 ～ 2.0</td>
    <td>音质极差，大量语义丢失，无法交流。</td>
  </tr>
  <tr>
    <td>-1</td>
    <td>未知。</td>
  </tr>
</tbody></table>










