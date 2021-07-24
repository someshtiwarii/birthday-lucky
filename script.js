
const Lucky=`<div class="label">Hurray!!You are a lucky person!</div> `
const Unlucky=`<div class="label">Oops!!Your birthday is not a lucky number! </div>`



var birthDate = document.querySelector(".birthday");
var inputNum = document.querySelector(".number");
var inputBtn = document.querySelector(".btn");
var outputDiv = document.querySelector(".output");



inputBtn.addEventListener("submit", (e) => {
   e.preventDefault();
    
    let sum=0;
    const dateString = birthDate.toString().split("-");
    
    for(letter of dateString){
     sum = sum + Number(letter);  
    }

    const inputJS= Number(inputNum.value);
    if(sum%inputJS === 0){
        outputDiv.innerHTML = Lucky;
    }
    else{
        outputDiv.innerHTML = Unlucky;
    }
} );
