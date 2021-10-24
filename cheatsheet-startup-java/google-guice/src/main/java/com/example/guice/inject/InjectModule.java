package com.example.guice.inject;

import com.google.inject.AbstractModule;

public class InjectModule extends AbstractModule {


    protected void configure() {
        bind(IUserService.class).to(IUserServiceImpl.class);
    }
}
