function add(a,b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if(b === 0)
    {
        return "Sorry, you can't divide by 0"
    }
    return Number(a / b).toFixed(2);
}


function operator(operator, numOne, numTwo)
{

    numOne = Number(numOne);
    numTwo = Number(numTwo);
    switch (operator)
    {
        case "+":
            return (add(numOne, numTwo));
    
        case "-":  
            return (subtract(numOne, numTwo));
        case "*":
            return (multiply(numOne, numTwo));
            
        case "/":
            return (divide(numOne, numTwo));
            
        default:
            return "you inserted an invalid operator";
    }
    

}

let numberOne = "";
let numberTwo = "";
let sign = "";
let clearScreen = false;
let done = false;

const screen = document.querySelector(".screen")
const bttnsContainer = document.querySelector(".buttons")

function makeNumBttns()
{
    for(let i = 0; i <= 9; i++)
    {
        const number = document.createElement("button");
        number.textContent = i;
        number.addEventListener('click', () => {
            if(done === true)
            {
                done = false
                screen.textContent = "";
                sign = "";
                numberOne = "";
                numberTwo = "";
            }


             if(sign === "" )
            {
                screen.textContent += number.textContent;
                numberOne = screen.textContent;
            }
            else
            {
                if(clearScreen === true)
                {
                    screen.textContent = "";
                    clearScreen = false;
                }
                screen.textContent += number.textContent;
                numberTwo = screen.textContent;
            }
        })
        bttnsContainer.appendChild(number)
    }

}

makeNumBttns();

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mult = document.querySelector("#multiply");
const div = document.querySelector("#divide");
const result = document.querySelector("#equal");
const clear = document.querySelector("#clear");

function signPressed(button)
{
  clearScreen = true;
  done = false;
 if(numberOne != "" && numberTwo != "")
    {
        screen.textContent = "";
        numberOne = operator(sign, numberOne, numberTwo)
        screen.textContent = numberOne;
        numberTwo = "";
    }
   
    sign = button.textContent ;
    
}

[plus, minus, mult, div].forEach(button => {
    button.addEventListener("click", () => {
        signPressed(button);
    });
});

result.addEventListener('click', () => {
    if(sign != ""  && numberTwo != "")
    {
        screen.textContent = "";
        screen.textContent = operator(sign,numberOne, numberTwo);
        done = true;
    }
})


clear.addEventListener('click', () => {
     screen.textContent = "";
                sign = "";
                numberOne = "";
                numberTwo = "";
})