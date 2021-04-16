package com.example.grpc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.example.ping.services.HelloServiceGrpc;
import io.grpc.ManagedChannel;


@Component
public class HelloServiceClient {

    private final ManagedChannel helloChannel;
    private HelloServiceGrpc.HelloServiceBlockingStub helloServiceBlockingStub;

    @Autowired
    public HelloServiceClient(ManagedChannel managedChannel) {
        this.helloChannel = managedChannel;
        this.helloServiceBlockingStub = HelloServiceGrpc.newBlockingStub(this.helloChannel);

    }
}
