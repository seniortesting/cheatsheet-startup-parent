package basic.str和stringbuffer区别;

public class StrObj {

    public static void main(String[] args) {
        String v = "str1";  // 创建一个对象
        String v2 = new String("str3"); // 新创建一个对象
        String v3 = "hello" + "str2" + 360;  // 在字节码编译器自动拼接+号，运行时只有一个对象

        int value = getValue(2);
        System.out.println(value);

    }

    public static int getValue(int i) {
        int result = 0;
        switch (i) {
            case 1:
                result = result + i;
            case 2:
                result = result + i * 2;
            case 3:
                result = result + i * 3;
        }
        return result;
    }
}
