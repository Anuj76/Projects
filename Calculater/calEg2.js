const defaultResult =0;
let currentResult=defaultResult;

function getUserNumberInput()
{
return parseInt(userInput.value);
}

function add()
{
const enterNumber = getUserNumberInput();
const calcDriscription =`${currentResult} + ${enterNumber}`;
currentResult = currentResult + enterNumber;
outputResult(currentResult,calcDriscription);
}

function subtract()
{
const enterNumber = getUserNumberInput();
const calcDriscription =`${currentResult} - ${enterNumber}`;
currentResult = currentResult - enterNumber;
outputResult(currentResult,'');
}

function multiply()
{
const enterNumber = getUserNumberInput();
const calcDriscription =`${currentResult} * ${enterNumber}`;
currentResult = currentResult * enterNumber;
outputResult(currentResult,'');
}

function divide()
{
const enterNumber = getUserNumberInput();
const calcDriscription =`${currentResult} / ${enterNumber}`;
currentResult = currentResult / enterNumber;
outputResult(currentResult,'');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);