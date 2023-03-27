const num1 = Math.ceil((Math.random()*10))
const num2 = Math.ceil((Math.random()*10))

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let scores = JSON.parse(localStorage.getItem("scores"));

if(!scores){
    scores = 0;
}

scoreEl.innerText = `score: ${scores}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const correctAns = num1 * num1;

formEl.addEventListener("submit", () => {
    const userAnswer = +inputEl.value
    
    if (userAnswer === correctAns) {
        score++;
        console.log(score)
        updateLocalStorage() 
    }else{
        score--;
        console.log(score)
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("scores",JSON.stringify(scores))
}