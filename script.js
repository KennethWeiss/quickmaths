let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

var num1Value = Math.floor(Math.random() * 10);
var num2Value = Math.floor(Math.random() * 10);

function getNewValue(){
    return Math.floor(Math.random() * 10);
}

function newProblem(){
    num1Value = getNewValue();
    num2Value = getNewValue();
    num1.innerText = num1Value;
    num2.innerText = num2Value;
}