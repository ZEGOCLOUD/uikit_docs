<div class="mk-hint">

游戏内指定匹配模式游戏、随机匹配半屏和全屏模式游戏无需此步骤。
</div>

当业务房间内的用户加载完`游戏外指定匹配`游戏后（监听 [onGameLoadStateUpdate\|_blank](@onGameLoadStateUpdate) 得知 `gameLoadState` 为 `ZegoGameLoaded`），需要有一名房内用户（通常是主播）调用 [startGame\|_blank](@startGame) 接口开始游戏。

<div class="mk-warning">

- 玩家列表不能为空。
- 当真人用户不满足游戏所需人数时，可构造机器人参与。
</div>





















