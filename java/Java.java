public class Java {
   public static void main(String []args) {

      MyClass myclass = new MyClass(3) ; 
   
      
      myclass.printy();
    }
 }

 class MyClass{

   MyClass(int x  ){
       y = x ; 
   }
   private int y ; 

   public void printy(){
      System.out.println(y) ; 
   }

 }