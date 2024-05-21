<div class="mk-warning">

当一名用户修改头像后，其他用户需调用 [queryUsersInfo\|_blank](@queryUsersInfo) 接口，并将 [ZIMUsersInfoQueryConfig\|_blank](@-ZIMUsersInfoQueryConfig) 中 [isQueryFromServer\|_blank](@-isQueryFromServer) 参数赋值为 `true` 重新 <a href="queryUsersInfo">查询用户信息</a>，才会获取最新头像。
</div>
