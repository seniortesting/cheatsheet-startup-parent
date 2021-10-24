package com.example.guice.inteceptor;

import com.google.inject.AbstractModule;
import com.google.inject.matcher.Matchers;
import com.google.inject.name.Named;
import com.google.inject.name.Names;

public class InterceptorModule extends AbstractModule {

    @Override
    protected void configure() {
        bindInterceptor(Matchers.any(), Matchers.annotatedWith(MethodLoggable.class),
                new MessageLogger());
        bindConstant().annotatedWith(Names.named("port")).to(8080);
    }
}
