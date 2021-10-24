package com.example.guice.providers;

import com.google.inject.Guice;
import com.google.inject.Injector;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProvidersDemoTest {


    @Test
    public void runProvideTest(){
        Injector injector = Guice.createInjector(new ProviderModule());
        ProvidersDemo providersDemo = injector.getInstance(ProvidersDemo.class);
        providersDemo.setupRunData("from demo runnable");
    }
}