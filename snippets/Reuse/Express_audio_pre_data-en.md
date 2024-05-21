<div class="mk-hint">

The data of custom audio processing is the audio data after 3A (AEC, AGC, ANS) processing of the original audio:

- If the developer needs to process the original data, please call [enableAEC\|_blank](@enableAEC), [enableAGC\|_blank](@enableAGC), [enableANS\|_blank](@enableANS) interface to turn off the audio 3A deal with. If sound effects such as voice changer, reverberation, and stereo are turned on (the default is off), they need to be turned off first before the original audio data can be obtained.
- If the developer needs to obtain the original data and the audio data after 3A processing at the same time, please refer to [Custom Audio Capture and Rendering\|_blank](!ExpressVideoSDK-AudioAdvanced/Custom_Audio_Capture).
</div>





