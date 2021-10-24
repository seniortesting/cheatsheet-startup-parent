package com.example.guice.constructor;

import com.google.inject.Inject;

public class ConstructorDemo {

    private IUserService userService;

    @Inject
    public ConstructorDemo(IUserService userService) {
        this.userService = userService;
    }

    public void run(String threadName) {
        userService.run(threadName);
    }
}
