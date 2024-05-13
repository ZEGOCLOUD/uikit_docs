
After getting your AppID and ServerSecret, you can define the validation rules on your app server or client based on your business requirements.
Currently, ZEGOCLOUD supports the following validation rules:

   - **Validate room login privilege only**: to check users' privilege to log in to a room, but not to check their privilege to publish streams in a room.
   - **Validate stream publishing privilege only**: to check users' privilege to publish streams in a room, but not to check their privilege to log in to a room.
   - **Validate both room login and stream publishing privileges**: to check users' privilege to log in to a room and also their privilege to publish streams in a room.


<div class="mk-warning">

For business security, you must generate tokens on your app server; Otherwise, there is a risk of ServerSecret being stolen.

</div>

ZEGOCLOUD provides an open-source [token generator\|_blank](https://github.com/zegoim/zego_server_assistant) plug-in on GitHub, which you can use to generate tokens on your app server or client using different programming languages such as Go, C++, Java, Python, PHP,.NET, and Node.js.



