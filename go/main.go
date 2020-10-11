
package main




func main(){
fmt.Println(max(4 , 3 )) 
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
