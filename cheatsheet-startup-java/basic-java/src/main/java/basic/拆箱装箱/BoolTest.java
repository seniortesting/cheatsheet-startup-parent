package basic.拆箱装箱;

public class BoolTest {

    public static void main(String[] args) {
        Boolean flag = false;
        String s = "test";
//        Java里只有boolean类型可以作为判断条件，其他类型必须通过操作反回boolean值,这里本来就是boolean类型，可以充当判断条件。
        if (flag = true) { // 此处为赋值语句，而非判断flag==true, 无论变量flag的值是true还是false答案都是true
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}
