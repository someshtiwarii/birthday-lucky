const pass=`<div class="label">Yay!! Your birthday is a lucky number!</div>`
const fail=`<div class="label">Oops!! Your birthday is not a lucky number!</div>`


const date = document.querySelector("#pickDate");
const luckyNo = document.querySelector("#luckyNum");

const outputDiv= document.querySelector(".output");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dateString = ((date.value).split('-')).join("");
    let sum=0;
    for(letter of dateString){
     sum = sum + Number(letter);  
    }
    const luckyNoJS= Number(luckyNo.value);
    if(sum%luckyNoJS ===0){
        outputDiv.innerHTML = pass;
    }
    else{
        outputDiv.innerHTML = fail;
    }
} );
