### 1. Add transcoding configuration template

Please contact ZEGOCLOUD technical support to add a transcoding configuration template and obtain the corresponding transcoding template ID.

Currently supported transcoding parameters include: resolution, bitrate, frame rate, and video encoding format.


<div class="mk-warning">

- Currently, only video-related parameters can be configured.
- An AppID can add up to 5 transcoding templates. If you need to set more templates, please contact ZEGOCLOUD technical support.
</div>


| Parameter | Description |
| - | - |
| Video Encoding Format | The following video encoding formats are supported: H.264 and H.265. If not filled, it means to maintain the video encoding format of the original stream. |
| Resolution | Supports width range: [0, 3000p]<br>Supports height range: [0, 3000p] |
| Bitrate | The value must be greater than 0, and the unit is bps. |
| Frame Rate | Supports range: [0, 20fps]<br>If you need to output a larger frame rate, please contact ZEGOCLOUD technical support for configuration. |

### 2. Create an engine and log in to the room

Please refer to the [Create engine] and [Join room] sections of the **Quick Start** or **Implementation** document for specific steps.



<div class = 'mk-warning'>

Before implementing single stream transcoding, there needs to be an existing stream in the room.
</div>





