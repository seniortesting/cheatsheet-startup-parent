package com.example.guice.inteceptor;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

public class MessageLogger implements MethodInterceptor {


    @Override
    public Object invoke(MethodInvocation invocation) throws Throwable {
        Object[] arguments = invocation.getArguments();
        for (Object argument : arguments) {
            System.out.println("logging argument are: " + argument.toString());
        }
        return invocation.proceed();
    }
}
