H.265 is a high-efficiency video coding, which offers better data compression at the same level of video quality, or substantially improved video quality at the same bitrate. 

You can select H.265 as a mixed output format when coding or mixing streams.


<div class="mk-hint">


ZEGOCLOUD's SDKs support this feature starting from version 2.12.0 (release date: 2021-09-09).
</div>

The following shows the differences between H.265 and H.264: 

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


#### Use cases

- Live video streaming, interactive live streaming, live game streaming: 
With H.265, CDN delivery costs can be reduced by halving the bitrate.

- Video calling, video conference, online education: 
With H.265, realize better calling effect and more clear image quality at the same bitrate.


<div class="mk-warning">


Currently, co-hosting and playing H.265 streams are not supported on Web pages and mini programs.
</div>


#### Basic concepts

- Video encoding: the process of converting a given video input into a specific format that is compatible with most types of Web players and mobile devices. 

- Stream mixing: the process of combining multiple media streams into a single stream on the cloud. ZEGO supports using stream mixing with three methods, manual stream mix, automatic stream mix, and full-automatic stream mix. For details, see [Stream mixing\|_blank](!Other_Functions/Mixer).

- Stream forwarding to CDN: the process of forwarding streams from ZEGO Cloud to CDN (Content Delivery Network). For details, see [Publishing streams via CDN\|_blank](!Publisher_Player_Advanced/RelayToCDN).

- Co-hosting: a form of interaction between the users in the rooms. Users can call the [`startPublishingStream`\|_blank](@startPublishingStream) method to publish their own streams, and call the [`startPlayingStream`\|_blank](@startPlayingStream) method to play the remote users' streams for interactive communication.




























