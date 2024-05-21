
|Return code| Possible cause and solution |
|-----|----|
| 104 | The room does not exist. (the detection logic is the same as the return codes 5024 and 50001.) Please check the RoomId.|
| 206 | The rate limit (requests per second) has exceeded the limit. Please adjust the frequency of your requests or contact ZEGOCLOUD technical support.|
| 5018 | Room status does not match. Please try again later.|
| 5024 | The room does not exist. (the detection logic is the same as the return codes 104 and 5001.) Please check the RoomId. |
| 50001 | The room does not exist. (the detection logic is the same as the return codes 104 and 5024.)<div class="mk-hint"><ul><li>When there are no users in a room, the room will be automatically destroyed by the server.</li><li>When there is only one user in a room and the user exits or is kicked out of the room, the room will be automatically destroyed by the server.</li><li>When a room's heartbeat request times out by 100 seconds, the room will be destroyed by the server.</li></ul></div> | Please check the RoomId. |
| 50002 | User does not exist. Please check the UserId. |
| 50003 | Failed to query the user's online info. Please check whether the user is online based on the UserId.|
| 50004 | Failed to read the user info. Please check whether the user is online based on the UserId.  |
| 50009 | Moderation failed. Please try again later or contact ZEGOCLOUD technical support. |
| 50011 | The number of recipients of the custom message has exceeded the limit.  |
| 50012 | The length of the custom message has exceeded the limit.  |
| 50013 | Failed to send custom messages. Please contact ZEGOCLOUD technical support.



















