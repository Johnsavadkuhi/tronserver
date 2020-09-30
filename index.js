
function replaceSpaces(str ){
    str = str.trim()
    const strArray = str.split('') ; 
    console.log(strArray) ; 
    
    for(let i = 0 ; i < strArray.length ; i++ ){
        if(strArray[i] === ' '){
            strArray[i] = '%20' ; 
        }
        
    }

    console.log(strArray.join(''));
}

replaceSpaces("h i    ")