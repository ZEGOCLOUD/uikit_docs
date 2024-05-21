<img src="/Pics/MiniGames/Game_Load_State.jpeg" width="80%">

游戏加载状态会随游戏资源加载进度而转化，开发者可查看下表了解各状态的含义、触发事件和常见业务场景：

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
<td>`ZegoGameLoading`</td>
<td>游戏加载中。</td>
<td>调用 [loadGame|_blank](@loadGame) 接口后，完成下载游戏资源并开始加载游戏。</td>
<td>了解游戏的初次加载时长。<ul><li>通过计算第一次调用 [loadGame|_blank](@loadGame) 的时间点（t1）与您获取到游戏状态 `ZegoGameLoading` 的时间点（t2）的时间差（t2-t1），可知游戏初次加载时长。</li></ul></td>
</tr>
<tr>
<td>`ZegoGameLoaded`</td>
<td>游戏加载完成。</td>
<td>游戏加载完成。</td>
<td>了解游戏的加载时长。<ul><li>当不是第一次加载游戏时，通过计算调用 [loadGame|_blank](@loadGame) 的时间点（t3）与您获取到游戏状态 `ZegoGameLoaded` 的时间点（t4）的时间差（t4-t3），可知则为游戏加载时长。</li></ul></td>
</tr>
</tbody></table>



