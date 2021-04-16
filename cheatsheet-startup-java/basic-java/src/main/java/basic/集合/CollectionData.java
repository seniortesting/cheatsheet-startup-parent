package basic.集合;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class CollectionData {
    public static void main(String[] args) {
        // hashmap, hashtable区别
        HashMap mapdata = new HashMap<String, String>();
        mapdata.put(null, null);
        System.out.println(mapdata);
        // key value 不能为空
        Hashtable<String, String> hashtable = new Hashtable<>();
        hashtable.put("notnull", "test");
        // 多线程map
        Map<String, String> stringStringConcurrentHashMap = new ConcurrentHashMap<>();



        // list相关，排序
        ArrayList<Integer> integers = new ArrayList<>();
        integers.add(32);
        integers.add(43);
        integers.add(53232);
        integers.add(4);
        integers.sort((o1, o2) -> o1.intValue() - o2.intValue());

        // set
        HashSet<String> strings = new HashSet<>();
        strings.add("test1");
        strings.add("test1");

        System.out.println("hashsetis: "+ StrUtil.toString(strings));
    }

}
