package com.example.guice.annotation;

import com.google.inject.Inject;
import com.google.inject.name.Named;

public class AnnotationDemo {

    @Inject
    @Named("service1")
    private IUserService userService1;
    @Inject
    @CustomService2
    private IUserService userService2;


    public void process(String repeatNumber) {
        userService1.run(repeatNumber);
        userService2.run(repeatNumber);
    }
}
