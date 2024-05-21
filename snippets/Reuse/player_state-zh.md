<img src="/Pics/MiniGames/Player_State_new_1.jpg" width="80%">

<table>
  <colgroup>
    <col width="25%">
    <col width="15%">
    <col width="30%">
    <col width="30%">
  </colgroup>
<tbody><tr>
<th>状态</th>
<th>含义</th>
<th>触发进入该状态的事件</th>
<th>常见业务场景</th>
</tr>
<tr>
<td>`ZegoGamePlayerStartPlay`</td>
<td>玩家开始参与游戏。</td>
<td>- 玩家调用 [loadGame|_blank](@loadGame) 接口加载随机匹配模式（半屏或全屏）游戏，并参与游戏。
- 主播调用 [startGame|_blank](@startGame) 开始游戏外指定匹配模式游戏。</td>
<td>判断玩家是否可以切换当前的页面，防止在游戏过程中，玩家因误触界面导致游戏异常中断。<ul><li>当玩家状态为 `ZegoGamePlayerStartPlay`，且 SDK 没有获取到 `ZegoGamePlayerStopPlay`，玩家不可以切换页面。</li></ul></td>
</tr>
<tr>
<td>`ZegoGamePlayerStopPlay`</td>
<td>玩家停止参与游戏。</td>
<td>游戏流程自然结束。</td>
<td>统计玩家的总游戏时长。<ul><li>通过计算多组 `ZegoGamePlayerStartPlay` 和 `ZegoGamePlayerStopPlay` 之间的时间差并进行相加，获取玩家的总游戏时长。</li></ul></td>
</tr>
</tbody></table>

<div class="mk-warning">

如果用户调用 [loadGame\|_blank](@loadGame) 后，没有在游戏 UI 上加入游戏，仅作为观众，而非玩家，则不会收到玩家状态。
</div>












