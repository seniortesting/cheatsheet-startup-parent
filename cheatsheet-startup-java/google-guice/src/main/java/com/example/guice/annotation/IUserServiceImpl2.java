package com.example.guice.annotation;

import com.google.inject.Singleton;

@Singleton
public class IUserServiceImpl2 implements IUserService {
    @Override
    public void run(String threadName) {
        System.out.println("this is implement 2");
    }
}
