## Function introduction

ZIM SDK supports the configuration of custom multi-device logins, which means that users can log in to multiple devices simultaneously with the same account, ensuring that the user's sessions, messages, groups and other data communicate with each other.
<div class="mk-hint">

- To use this feature, please subscribe to the Professional or Ultimate package, and contact the technical support team to activate the service and configure the login policy.
- This feature only supports SDK version 2.11.0 and above.
</div>

## Common login policies

Multi-device login supports configuration on eight devices including Windows, Mac, Linux, Android, iOS, iPad, Web, and Mini Program. Among them, multi-device login is supported on Windows, Mac, Linux, Android, iOS, and iPad devices, with a maximum of 2 devices. Multi-instance login is supported on the Web device, with a maximum of 5 login instances.

The following are the three login policies supported by the ZIM SDK: single-device login, dual-device login, and multi-device login.

<table>
  <colgroup>
    <col width="30%">
    <col width="70%">
  </colgroup>
<tbody><tr>
<th>Login policies</th>
<th>Specific explanation</th>
</tr>
<tr>
<td>Single device login (by default)</td>
<td>Only supports users logging into the account on one device at a time. If the account is logged into another device, the account on the original device will be logged out.
</td>
</tr>
<tr>
<td>Dual-device login</td>
<td>Allows users to log in to their accounts on any of the Windows, Mac, Linux, Android, iOS, and iPad devices while keeping their accounts online on the web device.</td>
</tr>
<tr>
<td>Multi-device login</td>
<td> Allows users to simultaneously log in to their accounts on multiple devices, including Windows, Mac, Linux, Android, iOS, iPad, Web, and Mini program. The following configurations are supported:<br><ul><li>Multiple device and instance login on the same device at the same time.</li><li>Configure the logic for kicking each other offline; currently only supports offline kicking between Android and iOS devices, and offline kicking between Windows and Mac devices.</li></ul></td></td>
</tr>
</tbody></table>














