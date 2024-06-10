/**
 * Create 5 buttons -> each button mapped to a function
 * All function outputs need to be logged in the console
 * 
 * Functions :
 * => Factorial -> Return Factorial of number based on number of clicks
 * => Fibonacci => Return Fibonacci of number based on number of clicks
 * => Summation => if 5 clicks -> return 1+2+3+4+5
 * => Exponent => if 5 Clicks -> return 2**5
 * => Random => if 10 Clicks -> return random between (0,10)
 * 
 * log all values to the console
 * functions should execute only after all clicks are completed
 * no of clicks after every click must be logged to the console
 */


const counter = function noOfClicks(){

    let count=1;
    return function increment(){
        console.log(`Clicked ${count} times`);
        return count++;
    };
}();

const factorialButton = document.getElementById("btn-1");
const fibonacciButton = document.getElementById("btn-2");
const summationButton = document.getElementById("btn-3");
const exponentButton = document.getElementById("btn-4");
const randomButton = document.getElementById("btn-5");

factorialButton.onclick = () =>{factorial(counter)};
fibonacciButton.onclick = () => {fibonacci(0,1,counter)};
summationButton.onclick = () =>{summation(counter)};
exponentButton.onclick = () => {exponent(counter)};
randomButton.onclick = () => {randomGen(counter)};

function factorial(callback){
    const count = callback();
    setTimeout(function(){
            let fact=1;
            for(let i=count; i>1; i--){
                fact*=i;
            }
            console.log(fact);
            return fact;  
        },3000
    );
}

function fibonacci(first,second,callback){
    // let count=callback();
    // setTimeout(
    //     ()=>{
    //         if()
    //     },3000
    // )
}

function summation(callback){
    const count = callback();
    setTimeout(
        ()=>{console.log((count*(count+1))/2);},3000
    )
};

function exponent(callback){
    const count = callback();
    setTimeout(
        ()=>{console.log(2**count);},3000
    )
    
}

function randomGen(callback){
    const count = callback();
    setTimeout(
        ()=>{
            console.log(Math.floor(Math.random() * count)); 
        },3000
    )
}

// factorial(5);
// fibonacci(15,0,1,true);
// console.log(summation(10));
// randomGen(10);


