package com.example.guice.providers;

public class IProviderServiceImpl implements IProviderService {
    @Override
    public void runData(String data) {
        System.out.println("get service data: "+data);
    }
}
