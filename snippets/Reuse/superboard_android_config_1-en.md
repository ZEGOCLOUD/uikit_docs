- 在 “defaultConfig” 节点添加 “ndk” 节点，指定支持的平台类型。
       ```groovy
       ndk {
           abiFilters "armeabi-v7a", 'arm64-v8a'
       }
       ```
    - 在 “android” 节点添加 “sourceSets” 节点，指定 “libs” 所在目录。
       ```groovy
       sourceSets {
           main {
               jniLibs.srcDirs = ['libs']
           }
       }
       ```
