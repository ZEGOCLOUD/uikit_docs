
To set the decryption key for played streams, you can call the [`setPlayStreamDecryptionKey`\|_blank](@setPlayStreamDecryptionKey) method before or after the stream playing operation. 

<div class="mk-warning">

- This method is only available when playing streams from the ZEGOCLOUD Server or Low-Latency Level Streaming Server.
- ZEGOCLOUD supports updating the decryption key during the stream playing operation by calling the [`setPlayStreamDecryptionKey`\|_blank](@setPlayStreamDecryptionKey) method. To update the encryption key, you need to update the decryption key first.
- The decryption key will be cleared if you call the [`stopPlayingStream`\|_blank](@stopPlayingStream) method or the [`logoutRoom`\|_blank](@logoutRoom) method.

</div>







