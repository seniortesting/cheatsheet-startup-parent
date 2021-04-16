package basic.算法;

import java.util.ArrayList;
import java.util.HashSet;

public class RemoveArrayDuplicate {

    public static void main(String[] args) {
        String[] array={"a", "b", "c", "c", "d", "e", "e", "e", "a"};
    }

    /**
     * 思路1：
     * 利用list添加每个数据，然后将list转为string，利用indexOf查找是否存在该字符，如果不存在就添加
     * 然后利用list转为toArray转为对应的数组
     * @param arr
     * @return
     */
    private static String[] removeDuplicateArray(String[] arr){
        ArrayList<String> arrData = new ArrayList<>();
        arrData.add(arr[0]);
        for (int i = 0; i < arr.length; i++) {
            if(arrData.toString().indexOf(arr[i])==-1){
                arrData.add(arr[i]);
            }
        }
        return (String[]) arrData.toArray(new String[arrData.size()]);
    }

    /**
     * 利用set的不可重复性
     */
    private static String[] removeDuplicateSet(String[] arr){
        HashSet<String> hashSet = new HashSet<>();
        for (int i = 0; i < arr.length; i++) {
            hashSet.add(arr[i]);
        }
        return (String[])hashSet.toArray(new String[hashSet.size()]);
    }
}
