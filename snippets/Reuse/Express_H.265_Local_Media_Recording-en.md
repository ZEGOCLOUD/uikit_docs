If the H.265 encoding/decoding feature is used for On-Premises Recording, Cloud Recording, the generation of recorded files will be affected as follows:

When recoding the stream publishing (using the H.265 for video encoding), the adaptive degradation may be triggered. In this case, the SDK sends outa notification that the video encoding format changed through the callback [`onPublisherVideoEncoderChanged`\|_blank](@onPublisherVideoEncoderChanged).

In this case, to prevent file damage, the SDK ends and saves the current recording task, and starts a new recording task automatically. And generates a new file and storage path of the new recording task to prevent from overwriting the original recorded file. The new file name will have a timestamp for identification.


For example, the original path of the recording file is **/user/data/mediarecord.mp4.** And the new path will change to: **/user/data/mediarecord_1626880634948.mp4**, and the `1626880634948` is the timestamp.


<div class="mk-hint">

If you have received notification through the callback [`onPublisherVideoEncoderChanged`\|_blank](@onPublisherVideoEncoderChanged), then you need to collect other files under the storage path of the recording file when recording is completed.

</div>





