1. 登录 ZEGO 控制台，在 “项目管理” 页签中单击合适的项目，进入项目详情页。

    <img src="/Pics/ZIM/OfflinePush/Enter_project_1.jpeg" width=80%>

2. 选择“服务配置 > 即时通讯” 页签。

    <img src="/Pics/ZIM/OfflinePush/Add_1.jpeg" width=80%>

3. 找到 “自定义推送策略（resourceID）配置”，单击 “添加 reourcesID”。

    <img src="/Pics/ZIM/OfflinePush/resouceID.jpeg" width=80%>

4. 在弹窗中输入声音资源的相关信息并单击 “确定”。

    <div class="mk-hint">
   
    请根据您的项目实际情况，按需配置适用于 APNs 和 FCM 的 Sound 文件地址（可二选一）。   
    </div>

    <img src="/Pics/ZIM/OfflinePush/Pop_out_1.jpeg" width=50%>

    相关信息的说明如下：

    <table>
  <colgroup>
    <col>
    <col>
  </colgroup>
<tbody><tr>
<th>信息</th>
<th>说明</th>
</tr>
<tr>
<td>resourceID 名称</td>
<td>需要推送的资源的 ID。您可以自定义此 ID。</td>
</tr>
<tr>
<td colspan="2"><b>APNs</b></td>
</tr>
<tr>
<td>推送类型</td>
<td>必须为 “alert”。</td>
</tr>
<tr>
<td>Sound</td>
<td>声音资源文件在您的应用中的地址。例如，如果您是通过 Xcode 打开项目并在 Build Phrases &gt; Copy Bundle Resources 将声音资源引入项目，此时，该声音资源已位于根目录中，地址为“声音资源名称 + 后缀”，如 callSound.caf）。如何将声音资源加入到 iOS 项目工程，详情请参考 [自定义通知铃声](!IM-Notification_Ringtones_Customization#3_1)。</td>
</tr>
<tr>
<td colspan="2"><b>FCM</b></td>
</tr>
<tr>
<td>推送类型</td>
<td>仅支持为 “Notification Message” 自定义铃声。</td>
</tr>
<tr>
<td>Chanel ID</td>
<td>如果您的项目支持 Android 8.0 (API 26) 及以上版本，需要创建 channel 以自定义铃声。如何创建 channel，详情请参考 [自定义通知铃声](!IM-Notification_Ringtones_Customization#3_1)。</td>
</tr>
<tr>
<td>Sound</td>
<td>声音资源文件的名称，无需后缀，如 call_sound。如何将声音资源加入到 Android 项目工程，详情请参考 [自定义通知铃声](!IM-Notification_Ringtones_Customization#3_1)。</td>
</tr>
    </tbody></table>

4. 完成输入后，“自定义推送策略（resourceID）配置” 下会出现该声音资源的具体信息，请拷贝对应的 Resource ID。

    <img src="/Pics/ZIM/OfflinePush/Copy_1.jpeg" width=80%>


































