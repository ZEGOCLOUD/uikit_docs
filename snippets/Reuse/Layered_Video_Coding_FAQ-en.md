1. **What is the difference between the basic representation and the enhanced representation of the same video in resolution and bitrate with SVC?**

    Currently, the ZEGO Express-Video SDK supports one basic layer and one enhancement layer. So, with SVC, you can have two representations of the same video:

    The basic representation that contains only the base layer
The enhanced representation that contains both the base layer and the enhancement layer
They have the following differences in resolution and bitrate:

    The width and height of the resolution of the basic representation is 50% of that of the enhanced representation. So the frame size (width x height) of the basic representation is 25% of that of the enhanced representation.
Accordingly, the bitrate of the basic representation is also approximately 25% of that of the enhanced representation.
No differences in other aspects.
For example:

    If you set the encoding resolution to 800 × 600, it will be the resolution of the enhanced layer, and the resolution of the base layer is 400 × 300.

2. **Does SVC work when subscribing to streams from CDNs? Which quality layer do the stream subscribers receive when subscribing to a stream from CDNs?**

    - ZEGO uses private protocols for SVC. That means you can use the SVC feature only when subscribing to streams from ZEGO's streaming media servers.

    - ZEGO uses private protocols for SVC. That means you can use the SVC feature only when subscribing to streams from ZEGO's streaming media servers.

    - If you enable stream forwarding to CDN for your app, ZEGO's streaming media servers forward the higher-quality representation of the streams (base layer + enhancement layers) to the CDN. So the streams that the subscribers receive from the CDN are the ones at the higher quality level.
3. **What are the advantages and disadvantages of SVC?**

<table>
  <colgroup>
    <col>
    <col>
  </colgroup>
  <tbody><tr>
    <th>Advantages</th>
    <th>Disadvantages</th>
  </tr>
  <tr>
    <td><ul><li>SVC can generate or extract different bitstreams at different quality levels as needed. To encode a video into multiple representations at different quality levels, it only needs to encode the video once with SVC, while it needs to perform encoding multiple times to achieve the same with ordinary encoding methods.</li><li>SVC is more flexible to use.</li><li>SVC makes video streaming more network adaptive.</li></ul></td>
    <td>
<ul><li>SVC has a slightly lower compression efficiency: Under the same conditions, the compression efficiency of SVC is about 20% lower than that of ordinary encoding methods. That means, to achieve the same video quality (resolution and frame rate), the bitrate of the bitstream generated using SVC is 20% higher than that of ordinary encoding methods. The more layers in the encoded bitstream, the lower the compression efficiency. Currently, the ZEGO Express-Video SDK supports one basic layer and one enhancement layer.</li><li>SVC has a lower coding efficiency: Under the same conditions, SVC has a higher computational complexity than ordinary encoding methods, so the coding efficiency is about 10% lower than ordinary coding methods.</li><li>SVC does not support hardware encoding: SVC does not support hardware coding because it imposes a heavy computational burden on the CPU. But it supports hardware decoding.</li></ul></td>
  </tr>
</tbody></table>

4. **What are the differences between H.264 and H.265?**

<table>
  <colgroup>
    <col>
    <col>
    <col>
  </colgroup>
  <tbody><tr>
    <th>Difference</th>
    <th>H.264</th>
    <th>H.265</th>
  </tr>
  <tr>
    <td>Bitrate with same image quality</td>
    <td>-</td>
    <td>H.265 can save 30% bitrate (measured value) compared to H.264.</td>
  </tr>
  <tr>
    <td>Soft coding</td>
    <td>-</td>
    <td>H.265&nbsp;consumes three times as much computing power as H.264.</td>
  </tr>
  <tr>
    <td>Soft decoding</td>
    <td>-</td>
    <td>H.265&nbsp;consumes 1.5 times as much computing power as H.264.</td>
  </tr>
  <tr>
    <td>Hard coding & decoding</td>
    <td>All models supports hard coding and decoding. </td>
    <td>Most of models do not support hard decoding.</td>
  </tr>
  <tr>
    <td>Output mixed stream</td>
    <td>Supported</td>
    <td>Supported, but will be more expensive than H.264. For details, contact our sales.</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>All</td>
    <td>Recommended: live streaming, interactive audio and video streaming.</td>
  </tr>
</tbody></table>




