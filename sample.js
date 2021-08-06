// Shadowing
// If we declare a local variable and a global variable with the same name, the local variable will take precedence when it is referred inside a function. It is called shadowing, the inner variable shadows the outer variable. 

// Shadowing in var
console.log("Shadowing in var")
var msg = 'Welcome ';
var name = 'Krishna';

function greet(){
  var name = 'Sai';
  if(true){
    console.log(msg + name); // o/p: Hello Sai - Reason: inside the funtion, local variable will take precedence when it is referred inside a function
  }
}

greet();
console.log(msg + name) // o/p: Welcome Krishna - Reason:  we are reffering to globally declared variable name

//shadowing in let 
console.log("Shadowing in let")
function food() {
    let a = 'Pizza';
      
    if (true) {
        let a = 'Burger';  // New value assigned
        console.log("Inside if block, a is: "+a); 
    }
      
    console.log("Outside if block and inside function, a is: "+a); 
}
food();


//Hoising: In JS, All variable declarations are moved to the top of their scope.

function n(){
  
  console.log(new_msg)// Here value is undefined, becuase the variable new_msg is declared inside the function but not initialized and decalaraion moved to top due to Hoisting
  var new_msg;
  if(true){
    var new_msg = 'Hello World';
  }
  console.log(new_msg);
}

n();
//console.log(new_msg); // o/p: ReferenceError: mesg is not defined -- reason: new_msg variable is declared inside the fucntion n so we will get error here

// let and const are hoisted, but there is a period between entering scope and being declared where they cannot be accessed. This period is the dead zone.
function sample(){
  
  //console.log(topic) // o/p:  Cannot access 'topic' before initialization - Reason:  Here topic is not declared and intilaized yet and hence it can't be accessed.
  let topic='Java Script';
  
  console.log(topic); //o/p: Java Script
}

sample();