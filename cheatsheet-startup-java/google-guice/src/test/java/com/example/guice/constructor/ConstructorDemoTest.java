package com.example.guice.constructor;

import com.google.inject.Guice;
import com.google.inject.Injector;
import org.junit.jupiter.api.Test;

class ConstructorDemoTest {


    @Test
    public void testRun(){
        Injector injector = Guice.createInjector(new ConstructorModule());
        ConstructorDemo instance = injector.getInstance(ConstructorDemo.class);
        instance.run("test from me");
    }

}