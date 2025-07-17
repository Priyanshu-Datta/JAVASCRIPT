   const prompt = require('prompt-sync')();
   
   let  num=prompt("enter a number:");
   let gamenum=45;

   while(num != gamenum){
      num=prompt("you guase wrong number. try again: ");
   }
  
   console.log("you win");
     
   
   