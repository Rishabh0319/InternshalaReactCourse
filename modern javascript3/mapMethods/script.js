
let nums = [12,23,34,45,56];

// nums.map((value,index,arr)=>{
//     console.log(value,index,arr);
// });


const result = nums.map((value,index,arr)=>{
    return value * 2;
});

console.log(result);