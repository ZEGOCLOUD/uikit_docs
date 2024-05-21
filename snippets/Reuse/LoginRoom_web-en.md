<div class="mk-warning">

When logging in to a room, you need to pass in a **token for user authentication**. To obtain the login token, see [User privilege control\|_blank](#11416).

</div>

To log in to a room, call the [`loginRoom`\|_blank](/article/api?doc=Express_Video_SDK_API~javascript_web~class~ZegoExpressEngine#login-room) with the following parameters: 

- A unique room ID as the `roomID` parameter
- The login token you obtained in the previous step 
as the `token` parameter
- The user ID and user name as the `roomID` and `userName` parameter
- Optional: Pass the corresponding object to the `config` parameter based on the actual situation.

If the roomID does not exist, a new room will be created and you will log in automatically when you call the `loginRoom` method.


```javascript
// Log in to a room. It returns `true` if the login is successful.
// The roomUserUpdate callback is disabled by default. To receive this callback, you must set the `userUpdate` property to `true` when logging in to a room. 
const result = await zg.loginRoom(roomID, token, {userID, userName}, {userUpdate: true});
```









