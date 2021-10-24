package com.example.guice.inject;


import com.google.inject.Guice;
import com.google.inject.Injector;
import org.junit.jupiter.api.Test;

class InjectTest {


    @Test
    public void demoRun() {
        Injector injector = Guice.createInjector(new InjectModule());
        InjectDemo useDemo = injector.getInstance(InjectDemo.class);
        useDemo.processChild("tester");
        InjectDemo useDemo1 = injector.getInstance(InjectDemo.class);
        useDemo1.processChild("tester");
    }
}