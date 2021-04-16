package com.example.str;

import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import com.google.common.base.Stopwatch;
import lombok.extern.slf4j.Slf4j;


@Slf4j
public class TestStr {

    @Test
    public void testNullString() {
        String str = "";
        final Stopwatch stopwatch = Stopwatch.createStarted();
        final boolean present = Optional.ofNullable(str).isPresent();
        Assertions.assertTrue(present);

        final boolean nonNull = Objects.nonNull(str);
        Assertions.assertTrue(nonNull);
        try {
            Thread.sleep(3000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        LOGGER.info("time cost: {}", stopwatch.elapsed(TimeUnit.MILLISECONDS));

    }
}
