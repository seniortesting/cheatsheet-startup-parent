package com.example.guice.constructor;

public class IUserServiceImpl implements IUserService {
    @Override
    public void run(String threadName) {
        System.out.println("this is thread name: " + threadName);
    }
}
