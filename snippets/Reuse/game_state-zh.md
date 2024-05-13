不同的游戏模式决定了游戏状态转化过程有所差异，如下图所示：

<table>
  <colgroup>
    <col width="50%">
    <col width="50%">
  </colgroup>
<tbody><tr>
<th>游戏外指定匹配模式</th>
<th>游戏内指定匹配模式、随机匹配模式（半屏与全屏）</th>
</tr>
<tr>
<td><img src="/Pics/MiniGames/Game_State_Host_1.jpg" width="100%"></td>
<td><img src="/Pics/MiniGames/Game_State_Others_1.jpg" width="100%"></td>
</tr>
</tbody></table>

开发者可查看下表了解各状态的含义、触发事件和常见业务场景：

<table>
  <colgroup>
    <col width="20%">
    <col width="15%">
    <col width="30%">
    <col width="">
  </colgroup>
<tbody><tr>
<th>状态</th>
<th>含义</th>
<th>触发进入该状态的事件</th>
<th>常见业务场景</th>
</tr>
<tr>
<td>`ZegoGameIdle`</td>
<td>游戏空闲中。</td>
<td>游戏外指定匹配模式游戏：
- 用户调用 [loadGame|_blank](@loadGame) 接口完成加载游戏外指定匹配模式游戏后。
- 有玩家不符合游戏条件且游戏后台等待超时。
- 游戏结束后等待主播开始新一轮游戏。</td>
<td>当获取游戏状态为 `ZegoGameIdle` 时，判断不展示游戏画面。</td>
</tr>
<tr>
<td>`ZegoGamePreparing`</td>
<td>游戏准备中。</td>
<td>游戏外指定匹配模式游戏：
- 主播调用 [startGame|_blank](@startGame) 后，游戏后台检查是否所有玩家都满足游戏条件。</td>
<td>在游戏准备的过程中，展示业务侧的加载弹窗等。</td>
</tr>
<tr>
<td>`ZegoGamePlaying`</td>
<td>游戏进行中。</td>
<td>- 游戏外指定匹配模式游戏：
    - 所有玩家符合游戏条件。&nbsp;&nbsp;
- 随机匹配模式游戏：
    - 用户调用 [loadGame|_blank](@loadGame) 加载游戏。
    - 游戏结束后，开始新一轮游戏。
- 恢复游戏进程。</td>
<td>获取 `ZegoGamePlaying` 状态时，判断展示游戏界面。</td>
</tr>
<tr>
<td>`ZegoGameStopping`</td>
<td>游戏暂停中。</td>
<td>暂停游戏进程。</td>
<td>游戏暂停中，可以播放广告等。</td>
</tr>
<tr>
<td>`ZegoGameOver`</td>
<td>游戏结束。</td>
<td>游戏正常结束。</td>
<td>隐藏游戏界面，例如语聊房内的匹配页面，等待下一次游戏重开。</td>
</tr>
</tbody></table>










