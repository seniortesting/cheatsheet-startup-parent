package basic.str和stringbuffer区别;

import cn.hutool.core.text.StrBuilder;

public class SBUtil {

    public static void main(String[] args) {
        String s = "test"; //final类型不可改变，所以提供了StringBuffer,StringBuilder两个可变操作
        //
        StringBuffer stringBuffer = new StringBuffer();  //synchronized，用于多线程
        StringBuilder stringBuilder = new StringBuilder();
        stringBuffer.append("test");
        stringBuilder.append("test2");

        System.out.println(s + ", " + stringBuffer.toString() + "," + stringBuilder.toString());

        String sr = "祝你考出好成绩！";
        System.out.println(sr.length());
    }
}
