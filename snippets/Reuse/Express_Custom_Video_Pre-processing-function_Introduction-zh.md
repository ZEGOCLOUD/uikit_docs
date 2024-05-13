视频前处理是介于采集和编码之间的一个流程，开发者自行采集视频数据，获取到 SDK 采集的视频数据后，可以通过 SDK 自带的基础美颜和水印功能，进行视频前处理。如果 SDK 无法满足开发者需求（例如美颜效果无法达到预期），还可以搭配 ZEGO Effects SDK 对视频进行一些特殊处理，例如美颜、添加挂件等，该过程即为自定义视频前处理。

<img src="/Pics/Common/ZegoExpressEngine/video_pre_processing.png" alt="流程图">  
	 
自定义视频前处理与自定义视频采集相比，优势在于无需开发者管理设备输入源，仅需对 ZEGO Express SDK 抛出来的原始数据进行操作，然后发回 ZEGO Express SDK 即可。
 
<div class="mk-hint">
 
对于比较复杂的场景，例如想通过摄像头画面做图层混合，建议开发者使用 [自定义视频采集\|_blank](!VideoAdvanced/CustomVideoCapture) 功能实现，该方式性能优化的空间更大。  
	 
</div>









