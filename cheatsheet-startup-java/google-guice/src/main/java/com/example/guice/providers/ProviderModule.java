package com.example.guice.providers;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;

public class ProviderModule extends AbstractModule {

    @Provides
    @Singleton
    public IProviderService getProviderService(){
        return new IProviderServiceImpl();
    }
}
