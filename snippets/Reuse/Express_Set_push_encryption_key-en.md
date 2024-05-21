
To generate the encryption key for published streams, you can call the [`setPublishStreamEncryptionKey`\|_blank](@setPublishStreamEncryptionKey) method before or after the stream publishing operation. 
You can set the 16/24/32-byte encryption key as needed.
When playing the encrypted stream, you will need to provide the decryption key that is consistent with the encryption key; Otherwise, the stream playing will fail.

<div class="mk-warning">

- This method is only available when publishing streams to the ZEGOCLOUD Server.
- ZEGOCLOUD supports updating the encryption key during the stream publishing operation by calling the [`setPublishStreamEncryptionKey`\|_blank](@setPublishStreamEncryptionKey) method. To update the encryption key, you need to update the decryption key first.
- If you updated the decryption key before updating the encryption key, some frames of the played streams may fail to be decrypted, thus, the stream playing will fail. But if you update the keys in the right order, the ZegoExpress SDK stores both the old and new keys to achieving smooth switching.
- The encryption key will be cleared if you call the [`stopPublishingStream`\|_blank](@stopPublishingStream) method or the [`logoutRoom`\|_blank](@logoutRoom) method.

</div>






