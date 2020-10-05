
function bSearch(array , x  ) { 

    let n = array.length ; 
    let beg = 0 ; 
    let end = n - 1 ; 
    let result = -1  ; 

    while(beg <= end ){

        mid = Math.floor((beg + end ) / 2 ) ; 
        
        if(array[mid] <= x ){

            beg = mid + 1 ; 
            result = mid ; 

        }else {
            end = mid-1 ; 

        }
    }
    console.log("result : " , result );
    return result ; 
 
}

console.log(bSearch([1 , 2 , 3 , 4 , 5 ] ,  -10  )); 