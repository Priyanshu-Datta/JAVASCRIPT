let arr=[2,4,34,6,8,45,89,12,98,38,123,456,789];

console.log("square of the values:\n");
arr.forEach((val)=>{
    console.log(val**2);
});

console.log("cube of the values:\n")
arr.forEach(function cube(val){
    console.log(val**3);
});