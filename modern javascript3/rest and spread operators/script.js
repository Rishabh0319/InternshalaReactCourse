

/* ************************** rest Operator ************************ */

// ## WHAT IS (rest) OPERATOR ?

//--> rest operator is accumulates the rest of the argument rest of something into a single variable


// ++++++++ in case of function +++++++
/* 
function someFunction(firstname,lastname,...restOfArgs)
{
    console.log(firstname);
    console.log(lastname);
    console.log(restOfArgs);
}

someFunction('Rishabh', 'Tripathi', 22, 'male', ()=>{}, 'BCA');
 */





// ++++++++ in case of objects +++++++

/* 
const person = {
    name: 'Rishabh',
    age: 22,
    gender: 'male',
    degree: 'BCA',
    college: 'DAMS college',
    skils: ['html','css', 'javascript','C language', 'java', 'c++','React.js','node.js','express.js','mongoDB','git','github]
};

const car = {
   carname: 'seltos',
   model: 'gtx',
   company: 'kia',
   type: 'AWD',
   engentype: 'diesal',
   color: 'black',
   price: '21,59,000',
   year: 2022,
   cc: '2400cc',
   transhmition: ['manual 6 gears', '+dct'],
   braketype: 'ABS',
   airbags: 7,
   topspeed: '200kmph',
   milage: '12kmpl',
   acwents: 6,
   wheels: '17 inches dimondcut alloy'
}


const {carname, model, ...otherRestData} = car;     // object Destructuring with (spread operator)

console.log(carname);
console.log(model);
console.log(otherRestData);


const {name, age, ...restofOtherInfo} = person;      // object Destructuring with (spread operator)

console.log(name);
console.log(age);
console.log(restofOtherInfo);          // restofOtherInfo is return a object which contains rest of other information {Object}

 */





// ++++++++ in case of Array +++++++


const numbers = [12,23,344,5,46,76,78];
const strings = ['Rishabh','Ritik','Rajat','Shivam','Muskan','Urvashi','Tripti','navneet'];

const [firstnumber, secondnumber, ...remainsRestofTheNumbers] = numbers;

console.log(firstnumber);             // it target zerot'h index element
console.log(secondnumber);            // it target first index element
console.log(remainsRestofTheNumbers);   // it target's restof remaining values and folded in single variable [returns ARRAY]


const [firstString, secondString, ...remainsRestofTheStrings] = strings;

console.log(firstString);             // it target zerot'h index element
console.log(secondString);            // it target first index element
console.log(remainsRestofTheStrings);   // it target's restof remaining values and folded in single variable [returns ARRAY]




