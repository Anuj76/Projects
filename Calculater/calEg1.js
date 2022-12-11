const defaultResult =0;
let currentResult=defaultResult;

function add()
{
currentResult = currentResult + parseInt(userInput.value);
outputResult(currentResult,'');
}

function subtract()
{
currentResult = currentResult - parseInt(userInput.value);
outputResult(currentResult,'');
}

function multiply()
{
currentResult = currentResult * parseInt(userInput.value);
outputResult(currentResult,'');
}

function divide()
{
currentResult = currentResult / parseInt(userInput.value);
outputResult(currentResult,'');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);