package com.example.guice.constructor;

import com.google.inject.AbstractModule;

public class ConstructorModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(IUserService.class).to(IUserServiceImpl.class);
    }
}
