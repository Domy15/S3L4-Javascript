const tombolone = document.getElementById("tombolone");
const btnEstrai = document.getElementById("estrai");
const newSpan = document.getElementById("div1");
const array = [];


document.addEventListener("load", init());


function init() {
    creazioneCelle();
}
btnEstrai.addEventListener("click", numeriRandom);

function creazioneCelle() {
    for (let i = 0; i < 90; i++) {
        const celle = document.createElement("div");
        celle.innerText = i + 1;
        celle.setAttribute("id", `${i}`);
        tombolone.appendChild(celle);
    };
}


function numeriRandom() {
    const num = Math.floor(Math.random() * 90);
    let num2 = document.getElementById(`${ num }`);
    if(array.length === 90){
        alert("Hai estratto tutti i numeri");
        btnEstrai.setAttribute("disabled, true");
        return;
    }else if(array.includes(num)){
        numeriRandom();
    }else{
        array.push(num);
        newSpan.innerText = `Il numero estratto è ${num + 1}`;
        num2.classList.add("highlight");
    };
}