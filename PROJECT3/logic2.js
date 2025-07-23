let h2 = document.querySelector("h2");

h2.innerText=h2.innerText + " from apna college "; 

let divs = document.querySelectorAll(".BOX");

let idx=0;

for(let div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}

// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
