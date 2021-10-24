package com.example.guice.annotation;

import com.google.inject.Guice;
import com.google.inject.Injector;
import org.junit.jupiter.api.Test;

class AnnotationTest {


    @Test
    public void testRun() {
        Injector injector = Guice.createInjector(new AnnotationModule());
        AnnotationDemo annotationDemo = injector.getInstance(AnnotationDemo.class);
        annotationDemo.process("100");
    }
}