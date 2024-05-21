<div class="mk-hint">

自定义音频处理的数据，是原始音频进行 3A（AEC 回声消除、AGC 自动增益控制、ANS 降噪）处理之后的音频数据：

- 如果开发者需要对原始数据进行处理，请先调用 [enableAEC\|_blank](@enableAEC)、[enableAGC\|_blank](@enableAGC)、[enableANS\|_blank](@enableANS) 接口关闭音频 3A 处理。如果开启了变声、混响、立体声等音效处理（默认是关闭的），也需要先关闭后，才能获取到原始音频数据。
- 如果开发者需要同时获取原始数据和 3A 处理之后的音频数据进行处理，请参考 [自定义音频采集与渲染\|_blank](!AudioAdvanced/custom_audio_io)。
</div>














