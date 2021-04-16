package basic.线程;

public class T {
    public static void main(String[] args) {

        int count1 = 100;
        for (int k = 0; k < count1; k++) {
            System.out.println("start time: " + k);
            Thread thread = new Thread() {
                @Override
                public void run() {
                    pong();
                }
            };
            thread.start();
            // start才是启动线程，run只是普通方法调用
            System.out.println("ping");
        }
    }

    static void pong() {
        System.out.println("pong");
    }
}
