主播需要先调用 [getGameList\|_blank](@getGameList) 接口，传入 pageIndex（分页查询的标识位，第一次填 0 ）、pageSize（获取游戏数量）和 gameMode（游戏模式），获取“主播带玩模式”的游戏列表，从返回结果（包括游戏 ID、游戏名称、游戏描述和缩略图）中选择游戏（游戏 ID）。

第一次调用接口后，如果返回结果中的游戏数量等于 pageSize 时（表示可能还有其他游戏），您可以再次调用 [getGameList\|_blank](@getGameList) 接口，指定 pageIndex 为 1，获取剩余游戏的信息，如此反复，直到返回结果中的游戏数量小于 pageSize 或为 0。

返回结果中的游戏列表展示从 第 pageIndex * pageSize 个游戏开始，到第 pageIndex * pageSize + （pageSize 或 实际返回数量 - 1） 个游戏。

例如：

| pageIndex | pageSize | 列表开始 | 列表结束 | 一次共获取 |
| -- | -- | -- | -- | --|
| 0 | 10 | 由于 0 * 10 =0，<br>所以为第 0 个 | 0 * 10 + (10 - 1) = 9，<br>所以为第 9 个 | 10 个 | 
| 1 | 10 | 由于 1 * 10 = 10，<br>所以为第 10 个 | 1 * 10 + (10 - 1) = 19，<br>所以为第 19 个 | 10 个 | 
| 2 | 10 | 由于 2 * 10 = 20，<br>所以为第 20 个 | 2 * 10 + (5（实际返回数量）- 1) = 24<br>所以为第 24 个 | 5 个 | 

如果您需要了解其他模式的游戏，请参考 [游戏模式说明\|_blank](!ZegoMiniGameEngine-Game_category_desc)。
