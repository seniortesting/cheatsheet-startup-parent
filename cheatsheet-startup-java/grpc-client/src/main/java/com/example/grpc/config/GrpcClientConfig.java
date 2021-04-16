package com.example.grpc.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;


@Configuration
public class GrpcClientConfig {

    private String host;
    private int port;

    @Autowired
    private ManagedChannel managedChannel() {
        ManagedChannelBuilder<?> managedChannelBuilder = ManagedChannelBuilder
                .forAddress(host, port).usePlaintext()
                .usePlaintext();
        ManagedChannel channel = managedChannelBuilder.build();
        return channel;
    }
}
