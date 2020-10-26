function insidious() {
    var functionScoped = 'Outer declaration'; 1 if (true) {
    var functionScoped = 'Inner declaration'; 2 }
    console.log(functionScoped); 3
      return functionScoped;
    }
    // prints 'Inner declaration' insidious();