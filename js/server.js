'use strict'

const returnThis = function(){
    return this ; 
}


const obj1 = {
    name : 'obj1', 
    method : returnThis 
}


const obj2 = {
    name : "obj2"
}

console.log(returnThis.apply(this,obj2 ) );

console.log(returnThis()) ;