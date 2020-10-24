
const car ={

    brand : "honda", 
    
    getBrand:function(){
        
        return this.brand ; 
    }

}



const bike = {
    brand : "BMW" 
}

console.log(car.getBrand.bind({brand:"ho"})() )

