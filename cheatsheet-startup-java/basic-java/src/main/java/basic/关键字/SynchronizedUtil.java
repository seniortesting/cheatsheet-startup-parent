package basic.关键字;

public class SynchronizedUtil {

    /**
     * 需要执行该访问需要获得该对应的类锁
     */
   public static synchronized  void test2(){
       System.out.println("synchronized static method");
   }

    /**
     * 需要执行该代码对应的是该对象实例的对象锁
     */
    public synchronized  void test1(){
        System.out.println("synchronized method");
    }
}
