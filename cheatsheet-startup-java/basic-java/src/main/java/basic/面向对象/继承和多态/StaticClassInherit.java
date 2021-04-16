package basic.面向对象.继承和多态;

public class StaticClassInherit {


    public static void print(){
        System.out.println("print1");
    }

    public static void main(String[] args) {
        SubClass.print();
    }
}

class  SubClass extends StaticClassInherit{

    public static void print(){
        System.out.println("print2");
    }
}
