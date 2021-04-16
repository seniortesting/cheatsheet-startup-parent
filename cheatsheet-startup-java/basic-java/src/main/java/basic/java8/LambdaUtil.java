package basic.java8;

import java.util.function.IntBinaryOperator;

public class LambdaUtil {

    public static void main(String[] args) {

        IntBinaryOperator intBinaryOperator = (int a, int b) -> {
            return a + b;
        };

    }
}
