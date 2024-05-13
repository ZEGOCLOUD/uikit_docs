1. Log in to the [ZEGOCLOUD Admin Console\|_blank](https://console.zegocloud.com/), select **Projects > Project Management** to go to your project's detailed page.
    <img src="/Pics/ZIM/OfflinePush/Enter_project.png" width=80%>

2. In the project management page, click the **In-app Chat** tab, find the **Customized push resource** area and click the **Add** button.

    <img src="/Pics/ZIM/OfflinePush/Add.png" width=80%>

3. Fill in the required fields and click **Continue**.


    <img src="/Pics/zegocloud/console/inappchat_resourceid.png" width=50%>

    The required fields are explained as follows:

<table>
  <colgroup>
    <col>
    <col>
  </colgroup>
<tbody><tr>
<th>Field</th>
<th>Description</th>
</tr>
<tr>
<td>Push Resource ID</td>
<td>The ID of the resource to push. You can customize this ID.</td>
</tr>
<tr>
<td colspan="2">APNs</td>
</tr>
<tr>
<td>Sound</td>
<td>The path of the sound resource file in your app's IPA package. For example, if you opened your project in Xcode and imported the sound resource into the project in Build Phrases & Copy Bundle Resources, then the sound resource is already in the root directory with "sound resource name + file format", like callSound.caf. To know how to add sound resources to your iOS project, refer to [Customize notification sound\|_blank](15068#3_2).</td>
</tr>
<tr>
<td colspan="2">FCM</td>
</tr>
<tr>
<td>Chanel ID</td>
<td>If your project supports Android 8.0 (API 26) or later, you need to create a channel to customize notification sounds. To know how to create a channel, refer to [Customize notification sound\|_blank](15067#3_1).</td>
</tr>
<tr>
<td>Sound</td>
<td>The name of the sound resource file, without the suffix, such as call_sound. To know how to add sound resources to your Android project, refer to [Customize notification sound\|_blank](15067#3_1).</td>
</tr>
</tbody></table>


4. After filling in all fields, a newly added entry shows like this, and you will need to copy the **Push Resource ID**.

    <img src="/Pics/ZIM/OfflinePush/Copy.png" width=80%>




