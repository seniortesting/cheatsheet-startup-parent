package com.example.guice.providers;

import com.google.inject.Inject;

public class ProvidersDemo {

    @Inject
    private IProviderService iProviderService;
    @Inject
    private IProviderService iProviderService2;


    public void setupRunData(String threadName) {
        iProviderService.runData(threadName+","+iProviderService.hashCode());
        iProviderService2.runData(threadName+","+iProviderService2.hashCode());
    }
}
