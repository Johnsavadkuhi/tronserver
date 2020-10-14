
package main 
import "fmt"
import "time"


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

