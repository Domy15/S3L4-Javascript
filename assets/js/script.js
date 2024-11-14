const tombolone = document.getElementById("tombolone");
const btnEstrai = document.getElementById("estrai");
const newSpan = document.getElementById("div1");


document.addEventListener("load", init());


function init() {
    creazioneCelle();
    btnEstrai.addEventListener("click", numeriRandom());
}


function creazioneCelle() {

    for (let i = 0; i < 90; i++) {
        const celle = document.createElement("div");
        celle.innerText = i + 1;
        tombolone.appendChild(celle);
    }
}


function numeriRandom() {
    const celle2 = document.querySelectorAll("#tombolone div");
    const num = Math.floor(Math.random() * 90) + 1;
    newSpan.innerText = `Il numero estratto è ${num}`;
    celle2[num].classList.add("highlight");
}