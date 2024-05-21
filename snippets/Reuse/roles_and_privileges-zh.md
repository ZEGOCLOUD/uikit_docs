ZIM SDK 默认支持将用户设置为群主、管理员、普通成员。在群组中，群主拥有所有**客户端**权限，可以实现所有群组功能。管理员拥有大部分**客户端**权限。普通成员拥有的**客户端**权限最少，具体如下表所示：

<table>
  <colgroup>
    <col width="25%">
    <col width="25%">
    <col width="25%">
    <col width="25%">
  </colgroup>
<tbody><tr>
<th>客户端权限</th>
<th>群主（对应枚举值为 1）</th>
<th>管理员（对应枚举值为 2）</th>
<th>普通成员（对应枚举值为 3）</th>
</tr>
<tr>
<th>修改群头像、群名称、群公告</th>
<td rowspan="2">支持</td>
<td rowspan="2">支持</td>
<td rowspan="2">支持</td>
</tr>
<tr>
<th>修改群属性</th>
</tr>
<tr>
<th>修改群成员昵称</th>
<td rowspan="9">支持，可对所有群角色用户使用此功能</td>
<td rowspan="5">支持，可对所有普通成员使用此功能</td>
<td rowspan="2">支持，仅可对自己使用此功能</td>
</tr>
<tr>
<th>撤回群成员消息</th>
</tr>
<tr>
<th>踢人</th>
<td rowspan="7">不支持。</td>
</tr>
<tr>
<th>对单独群成员禁言</th>
</tr>
<tr>
<th>对特定群角色禁言</th>
</tr>
<tr>
<th>设置群成员角色</th>
<td rowspan="4">不支持</td>
</tr>
<tr>
<th>转让群主</th>
</tr>
<tr>
<th>解散群组</th>
</tr>
<tr>
<th>全员禁言</th>
</tr>
</tbody></table>



