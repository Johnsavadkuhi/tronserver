
package main

import "fmt" 



func main(){

	var str string = "a" ; 

	hexByte(str) 


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