#include <stdio.h>

int bSearch(int [] , const int , int ) ; 

int main()
{
    const int n = 5 ; 
    int i , item , x[n] ; 

    printf("Enter  %d sorted numbers : " , n ) ; 
    for (i =0 ; i < n ; i++ )
    {
        scanf("%d" , &x[i]) ;

    }
    printf("Enter item to search : " ); 
    scanf("%d" , &item)  ; 

    if(bSearch(x , n , item )) 
    {
        printf("item exist") ; 

    }
    else {
        printf("item not exist.") ; 
    }
    getchar() ; 

    return 0;
}

int bSearch(int x[], const int n, int item)
{
    int loc, found = 0, first = 0, last = n - 1;
    while (first <= last && !found)
    {
        loc = (first + last) / 2;
        if (item < x[loc])
        {
            last = loc - 1;
        }
        else if (item > x[loc])
        {
            first = loc + 1;
        }
        else
        
            found = 1;
    }
    return found;
}
