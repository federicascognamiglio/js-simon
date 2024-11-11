// DATI
const startBtn = document.getElementById("start-btn");
const givenNums = document.getElementById("given-numbers");
const counterElem = document.getElementById("counter");
const introSection = document.getElementById("intro-section");
const formSection = document.getElementById("form-section");
const resultElem = document.getElementById("result");


// ESECUZIONE LOGICA
// Events
let counter = 0;
let intervalId = null;
const generatedNums = [];
startBtn.addEventListener("click", function () {
    if ((intervalId === null)) {
        for (let i = 0; i < 5; i++) {
            const number = randomNum(1, 10);
            generatedNums.push(number);
            // console.log(generatedNums);
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
})




// FUNZIONI
/** Funzione che genera numeri random
 * @param {number} min
 * @param {number} max
 * @returns {number}
*/

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}