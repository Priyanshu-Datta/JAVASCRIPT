let heroes=["ironman","spiderman","superman","batman","blackpanther",];
let fruits=["apple","orange","lichi"];
let criceters=["dhoni","rohit","kohli"];
let footboller=["ronaldo","messi","chhetri"];
let number=[1,2,3,4,5,6,7,8];


heroes.push("antman");
console.log(heroes);

let deletedfruit=fruits.pop();
console.log("deleted",deletedfruit);

criceters.unshift("bunrah");
console.log(criceters);

let deletedfb=footboller.shift();
console.log("deleted",deletedfb);

let comb1=heroes.concat(fruits);
console.log(comb1);

console.log(comb1.toString());

console.log(heroes.slice(1,3));

console.log(number.splice(2,2,101,102));

console.log(number.splice(2,1,101));