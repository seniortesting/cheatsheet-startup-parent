package com.example.guice.providers.annotation;

import com.example.guice.providers.IProviderService;
import com.example.guice.providers.IProviderServiceImpl;
import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.google.inject.name.Named;

public class ProvideAnnotationModule extends AbstractModule {

    @PayPal
    @Provides
    @Singleton
    public IProviderService getService(){
        return new IProviderServiceImpl();
    }


    @Named("alipay")
    @Provides
    @Singleton
    public IProviderService getService2(){
        return new IProviderServiceImpl();
    }
}
