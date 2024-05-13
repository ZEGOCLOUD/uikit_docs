1. **How to deal with the error when using the H.265 for decoding?**

Call the [`enableH265EncodeFallback`\|_blank](@enableH265EncodeFallback) method to enable the adaptive degradation feature (enabled by default). The SDK automatically uses the H.264 decoding when the failed to decode using H.265. If you are recording at the same time, the recording file will be doubled.


2. **Does H.265 automatically degrade from hardware decoding to software decoding?**

Yes. If the hardware encoding fails is found during decoding, it adaptive degrades to soft decoding.


3. **What's the billing plan of the H.265?**

It's free to only enable the H.265 feature. But it starts to charge if you output H.265 mixed streams, which is higher on the price than H.264. For details, contact our sales.


4. **Is there any change in charging when I want to input H.265 stream and output H.264 mixed stream?**

There are no changes. The pricing is based on the output H.264 mixed streams.

5. **What are the hardware requirements for H.265 decoding?**


All models currently on the market support H.265 decoding. And for outdated or low-end models before 2013 may have framerate fluctuations.











