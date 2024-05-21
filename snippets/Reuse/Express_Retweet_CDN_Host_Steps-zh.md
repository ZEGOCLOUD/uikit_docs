  1. 创建引擎后，调用 [enableHardwareEncoder\|_blank](@enableHardwareEncoder) 接口开启硬件编码（若推流后更改配置，需要等下一次推流才生效），开启后会使用 GPU 进行编码，降低 CPU 使用率。
  2. 调用 [isVideoEncoderSupported\|_blank](@isVideoEncoderSupported) 接口查询主播端设备是否支持指定视频编码类型。



