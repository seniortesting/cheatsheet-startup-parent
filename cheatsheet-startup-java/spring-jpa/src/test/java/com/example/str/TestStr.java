package com.example.str;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Objects;
import java.util.Optional;


@Slf4j
public class TestStr {

    @Test
    public void testNullString() {
        String str = "";

        final boolean present = Optional.ofNullable(str).isPresent();
        Assertions.assertTrue(present);

        final boolean nonNull = Objects.nonNull(str);
        Assertions.assertTrue(nonNull);
        try {
            Thread.sleep(3000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}
