package Java_array;
import java.util.*;

public class Gropu49 {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs.length == 0) return new ArrayList();
        Map<String, List> ans = new HashMap<String, List>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = String.valueOf(ca);
            if (!ans.containsKey(key)) ans.put(key, new ArrayList());
            ans.get(key).add(s);
        }
        return new ArrayList(ans.values());
    }
    public static void main(String[] args){
        Gropu49 G1 = new Gropu49();
        String [] str = new String[]  { "eat", "tea", "tan", "ate", "nat", "bat" };
        System.out.println(G1.groupAnagrams(str));
    }
}
