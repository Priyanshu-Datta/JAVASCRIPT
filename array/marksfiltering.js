let marks=[56,67,12,89,93,78,45,94,96,87,98];

let grade_O=marks.filter((val)=>{
    return val>90;
});
console.log("O grade marks",grade_O);

let grade_A=marks.filter((val)=>{
    return val>80;
});
console.log("A grade marks",grade_A);