




/* ++++ scope of var ++++

--> scope essencially means where these variable are avlable for use. var declaration are globally scoped or function locally scoped.

--> the scope is global when the var variable is declare outside a function block is avlable for use in the whole window.

--> var is a function scope when it is declare with in a function. this means that it is avlable and can be accessed only with in that function

 */


// ##### EXAMPLE #####

// var name = 'Rishabh';      // global scoped

// function getName()
// {
//    var say = 'hello';     // function scoped
// }




// --> Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:


// var name = 'rishabh';

// function sayhey()
// {
//    var say = 'hello';
//    console.log(say);
// }

// console.log(say);         // say is not define




// +++ var variable can be re-declared and updated +++

//--> this means that we can do this with in the same scope and won't get an error

                       

// ## EXAMPLE

/* 
var name = 'Rishabh';
var name = 'Mukund';

// and this also

var name = 'Rishabh';
name = 'mukund'; */




// ++++++  Hoisting of var  ++++++

// --> Hoisting is a javascript mechanism where variable and function declaration are moved to the top of there scope before code execution this means that if we do this



// console.log(name);
// var name = 'Rishabh';

// // it is understand as this

// var name;
// console.log(name);
// name='Rishabh';




// ++++++++++++ PROBLEM WITH var ++++++++++++++++




// var name = 'Rishabh';

// var time = 4;

// if(time > 3)
// {
//   var name = "mukund";
// }

// console.log(name);

/* 
--> So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

--> If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary. 
*/






// ++++++++++++++ let ++++++++++++++++



let name = 'Rishabh';
let time = '4';

if(time > 3)
{
    let hello = 'Say Hello';
    console.log(hello);
}

console.log(hello);    // hello is not defined









