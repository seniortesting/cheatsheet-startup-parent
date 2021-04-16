package com.example.grpc;

import com.example.ping.services.HelloServiceGrpc;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


@Slf4j
public class TestGrpcClient {

    HelloServiceGrpc.HelloServiceBlockingStub helloServiceBlockingStub;

    @BeforeEach
    public void setupChannel() {
        final ManagedChannel managedChannel = ManagedChannelBuilder.forAddress("localhost", 6565)
                // Channels are secure by default (via SSL/TLS). For the example we disable TLS to avoid 需要的证书
                .usePlaintext().build();
        // 为了使用方便，此处的 ManagedChannel 可以作为一个bean配置起来，然后设置相关的 helloServiceBlockingStub bean这样可以
        // 方便使用
        this.helloServiceBlockingStub = HelloServiceGrpc
                .newBlockingStub(managedChannel);
    }

    @Test
    public void testClient() {
        try {
//            final HelloResponse helloResponse = helloServiceBlockingStub
//                    .sayHello(HelloRequest.newBuilder().setName("Walter").setAge(32).build());
//            LOGGER.info("response is: {}", helloResponse.toString());
        } finally {

        }
    }
}
