- 请在 [微信公众平台\|_blank](https://mp.weixin.qq.com/?token=&lang=zh_CN) 上进行 [服务器域名配置\|_blank](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。选择“小程序后台 > 开发 > 开发设置 > 服务器域名”菜单，按照协议分类，将以下`域名`地址填写到指定的 “request 合法域名” 或 “socket 合法域名” 或 “uploadFile 合法域名” 或 “downloadFile 合法域名” 中。

    <div class="mk-hint">

    若开发者需要在其他平台（如百度、支付宝或字节跳动）运行示例源码或开发上述平台的小程序，请在对应平台配置服务器域名。
    </div>

    <table>
        <colgroup>
            <col width="15%"></col> 
            <col width="40%"></col>
            <col width="20%"></col>
            <col width="25%"></col>
        </colgroup>
        <tbody>
            <tr>
                <th>小程序服务器配置分类</th>
                <th>域名</th>
                <th>适用SDK版本</th>
                <th>描述</th>
            </tr>
            <tr>
                <td rowspan="20">socket 合法域名</td>
                <td>wss://webzim-sh2.zego.im</td>
                <td rowspan="2">1.2.0 ~ 2.1.5</td>
                <td rowspan="13">接入域名：ZEGO 服务器的 WebSocket 通信地址。</td>
            </tr>
            <tr>
                <td>wss://webzim-sh2-bak.zego.im</td>
            </tr>
            <tr>
                <td>wss://accesshub-wss.zego.im</td>
                <td>2.2.0 ~ 2.12.0</td>
            </tr>
            <tr>
                <td>wss://accesshub-wss.coolbcloud.com</td>
                <td rowspan="10">2.13.0 及以上</td>
            </tr>
            <tr>
                <td>wss://accesshub-wss.coolccloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-wss.coolgcloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-wss.coolhcloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-wss.coolzcloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-global.coolbcloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-global.coolccloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-global.coolgcloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-global.coolhcloud.com</td>
            </tr>
            <tr>
                <td>wss://accesshub-global.coolzcloud.com</td>
            </tr>
            <tr>
                <td>wss://webzim-report.zego.im</td>
                <td>1.2.0 ~ 2.11.0</td>
                <td rowspan="7">数据上报：分析 SDK 数据。</td>
            </tr>
            <tr>
                <td>wss://weblogger-wss.zego.im</td>
                <td rowspan="6">2.12.0 及以上</td>
            </tr>
            <tr>
                <td>wss://weblogger-wss.coolbcloud.com</td>
            </tr>
            <tr>
                <td>wss://weblogger-wss.coolccloud.com</td>
            </tr>
            <tr>
                <td>wss://weblogger-wss.coolgcloud.com</td>
            </tr>
            <tr>
                <td>wss://weblogger-wss.coolhcloud.com</td>
            </tr>
            <tr>
                <td>wss://weblogger-wss.coolzcloud.com</td>
            </tr>
            <tr>
                <td rowspan="18">request 合法域名</td>
                <td>https://cloud-setting-api.zego.im</td>
                <td rowspan="2">1.2.0 ~ 2.1.5</td>
                <td rowspan="2">云控配置：动态修改 SDK 能力。</td>
            </tr>
            <tr>
                <td>https://cloud-setting-api.zegocloud.com</td>
            </tr>
            <tr>
                <td>https://webzim-detaillog.zego.im</td>
                <td>1.2.0 ~ 2.11.0</td>
                <td rowspan="7">日志上报：排查故障，定位问题。</td>
            </tr>
            <tr>
                <td>https://detaillog-global.zego.im</td>
                <td rowspan="6">2.12.0 及以上</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolbcloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolccloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolgcloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolhcloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolzcloud.com</td>
            </tr>
            <tr>
                <td>https://zego-zim-smsh.oss-cn-shanghai.aliyuncs.com</td>
                <td rowspan="3">2.2.0 ~ 2.11.0</td>
                <td rowspan="9">文件媒体消息：文件媒体消息的 URL。</td>
            </tr>
            <tr>
                <td>https://zego-zim-zimsh.oss-cn-shanghai.aliyuncs.com</td>
            </tr>
            <tr>
                <td>https://zimfile-sh2.zego.im</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.zego.im</td>
                <td rowspan="6">2.12.0 及以上</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolbcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolccloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolgcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolhcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolzcloud.com</td>
            </tr>
            <tr>
                <td rowspan="16">uploadFile 合法域名</td>
                <td>https://webzim-detaillog.zego.im</td>
                <td>1.2.0 ~ 2.11.0</td>
                <td rowspan="7">日志上报：排查故障，定位问题。</td>
            </tr>
            <tr>
                <td>https://detaillog-global.zego.im</td>
                <td rowspan="6">2.12.0 及以上</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolbcloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolccloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolgcloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolhcloud.com</td>
            </tr>
            <tr>
                <td>https://detaillog-global.coolzcloud.com</td>
            </tr>
            <tr>
                <td>https://zego-zim-smsh.oss-cn-shanghai.aliyuncs.com</td>
                <td rowspan="3">2.2.0 ~ 2.11.0</td>
                <td rowspan="9">文件媒体消息：文件媒体消息的 URL。</td>
            </tr>
            <tr>
                <td>https://zego-zim-zimsh.oss-cn-shanghai.aliyuncs.com</td>
            </tr>
            <tr>
                <td>https://zimfile-sh2.zego.im</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.zego.im</td>
                <td rowspan="6">2.12.0 及以上</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolbcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolccloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolgcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolhcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolzcloud.com</td>
            </tr>
            <tr>
                <td rowspan="9">downloadFile 合法域名</td>
                <td>https://zego-zim-smsh.oss-cn-shanghai.aliyuncs.com</td>
                <td rowspan="3">2.2.0 ~ 2.11.0</td>
                <td rowspan="9">文件媒体消息：文件媒体消息的 URL。</td>
            </tr>
            <tr>
                <td>https://zego-zim-zimsh.oss-cn-shanghai.aliyuncs.com</td>
            </tr>
            <tr>
                <td>https://zimfile-sh2.zego.im</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.zego.im</td>
                <td rowspan="6">2.12.0 及以上</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolbcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolccloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolgcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolhcloud.com</td>
            </tr>
            <tr>
                <td>https://access-zfpxy-global.coolzcloud.com</td>
            </tr>
        </tbody>
    </table>



