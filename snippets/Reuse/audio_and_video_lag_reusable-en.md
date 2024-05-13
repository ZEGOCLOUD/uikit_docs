<div class="mk-hint">

Before diagnosing the stuttering cause, refer to [Call quality monitoring\|_blank](#15152#5) to learn functions of the **Analytics Dashboard - Call quality monitoring** module.
</div>

### 1 Locating target streams

1. Obtain information about the call where stuttering occurs. Ensure that the information contains the stream player ID, stream ID, call start time, and call end time if possible.

2. Go to the **Call quality monitoring - Search** page and locate target streams. You can select a target app and enter the obtained stream player ID or stream ID and call duration to obtain the stream list. 

    The following figure shows the search result example obtained after the stream ID is entered.

    <img src="/Pics/xingtu_anli/kadunpaicha_xiaxingwangluo/2_dingweimubiaoliu_EN.png" width=80%>


### 2 Checking whether stuttering is an individual problem

After receiving user feedback of stuttering, you need to check whether the stuttering is an individual or a common problem. You can go to the **Stream publishing quality** page and compare bitrate data of the user who reports stuttering with that of the other stream players.

- If no stuttering occurs for the other stream players at that time, as shown in the following figure, you can determine that the stuttering is an individual problem.

    <img src="/Pics/xingtu_anli/kadunpaicha_xiaxingwangluo/4_kadungeli_EN.png" width=80%>

- If stuttering occurs for all stream players at that time according to the bitrate charts and the receiving bitrate of the stream players and sending bitrate of the stream publisher fluctuate similarly, as shown in the following figure, the stuttering may be caused by quality fluctuation on the stream publisher’s side. You can determine that the stuttering is a common problem and need to further determine the cause for the quality fluctuation on the stream publisher’s side. 

    <details class="zg-primary">
        <summary>Bitrate and stuttering of a common stuttering problem</summary>
        <img src="/Pics/xingtu_anli/kadunpaicha_xiaxingwangluo/3_suoyouyonghukadun_EN.png" width=80%>
    </details>

