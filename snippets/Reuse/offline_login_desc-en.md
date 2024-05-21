## Function introduction

Offline login is typically used when the application is cleared from memory, and the user relaunches the application by clicking on the application icon. In this scenario, the user can directly access the local SDK data without network connectivity or a successful login.

<div class="mk-hint">

Users can only perform an offline login using the UserID from their previous successful login; otherwise, the login will not succeed.
</div>

## Technical principle

When the offline login interface is called, the ZIM SDK performs verification (UserID verification; if token-based login is used, it also verifies the token's validity period). After successful verification, the SDK returns a login success callback, allowing users to query local data, while the SDK internally attempts to establish a connection with the backend service automatically.






