package com.example.guice.annotation;

import com.google.inject.AbstractModule;
import com.google.inject.name.Names;

public class AnnotationModule extends AbstractModule {

    protected void configure() {
        bind(IUserService.class).annotatedWith(Names.named("service1"))
                .to(IUserServiceImpl.class);

//        binder.bind(IUserService.class).to(IUserServiceImpl2.class);
        bind(IUserService.class).annotatedWith(CustomService2.class).to(IUserServiceImpl2.class);
    }
}
