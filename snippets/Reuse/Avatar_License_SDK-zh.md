2. 客户端向 ZegoAvatar 服务端请求鉴权文件。

    客户端拿到 ZegoAvatar SDK 返回的授权信息 AuthInfo 后，构造消息体，发送请求到 ZegoAvatar 服务端，申请鉴权文件。消息体结构如下：

    - **URL：** https://aieffects-api.zego.im?Action=DescribeAvatarLicense
    - **请求方法：** GET
    - **内容格式：** JSON
    - **参数：**
       
    | 参数名 | 类型 | 是否必须 | 说明 |  
    | ---- | ---- | ---- | ---- |  
    | AppId | unsigned int | 是 | 鉴权的唯一标识，请联系 ZEGO 商务人员获取。|
    | AuthInfo | string | 是 | 加密数据，由 SDK 产生的设备相关标识，通过 `getAuthInfo` 接口获得。 |

    - ***消息示例：***

    ```json
    curl -X GET https://aieffects-api.zego.im?Action=DescribeAvatarLicense&AppId=xxxxxxxx&AuthInfo=xxxxxxxx
    ```









