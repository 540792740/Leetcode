public class X { 
    public static void main(String [] args) { 
        try { badMethod(); /* Line 7 */ 
        System.out.print("A"); 
        } 
        catch (Exception ex) /* Line 10 */ {
             System.out.print("B"); /* Line 12 */ 
             } 
             finally /* Line 14 */ { System.out.print("C"); /* Line 16 */ 
             } System.out.print("D"); /* Line 18 */ 
             } 
             public static void badMethod() { 
                 throw new RuntimeException(); 
                 }
                  }