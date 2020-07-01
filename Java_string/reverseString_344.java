package Java_string;

public class reverseString_344 {
    public static char[] reverseString(char[] s) {
        int ls = s.length - 1;
        if (ls <= 0) return s;
        for(int i = 0; i <= ls / 2; i++){
            char temp = s[i];
            s[i] = s[ls - i];
            s[ls - i] = temp;
        }
        return s;
    }
}
