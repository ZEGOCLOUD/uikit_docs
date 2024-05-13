#### 方式二：通过开发者服务端发送请求

开发者服务端通过公共网关接口，构造消息体，直接发送请求到 ZegoAvatar 服务端，申请鉴权文件。消息体结构如下：

- **URL：**https://aieffectscgi-api.zego.im?Action=CgiDescribeAvatarLicense
- **请求方法：** GET
- **内容格式：** JSON
- **参数：**
   
 | 参数名 | 类型 | 是否必须 | 说明 |  
| :---- | :---- | :----- | :------ |  
| AppId | unsigned int | 是 | 鉴权的唯一标识，请联系 ZEGO 商务人员获取。|
| Signature | string | 是 |  签名，签名的生成请参考 [服务端 API v2 - 调用方式\|_balnk](8985#5) 中的 “3 签名机制”。 |
| SignatureNonce | string | 是 |  随机数。|
| SignatureVersion | string | 是 | 签名版本号，默认值为 2.0。 | 
| Timestamp | string | 是 | Unix 时间戳，单位为秒。最多允许 10 分钟的误差。|

- ***消息示例：***

    ```json
    curl -X GET https://aieffectscgi-api.zego.im?Action=CgiDescribeAvatarLicense&AppId=1&Signature=1302668869d55ab3f6114af4ba6e5580&SignatureNonce=3f15d0b95f6e480b&SignatureVersion=2.0&Timestamp=1635940599
    ```

### 2 ZegoAvatar 服务端返回鉴权文件 License

服务端返回的消息示例如下：

```json
{
    "Code": 0,
    "Message": <message>,
    "Data": {
        "License": <license>
    }
}
```
<div class="mk-hint">

- 如果请求获取鉴权文件成功，则返回字段 `License` 中携带信息即为鉴权文件的内容。
- 若请求失败，则返回字段 `Code` 会返回错误码，`Message` 为对应的错误信息。
</div>

根据请求方式的不同，返回字段中的 `Code` 取值也不相同，具体解释如下：

<table class="collapsible-table" >
  <colgroup>
    <col width="14%">
    <col width="16%">
    <col width="35%">
    <col width="35%">
  </colgroup>
<tbody><tr data-row-level="1">
<th>参数名</th>
<th>类型</th>
<th colspan="2">说明</th>
</tr>
<tr data-row-level="2">
<td>Code</td>
<td>unsigned int32</td>
<td><p><b>通过客户端发送请求</b>时，ZegoAvatar 服务端返回的错误码，取值如下：</p>
<ul>
<li>0：成功。</li>
<li>1：参数有误。</li>
<li>2：Token 有误。</li>
<li>3：证书无效，AppId 或者 Bundle ID 不正确。</li>
<li>4：服务内部问题。</li>
</ul></td>
<td><p><b>通过开发者服务端发送请求</b>时，ZegoAvatar 服务端返回的错误码，取值如下：</p>
<ul>
<li>0：成功。</li>
<li>910001：参数有误。</li><li>910002：证书无效。</li>
<li>910003：服务内部问题。</li><li>910004：授权信息有误。</li>
</ul></td>
</tr>
<tr data-row-level="3">
<td>Message</td>
<td>string</td>
<td><p>返回的提示信息，和 “Code” 的取值相对应。</p>
<ul>
<li>0：Success</li>
<li>1：Invalid argument</li>
<li>2：Invalid token</li>
<li>3：No valid license</li>
<li>4：Service unavailable</li>
</ul></td>
<td><p>返回的提示信息，和 “Code” 的取值相对应。</p>
<ul>
<li>0：Success</li>
<li>910001：Invalid argument</li>
<li>910002：No valid license</li>
<li>910003：Service unavailable</li><li>910004：Auth error</li>
</ul></td>
</tr>
<tr data-row-level="4" data-row-child="true">
<td>Data</td>
<td>object</td>
<td colspan="2">“Code” 为 0 时，返回鉴权文件的内容。</td>
</tr>
<tr data-row-level="4-1">
<td>License</td>
<td>string</td>
<td colspan="2">鉴权文件的内容。</td>
</tr>
</tbody></table>




