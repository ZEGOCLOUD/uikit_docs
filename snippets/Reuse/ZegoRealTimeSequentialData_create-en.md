加入房间后，开发者需要调用 [ZegoExpressEngine\|_blank](@-ZegoExpressEngine) 实例的 [createRealTimeSequentialDataManager\|_blank](@createRealTimeSequentialDataManager) 接口，创建一个管理器对象。

<div class="mk-warning">

- 调用 [createRealTimeSequentialDataManager\|_blank](@createRealTimeSequentialDataManager) 接口、创建管理器对象时，RoomID 必须与 [4.2 登录房间](!RealTimeSequentialData#4_3) 中的 RoomID 保持一致。如果两个接口的 RoomID 不一致，或 RoomID 尚未通过调用 [loginRoom\|_blank](@loginRoom) 接口登录房间时创建，会导致创建管理器对象失败，返回 `nil`。

- 一个房间能且仅能创建一个管理器实例对象。即：
    - 在单房间模式下，只能创建一个实例对象。
    - 在多房间模式下，每个房间都可以创建一个实例对象。

    如果调用 [createRealTimeSequentialDataManager\|_blank](@createRealTimeSequentialDataManager) 接口传入的 RoomID 已经创建过一个实例，则无法再创建一个实例，返回 `nil`。
</div>
