
package main

import "fmt" 



func main(){

	var m  int  = max(4 , 2  ) 
	fmt.Println(m) 
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

 