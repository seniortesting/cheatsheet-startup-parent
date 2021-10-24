package com.example.guice.providers.annotation;

import com.example.guice.providers.IProviderService;
import com.google.inject.Inject;

public class ProvideAnnotationDemo {

    @Inject
    private IProviderService providerService;


    public void runData(String threadName){
        providerService.runData(threadName);
    }
}
