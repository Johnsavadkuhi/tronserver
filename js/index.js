

function bSearch(a  , n , low , heigh ) 
{
    if( low <= heigh ) {
        
        const mid = parseInt((low+heigh) / 2)  ; 

        console.log("mid : " , mid );

        if(n < a[mid]){

            bSearch(a , n , low , mid-1 ) ; 
        }
        else if (n > a [mid]){
            bSearch(a , n , mid+1 , heigh)
        }
        else {
            mid
        }

    }
    return -1  ;
}


const a = [2 , 4 , 12 , 34 , 56 , 66 ] ; 


const result = bSearch (a , 66 , 1 , 6 ) ; 

console.log("result : " ,result );