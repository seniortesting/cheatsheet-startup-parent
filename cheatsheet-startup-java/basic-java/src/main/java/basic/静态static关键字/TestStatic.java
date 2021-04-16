package basic.静态static关键字;

public class TestStatic {

    static int cnt = 6;

    static {
        cnt += 9;
    }

    public static void main(String[] args) {
        System.out.println("cnt=" + cnt);
    }

    static {
        cnt /= 3;
    };
}
