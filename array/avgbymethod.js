let nums=[23,45,67,89,123,567,489];

console.log("average of the numbers:");
let sum= nums.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(sum/nums.length);

console.log("product of the numbers:");
let prod=nums.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(prod);