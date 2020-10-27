 'use strict'

const GLOBAL_THIS = this 
const retMe =  () =>  this 

const obj = {
    name : 'obj' , 
    method : retMe 
    
}

console.log(obj.method() === GLOBAL_THIS);
console.log(retMe() === GLOBAL_THIS);