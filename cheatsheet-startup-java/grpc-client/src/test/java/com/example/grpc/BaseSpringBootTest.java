package com.example.grpc;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;


@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = { GrpcClientApplication.class },
        webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public abstract class BaseSpringBootTest {

}
