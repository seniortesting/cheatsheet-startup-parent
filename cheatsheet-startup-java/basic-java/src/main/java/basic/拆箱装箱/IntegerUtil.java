package basic.拆箱装箱;

public class IntegerUtil {

    public static void main(String[] args) {
        // 直接构造方法和使用valueOf方法构建，在-128到127之间使用缓存，其他直接构建一个新的对象
        // 装箱过程是通过调用包装器的valueOf方法实现的，而拆箱过程是通过调用包装器的 xxxValue方法实现的。
        Integer i=3;   // 装箱操作，自动调用的是valueOf函数进行装箱，因为在-128到127之间所以使用的是缓存
        int p=i;   // 拆箱操作，自动调用的是intValue函数进行

        Integer i2=3;
        System.out.println(i==i2); // 两个数字相等，如果使用的数字不在这个区间，则是不相等的

        Double d=32.5d;  // 直接调用的ValueOf中的new进行创建，而不使用缓存
        Double d2=32.5d;
        Float f=32.3f;  // 直接调用的valueOf中的new进行创建吧，使用缓存
        System.out.println(d==d2);


        // 测试
        Integer i01=59;
        int i02=59;
        Integer i03=Integer.valueOf(59);
        Integer i04=new Integer(59);

        // 装箱操作，
        System.out.println(i01==i02);
        // 其中第一行等同与Integer.valueOf操作进行装箱
        System.out.println(i01==i03);
        // 第三行是从缓存中取得对应的59，第四行是重新开辟一个内存
        System.out.println(i03==i04);
        //
        System.out.println(i02==i04);

    }
}
