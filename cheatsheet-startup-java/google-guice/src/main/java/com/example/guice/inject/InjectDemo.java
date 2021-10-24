package com.example.guice.inject;

import com.google.common.base.Strings;
import com.google.inject.Inject;

public class InjectDemo {

    private static final int TIMES = 50;
    @Inject  // 告诉这里的对象使用guice注册实例化
    private IUserService userService;


    public void processChild(String name) {
        String newName = Strings.repeat(name, TIMES);
        userService.process(newName);
    }
}
