<div class="mk-hint">

排查卡顿原因前，请参考 [通话洞察\|_blank](#16609) 了解 星图 - 通话洞察 模块的相关功能。
</div>

### 1 定位目标流

1. 提前获取卡顿通话的相关信息，尽可能包含：拉流用户 ID、流 ID、通话开始时间，以及通话结束时间。

2. 进入通话洞察 - 检索页，定位目标流，选择目标 App，输入提前获取的拉流用户 ID、或者流 ID，以及通话时间，检索获取流列表信息。

    下图以流ID为例，检索结果示例如下：

    <img src="/Pics/Prism/2_dingweimubiaoliu.png" width=80%>


### 2 分析卡顿是否属于用户特例

用户反馈存在卡顿问题后，开发者需要分析该问题是个例问题，还是普遍问题。为确认卡顿是否属于用户个例，开发者可以在推流质量页对比问题用户与其他拉流用户的码率数据：Prism

- 若仅有此用户在该时刻拉流时产生卡顿，其余用户在相同时间没有卡顿，可判断为卡顿为个例问题，如下图所示：

    <img src="/Pics/xingtu_anli/kadunpaicha_xiaxingwangluo/4_kadungeli.png" width=80%>

- 若在相同时刻，所有拉流用户码率图表均出现了卡顿，及接收码率产生了相似波动，且推流用户的发送码率同时也出现了相似波动，则造成卡顿的原因可能是因为推流侧质量波动导致，此刻所有的拉流用户均产生了卡顿，属于普遍问题，需要进一步排查推流端质量波动原因，如下图所示：

    <details class="zg-primary">
        <summary>普遍卡顿问题的码率与卡顿率示意图</summary>
        <img src="/Pics/xingtu_anli/kadunpaicha_xiaxingwangluo/3_suoyouyonghukadun.png" width=80%>
    </details>



