
package main

import "fmt" 



func main(){

	var a , b  int = 1 , 2
	  
	fmt.Println( a , b  ) 

	a , b  = swap(a , b )
	fmt.Print("a : " , a , "\n b : " ,  b  )
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

 