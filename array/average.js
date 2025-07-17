let marks=[23,45,67,89,12,24,69,19];
let sum=0;
for(let mark of marks){
    sum +=  mark;
}
let avg=sum/marks.length;
console.log(`total marks=${sum} and average is ${avg}`);