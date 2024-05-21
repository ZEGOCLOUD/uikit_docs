
To disable the face beautification features, set the parameter to `false` when calling the [`enableEffectsBeauty`\|_blank](@enableEffectsBeauty) method. While the face beautification module still occupies resources.

To destroy the face beautification environment and release the resources it occupies, call the [`stopEffectsEnv`\|_blank](@stopEffectsEnv) method before the local video preview and stream publishing.

<div class="mk-hint">

The SDK automatically destroys the face beautification environment when you call the [`destroyEngine`\|_blank](@destroyEngine) method to destroy the SDK. 
</div>



