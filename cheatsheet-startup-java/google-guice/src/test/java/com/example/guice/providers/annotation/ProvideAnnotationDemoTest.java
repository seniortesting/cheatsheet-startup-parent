package com.example.guice.providers.annotation;

import com.example.guice.providers.IProviderService;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Key;
import com.google.inject.name.Names;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProvideAnnotationDemoTest {


    @Test
    public void runAnnotationTest(){
        Injector injector = Guice.createInjector(new ProvideAnnotationModule());
        IProviderService providerService = injector.getInstance(Key.get(IProviderService.class, PayPal.class));
        providerService.runData("sample data");

        IProviderService alipay = injector.getInstance(Key.get(IProviderService.class, Names.named("alipay")));
        alipay.runData("alipay");
    }
}