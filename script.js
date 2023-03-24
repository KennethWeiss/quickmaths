let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let num1Value;
let num2Value;
let sum;

function getNewValue(){
    return Math.floor(Math.random() * 10);
}

function newProblem(num1Value, num2Value){
    num1Value = getNewValue();
    num2Value = getNewValue();
    sum = num1Value + num2Value;
    num1.innerText = num1Value;
    num2.innerText = num2Value;
}

let userAnswer = document.querySelector("#answerBox");
function checkAnswer(){
    if(userAnswer == sum){
        alert("`user: ${userAnswer}` ");
    }
    alert(sum);
}