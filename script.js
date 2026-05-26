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
            return (substract(numOne, numTwo));
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


const screen = document.querySelector(".screen")
const bttnsContainer = document.querySelector(".buttons")

function makeNumBttns()
{
    for(let i = 0; i <= 9; i++)
    {
        const number = document.createElement("button");
        number.textContent = i;
        number.addEventListener('click', () => {

            if(sign === "=")
            {
                sign = "";
                numberTwo = "";
                screen.textContent = "";
                screen.textContent += number.textContent;
                numberOne = screen.textContent;
                
            }

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
 if(numberOne != "" && numberTwo != "")
    {
        screen.textContent = "";
        numberOne = operator(sign, numberOne, numberTwo)
        screen.textContent = numberOne;
    }
   
    sign = button.textContent ;
    numberTwo = 0;
}


plus.addEventListener('click', () => {
   signPressed(plus);
})


minus.addEventListener('click', () => {
   signPressed(minus);
})

mult.addEventListener('click', () => {
   signPressed(mult);
})

div.addEventListener('click', () => {
   signPressed(div);
})

clear.addEventListener('click', () =>
{
    screen.textContent = "";
    sign = "";
    numberOne = "";
    numberTwo = "";

})

result.addEventListener('click', () => {
    if(sign != ""  && numberTwo != "")
    {
        screen.textContent = "";
        screen.textContent = operator(sign,numberOne, numberTwo);
    }


   
})

