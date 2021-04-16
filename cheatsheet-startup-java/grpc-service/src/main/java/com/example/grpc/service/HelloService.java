package com.example.grpc.service;

import java.util.ArrayList;
import org.lognet.springboot.grpc.GRpcService;
import com.example.ping.domains.HelloVo;
import com.example.ping.domains.ResponseCode;
import com.example.ping.requests.HelloRequest;
import com.example.ping.responses.HelloResponse;
import com.example.ping.services.HelloServiceGrpc;
import com.google.common.collect.Lists;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;


/**
 * 调用grpc中的定义接口的方法：
 * protobuffer会产生对应的所有定义的接口和
 */
@Slf4j
@GRpcService
public class HelloService extends HelloServiceGrpc.HelloServiceImplBase {

    @Override public void sayHello(final HelloRequest request, final StreamObserver<HelloResponse> responseObserver) {
        try {
            LOGGER.info("调用sayHello RPC method: {},request is: {} ", this.getClass().getName(), request.toString());
            ArrayList<HelloVo> helloVoList = Lists.newArrayList();
            helloVoList.add(HelloVo.newBuilder().setName(request.getName()).setSex(request.getAge()).build());

            final HelloResponse.Result helloResponseData = HelloResponse.Result.newBuilder()
                    .setPageNum(1)
                    .setTotal(100)
                    .addAllRecords(helloVoList).build();
            // 定义返回结果数据
            final HelloResponse helloResponse = HelloResponse.newBuilder()
                    .setData(helloResponseData)
                    .setCode(ResponseCode.SUCCESS)
                    .setMessage("成功")
                    .setTimestamp(String.valueOf(System.currentTimeMillis()))
                    .build();
            // 返回流数据
            responseObserver.onNext(helloResponse);
            responseObserver.onCompleted();
            // 加上一些异步记录操作
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error(e.getMessage());
            responseObserver.onError(e);
        }
    }
}
