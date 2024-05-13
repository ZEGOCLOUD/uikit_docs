- 若您接入的是 **2.8.0 ～ 2.12.0** 版本的 ZEGO Express SDK，此时如果未更新 Token，则在权限位过期时：
    - 已登录的用户不会被踢出房间。
    - 当前已成功的推拉流不受影响，但是会影响用户的下一次推拉流操作。
- 若您接入的是 **2.13.0** 及以上版本的 ZEGO Express SDK：
    - 可以联系 ZEGO 技术支持额外配置权限位过期管理机制，此时如果未更新 Token，则当权限位过期时：
        - 已登录的用户会被踢出房间，且无法再登录房间。
        - 当前已成功的推流会被停止，也无法进行下一次推流。
    - 若未联系 ZEGO 技术支持额外配置权限位过期管理机制，此时如果未更新 Token：
        - 已登录的用户不会被踢出房间。
        - 当前已成功的推拉流不受影响，但是会影响用户的下一次推拉流操作。













