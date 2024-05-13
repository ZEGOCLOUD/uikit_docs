<div class="mk-warning">

You will need to set up the video configuration before the stream publishing starts ([`startPublishingStream`\|_blank](@startPublishingStream)) or local video preview starts ([`startPreview`\|_blank](@startPreview)).

Only the encoder resolution and bitrate can be modified after stream publishing. 

</div>


To set up the video configuration, call the [`setVideoConfig`\|_blank](@setVideoConfig-ZegoExpressEngine) method. If you don't customize your video configuration, ZEGO uses the default values as shown below:

|Item|Default value|
|-|-|
|Resolution|360p|
|Bitrate| 600 kbps|
|Framerate|15 fps|


The following sample code is used for setting the video capture resolution to 360p, encoder resolution to 360p, bitrate to 600 kbps, and frame rate to 15 fps:







