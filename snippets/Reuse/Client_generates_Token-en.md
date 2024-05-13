
If you can't generate the Token on your app server, you can try to generate it on your client. 


<div class="mk-warning">

When your app is ready to go live, remember not to generate the Token on your client; Otherwise, there is a risk of the ServerSecret being exposed.
</div>

ZEGOCLOUD provides an open-source [Token generator\|_blank](https://github.com/ZEGOCLOUD/zego_server_assistant) plug-in on GitHub, which you can use to generate Tokens on your app server using different programming languages such as C++ and Java.


<table>
  <colgroup>
    <col width="20%">
    <col width="30%">
    <col width="20%">
    <col width="30%">
  </colgroup>
  <tbody><tr>
    <th>Language</th>
    <th>Supported version</th>
    <th>Core function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>C++</td>
    <td>C++ 11 or later</td>
    <td>GenerateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/c%2B%2B">GitHub</a></td>
  </tr>
  <tr>
    <td>Java</td>
    <td>Java 1.8 or later</td>
    <td>generateToken04</td>
    <td><ul><li><a target="_blank" href="https://github.com/ZEGOCLOUD/zego_server_assistant/blob/master/token/java/token04">GitHub</a></td>
  </tr>
</tbody></table>









