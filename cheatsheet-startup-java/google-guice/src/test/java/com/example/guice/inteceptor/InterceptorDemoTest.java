package com.example.guice.inteceptor;

import com.google.inject.Guice;
import com.google.inject.Injector;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class InterceptorDemoTest {


    @Test
    public void interceptorTest() {
        Injector injector = Guice.createInjector(new InterceptorModule());
        InterceptorDemo instance = injector.getInstance(InterceptorDemo.class);
        instance.testInteceptor("thread old");
    }

}