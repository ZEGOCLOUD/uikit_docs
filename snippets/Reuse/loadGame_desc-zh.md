设置游戏积分完成后，用户需要调用 [setGameContainer\|_blank](@setGameContainer) 接口设置游戏的父容器，并调用 [loadGame\|_blank](@loadGame) 加载游戏。

完成加载后，玩家即可开始玩`游戏内指定匹配`、`随机匹配半屏`和`随机匹配全屏`模式的游戏。 

`游戏外指定匹配`模式游戏则还需要主播主动调用 [startGame\|_blank](@startGame) 接口才能开始，详情请参考 [5 （客户端，可选）主播开始游戏](!ZegoMiniGameEngine-Implement_mini_games#3_5)。

<div class="mk-warning">

- 此处的“主播”和“观众”指的是您的业务角色，由您定义。ZEGO MiniGameEngine SDK 并不会对用户进行分类。
- 如需实现主播和观众一起玩游戏，他们各自的 roomID 和 gameID 必须保持一致。
- 如果在直播间（语聊房）的观众（听众）需要观看主播的游戏过程，但不加入游戏，也需要设置游戏父容器和加载游戏。
</div>



































