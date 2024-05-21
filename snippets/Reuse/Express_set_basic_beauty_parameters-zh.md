初始化美颜环境后，您可以在推流前后，调用 [setEffectsBeautyParam\|_blank](@setEffectsBeautyParam) 接口实时设置美颜效果参数。

- smoothIntensity：磨皮，在保留脸部细节的基础上进行磨皮，比如脸上的痣会保留。
- whitenIntensity：美白，对画面整体调高亮度来美白脸部。
- rosyIntensity：红润，对画面整体进行暖色处理。
- sharpenIntensity：锐化，对画面整体进行锐化处理，当画面有些模糊时可以稍微调大锐化使轮廓清晰。

以上四个参数的取值范围都为 0 ～ 100，取值越大美颜程度越高，默认值为 50。



