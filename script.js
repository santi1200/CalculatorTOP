function add(a,b)
{
    return a + b;
}

function substract(a,b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
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
            return (substract(numOne, numTwo));
        case "*":
            return (multiply(numOne, numTwo));
            
        case "/":
            return (divide(numOne, numTwo));
            
        default:
            console.log("you inserted an invalid operator");
    }
    

}

let numberOne = "";
let numberTwo = "";
let sign = "";


const screen = document.querySelector(".screen")
const numbersContainer = document.querySelector(".numbers")

function makeNumBttns()
{
    for(let i = 0; i <= 9; i++)
    {
        const number = document.createElement("button");
        number.textContent = i;
        number.style.height = "25%"
        number.style.width = "20%"
        number.style.margin = "5px"
        number.addEventListener('click', () => {
            

            if(numberTwo === "" )
            {
                screen.textContent += number.textContent;
                numberOne = screen.textContent;
            }

            if(sign != ""  )
            {
                screen.textContent = "";
                screen.textContent += number.textContent;

                numberTwo = screen.textContent;
            }
        })
        numbersContainer.appendChild(number)
    }

}

makeNumBttns();

const plus = document.querySelector("#plus");
plus.addEventListener('click', () => {
    if(numberOne != "" && numberTwo != "")
    {
        screen.textContent = "";
        numberOne = operator(sign, numberOne, numberTwo)
        screen.textContent = numberOne;
    }
   
    sign = plus.textContent ;
    numberTwo = 0;
    
})

const result = document.querySelector("#equal");
result.addEventListener('click', () => {
    
    screen.textContent = ""
    screen.textContent = operator(sign,numberOne, numberTwo);
   
    
})

