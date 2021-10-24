package com.example.guice.inject;

import com.google.inject.Singleton;

@Singleton
public class IUserServiceImpl implements IUserService {
    @Override
    public void process(String name) {
        System.out.println("process now, hashcode: " + this.hashCode());
    }
}
