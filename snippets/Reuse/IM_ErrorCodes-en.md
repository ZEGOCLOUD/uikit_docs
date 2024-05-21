## General errors

| Error code | Possible cause and solutions  | 
|--|--|
| 0 | Request execution successful. | 
| 1  | Request execution failed. |
| 6000001 | The parameter is invalid. Please check the parameter. |
| 6000002 | The SDK is not initialized. Please initialize the SDK first. |
| 6000003 |  Requests have exceeded the backend server's upper limit. | 
| 6000004 | The AppID is incorrect or invalid. Please check the AppID first. You can contact ZEGOCLOUD Technical Support if the AppID is correct.  |
| 6000005 |Requests have exceeded the SDK's upper limit. |
| 6000010 | Failed to upload logs. Please contact ZEGOCLOUD Technical Support.|
| 6000101 | Login failed because of the invalid Token or incorrect AppID. Please check the entered parameters. | 
| 6000102 | Login failed due to an internal error. Please contact ZEGOCLOUD Technical Support.| 
| 6000103 | Token is invalid. Please contact ZEGOCLOUD Technical Support.|
| 6000104 | Network error. Please upload logs and contact ZEGOCLOUD technical support.| 
| 6000106 | Token has expired. Please call the `renewToken` method to renew the Token.|
| 6000107 |The Token you are using does not match the target Token version. Please use the correct version of the Token. |
| 6000111 | You have already logged in. |
| 6000121 | You have not logged in. Please call the `login` method to log in first.| 

## Message errors

| Error code | Possible cause and solutions| 
|--|--|
| 6000201 | Failed to send the message. Please upload logs and contact ZEGOCLOUD Technical Support.|
| 6000202 | Failed to send the message due to an internal error. Please upload logs and contact ZEGOCLOUD Technical Support.|
| 6000204 | Failed to send the message due to network error. Please check the network. |
| 6000205 | The user is not in the room. Please check whether the user is in the target room first.|

## Room errors

| Error code | Possible cause and solutions| 
|--|--|
| 6000301 | The room does not exist. Please check the room ID.|
| 6000302 | The operation failed due to an internal error. Please upload logs and contact ZEGOCLOUD Technical Support.|
| 6000303 | Failed to create the room. Please upload logs and contact ZEGOCLOUD Technical Support. |
| 6000304 | Failed to join the room, because the room does not exist. Please upload logs and contact ZEGOCLOUD Technical Support. |
| 6000305 | Failed to leave the room. Please upload logs and contact ZEGOCLOUD Technical Support. |
| 6000311 |The room you create already exists. Please check the room ID.|
| 6000312 | The number of rooms has exceeded the upper limit. Please check the number of rooms or contact ZEGOCLOUD Technical Support.| 
| 6000321 | The number of rooms that a user can join has exceeded the upper limit. Please check the numbers of joined rooms or contact ZEGOCLOUD Technical Support.| 








