function noofvowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count++;
        }
    }
    return count;
}

let vowels=noofvowels("my name is priyanshu. i am studing javaScript");
console.log("no of vowels: ",vowels);