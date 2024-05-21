若您在开发过程中还无法通过服务端下发 Token 时，可以先使用客户端代码生成 Token，待服务端开发完后，再完成对接。

<div class="mk-warning">

- App 上线时，切勿在客户端生成 Token，否则您的 ServerSecret 将暴露在风险中。
- 为保证安全性，强烈推荐您使用服务端生成 Token，否则会存在 ServerSecret 被窃取的风险。
</div>


zego_server_assistant 插件中用于客户端生成 Token 的各语言参考信息如下：

<table>
  <colgroup>
    <col width="20%">
    <col width="30%">
    <col width="20%">
    <col width="30%">
  </colgroup>
  <tbody><tr>
    <th>语言</th>
    <th>支持版本</th>
    <th>关键函数</th>
    <th>具体地址</th>
  </tr>
  <tr>
    <td>C++</td>
    <td>C++ 11 或以上版本</td>
    <td>GenerateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/blob/release/github/token/c%2B%2B/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/c++/token04">Gitee</a></li></ul></td>
  </tr>
  <tr>
    <td>Java</td>
    <td>Java 1.8 或以上版本</td>
    <td>generateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/java/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/java/token04">Gitee</a></li></ul></td>
  </tr>
  <tr>
    <td>Objective-C</td>
    <td>-</td>
    <td>GenerateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/zegoim/zego_server_assistant/tree/release/github/token/oc/token04">GitHub</a></li><li><a target="_blank" href="https://gitee.com/zegodev_admin/zego_server_assistant/tree/release/github/token/oc/token04">Gitee</a></li><ul></ul></ul></td>
  </tr>
</tbody></table>






