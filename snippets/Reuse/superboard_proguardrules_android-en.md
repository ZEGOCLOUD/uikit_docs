In the proguard-rules.pro, add the -keep class configuration for the SDK, which prevents obfuscation of SDK public class names.

```
-keep class im.zego.zegowhiteboard.**{*;}
-keep class im.zego.zegodocs.**{*;}
-keep class im.zego.superboard.**{*;}
```



