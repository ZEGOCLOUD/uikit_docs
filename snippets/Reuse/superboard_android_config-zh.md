1. 添加 SDK 引用，进入到 “app” 目录，打开 “build.gradle” 文件。

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

2. 在 “app/build.gradle” 文件中的 `dependencies` 节点下添加以下代码:

   ```groovy
   implementation fileTree(include: ['*.jar', '*.aar'], dir: 'libs')
   ```

3. SDK 依赖以下模块，在 “app/build.gradle” 文件中的 `dependencies` 节点下添加以下代码:

   ```groovy
   // 如果需要在纯java项目中集成,需要添加此依赖项
   implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.4.30" // 文档编写时最新版本为1.4.30
   ```

示例代码中 “libs” 目录仅为举例，开发者可根据实际路径填写。








