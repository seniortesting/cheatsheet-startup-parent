package basic.finall关键字;

// 不可继承
public final class FinalTest {

    public static final int a=3;

    public static void main(String[] args) {

    }

    // 不可覆盖，而非重写
    public final void test1(){
        System.out.println("final test1");
    }
}


//class FinalTester extends FinalTest {
//
//
//}
