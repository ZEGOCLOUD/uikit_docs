Through the stream-mixing service, multiple published media streams can compose a single stream , which allows audiences to play just one stream to improve quality and reduce performance cost.

<div class="youtube-video-container">
    <iframe src="https://www.youtube.com/embed/8YJ3kkFQIG0" title="ZEGOCLOUD Key Concept Intro: What is Stream-Mixing?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


ZEGOCLOUD supports using stream mixing with three methods, manual stream mix, automatic stream mix, and full-automatic stream mix.
The following table shows their differences:

<table>
  <colgroup>
    <col width="10%">
    <col width="18%">
    <col width="18%">
    <col width="18%">
  </colgroup>
  <tbody><tr>
    <th>Method</th>
    <td>Manual</td>
    <td>Auto</td>
    <td>Full-Auto</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Customize the stream mixing tasks and content, including input stream, layout, etc. Supports mixing audio/video streams.</td>
    <td>In specified rooms, automatically mixing the audio streams. Only supports mixing the audio streams.</td>
    <td>In each room, automatically mix the audio streams. Only supports mixing the audio streams.</td>
  </tr>
  <tr>
    <th>Scenario</th>
    <td>Co-hosting across rooms, video/audio streams mixing, and specified stream mixing, etc.</td>
    <td>Audio-only scenarios.</td>
    <td>Audio-only scenarios.</td>
  </tr>
  <tr>
    <th>Pros</th>
    <td>Flexible and enable you to implement logic according to business needs.</td>
    <td>It reduces the complexity of integration, and does not required to manage the audio stream list of the specified rooms. </td>
    <td>With very low complexity of integration, and does not required to manage the in-room audio stream mixing task and audio stream list. </td>
  </tr>
  <tr>
    <th>Relation with the server</th>
    <td>The client side initiates the stream mixing task and manages the stream list.</td>
    <td>The client side initiates the stream mixing task, and the ZEGO server automatically manages the in-room input stream list.</td>
    <td>The ZEGO server manages the stream mixing tasks and the in-room stream list. </td>
  </tr>
</tbody></table>


#### Use cases

You can use stream mixing for various use cases. The following are some typical examples:

- When client devices are not capable of processing the required number of streams simultaneously. 
- When it is required to synthesize multiple live videos into one single view. For example, to display the teacher's video and the students' videos in a synthesized view.
- When it is required to synthesize multiple audios into one single stream, especially for the voice chatroom scenarios. 


#### Why stream mixing?

- It reduces the complexity of development. For example, when multiple users co-host an interactive live streaming event, it's much easier to receive and play just one single mixed stream rather than to receive and play multiple streams and do the screen layout for each stream individually.
- It reduces the requirements on the client device's performance and network bandwidth. Having more streams to process means more system resources and network bandwidth are required. With stream mixing, the burden of processing multiple streams is removed from the client side.   
- It makes it much easier to forward multiple streams to multiple CDNs. You can achieve this by doing simple output stream configurations for stream mixing tasks.
- When it is required to record multiple streams for future playback, the recording can be done on the CDN to which the mixed stream is forwarded.
- Stream mixing also makes content moderation easier because it can be done by checking the mixed stream rather than checking multiple streams individually.








