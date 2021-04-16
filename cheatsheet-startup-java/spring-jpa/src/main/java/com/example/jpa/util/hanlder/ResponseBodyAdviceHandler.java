package com.example.jpa.util.hanlder;

import java.util.List;
import org.springframework.http.codec.HttpMessageWriter;
import org.springframework.web.reactive.accept.RequestedContentTypeResolver;
import org.springframework.web.reactive.result.method.annotation.ResponseBodyResultHandler;


public class ResponseBodyAdviceHandler extends ResponseBodyResultHandler {

    public ResponseBodyAdviceHandler(final List<HttpMessageWriter<?>> writers,
            final RequestedContentTypeResolver resolver) {
        super(writers, resolver);
    }
}
