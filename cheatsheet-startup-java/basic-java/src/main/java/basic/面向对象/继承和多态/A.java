package basic.面向对象.继承和多态;

public class A {

    public int func1(int a, int b) {
        return a - b;
    }


    public static void main(String[] args) {
        A a =new B();
        B b =new B();

        System.out.println(a.func1(100,50));
        System.out.println(b.func1(100,50));
    }
}

class B extends  A {
    public int func1(int a ,int b){
        return a+b;
    }
}
