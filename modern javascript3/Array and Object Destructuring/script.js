// ***************** Normal Object Access *******************

/*
const car = {
                color: 'black',
                gears: 6, 
                engen:'diesel',
            };

const color = car.color;
const gears = car.gears;
const engen = car.engen;

console.log('color ' + color);
console.log('gears ' + gears);
console.log('engen ' + engen);
 */

//     ***************  object Destructuring  ***************

/* 
const car = {
                color: 'black',
                gears: 6, 
                engen:'diesel',
            };

const {color, gears, engen} = car;          //NOTE: you only destructure object key name as same name

// const {carColor, carGears, carEngen} = car;    // Error occures

console.log('color ' + color);
console.log('gears ' + gears);
console.log('engen ' + engen); 

//NOTES
//-->  object Destructuring is just pool keys from object

*/

//     ***************  object Destructuring (custom name)  ***************

/* 
const car = {
    color: 'black',
    gears: 6, 
    engen:'diesel',
};

// const {color, carEngen} = car;        // wrong

// console.log('color: ' + color);         // black
// console.log('engen: ' + carEngen);      // undefine


const {color, engen: carEngen} = car;      // object custom Name

console.log('color: ' + color);         // black
console.log('engen: ' + carEngen);      // diesel

*/

// ************************* passing object while function calling *************************
/* 
const car = {
    color: 'black',
    engen: 'diesel',
    gears: 6
}

function fun(reciveObject){                     // this is normal way
   console.log('color: ' + reciveObject.color);
   console.log('engen: ' + reciveObject.engen);
   console.log('gears: ' + reciveObject.gears);
}

fun(car);    // call


function fun2({color,engen,gears})               // object destructuring get direct access to object properties
{
   console.log('color: ' + color);
   console.log('engen: ' + engen);
   console.log('gears: ' + gears);
}

fun2(car);     // call

 */

// ************************* default arguments (if we are not providing object while calling) *************************
/* 
const car = {
  color: "black",
  gears: 6,
  engen: "diesel",
  company: "kia",
  model: "seltos",
};

function fun(carObject = {}) {
  const {color = "white", gears = 4, engen = "petrole", company = "marutisuzuki", model = "alto"} = carObject; // default object property values

  console.log('color: ' + color);
  console.log('gears: ' + gears);
  console.log('engen: ' + engen);
  console.log('company: ' + company);
  console.log('model: ' + model);
}

// fun(car);   // provide object
fun();      // what is we don't provide any arguments or (object) ?


 */





// ************************* Array Destructuring *************************

/* 
const someArr = [12,23,34,45,56,67,78,89];

// NOTE:  in array destructuring order is important      DHYAN RAKHNA

const [num1,num2,num3] = someArr;    // array Destructuring

console.log(num1);
console.log(num2);
console.log(num3);
 */



