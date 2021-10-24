package com.example.guice.inteceptor;

import com.google.inject.Inject;
import com.google.inject.name.Named;

public class InterceptorDemo {

    @Inject
    @Named("port")
    private int port;

    @MethodLoggable
    public void testInteceptor(String demo) {
        System.out.println("this is demo test: " + demo);
        System.out.println("port is: " + port);
    }
}
