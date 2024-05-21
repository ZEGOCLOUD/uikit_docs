当调用 [enableEffectsBeauty\|_blank](@enableEffectsBeauty) 接口设为 “false” 时，会关闭美颜效果，但美颜模块还是会占用资源并消耗性能。如果想彻底释放资源，节省性能消耗，则需要在预览和推流前调用 [stopEffectsEnv\|_blank](@stopEffectsEnv) 接口销毁美颜环境。

<div class="mk-hint">


当调用 [destroyEngine\|_blank](@destroyEngine) 销毁引擎的同时，SDK 会自动销毁美颜环境。
</div>

