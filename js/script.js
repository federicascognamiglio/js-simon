// DATI
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const givenNums = document.getElementById("given-numbers");
const introSection = document.getElementById("intro-section");
const formSection = document.getElementById("form-section");
const counterElem = document.getElementById("counter");
const resultElem = document.getElementById("result");
const formElem = document.getElementById("user-numbers");


// ESECUZIONE LOGICA
// Events
let counter = 0;
let intervalId = null;
const generatedNums = [];
const userNums = [];
const correctNums = [];

startBtn.addEventListener("click", function () {
    if ((intervalId === null)) {
        for (let i = 0; i < 5; i++) {
            const number = randomNum(1, 10);
            generatedNums.push(number);
            console.log(generatedNums);
            const curNum = generatedNums[i];
            givenNums.innerHTML += `<div class="btn btn-lg btn-outline-primary">${curNum}</div>`
        }
        intervalId = setInterval(function () {
            counter++;
            counterElem.innerHTML = counter;
            if (counter > 10) {
                clearInterval(intervalId);
                intervalId = null;
                introSection.classList.add("d-none");
                formSection.classList.remove("d-none");
            }
        }, 1000);
    }
});

formElem.addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const num3 = document.getElementById("num3").value.trim();
    const num4 = document.getElementById("num4").value.trim();
    const num5 = document.getElementById("num5").value.trim();
    userNums.push(parseInt(num1), parseInt(num2), parseInt(num3), parseInt(num4), parseInt(num5));
    console.log(userNums);
    for (let i = 0; i < userNums.length; i++) {
        curItem = userNums[i];
        if (generatedNums.includes(curItem)) {
            correctNums.push(curItem);
        }
    }
    console.log(correctNums);
    resultElem.classList.remove("d-none");
    resultElem.innerHTML = `Hai indovinato ${correctNums.length} numeri (${correctNums})`;
});

retryBtn.addEventListener("click", function() {
    document.location.reload();
});



// FUNZIONI
/** Funzione che genera numeri random
 * @param {number} min
 * @param {number} max
 * @returns {number}
*/

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}