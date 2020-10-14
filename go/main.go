
package main 
import "fmt"
import "time"

package main


func main() {

   go display("hello")
   display("*****************************")
}

func display (str string) {
   for w:= 0 ; w < 6 ; w++ {
      time.Sleep(1000 * time.Millisecond)
      fmt.Println(str) 
   }
}



func main(){

	var balance  = []float32 {1.2 ,3.5 , 4.4 , 5.4 , 3 } 
	 
	fmt.Println(balance) 
	balance[5] = 44.4 

	fmt.Println(balance , balance[5] )  
 }

func max(num1, num2 int) int {
	/* local variable declaration */
	var result int
 
	if (num1 > num2) {
	   result = num1
	} else {
	   result = num2
	}
	return result 
 }

 func swap(a , b int  ) (int  , int  ) { 

	return b , a  ; 

 }

 
 func hexByte (str string )  {

	for i := 0 ; i < len(str ) ; i++ { 

		fmt.Printf("%b" , str[i])
	}

 }
