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


function counter(callback){
    let count=1;
    return function increment(){
        console.log(`Clicked ${count} times`);
        setTimeout(()=>{
            callback(count-1);
        },3000)
        count++;
    };
};

const factorialButton = document.getElementById("btn-1");
const fibonacciButton = document.getElementById("btn-2");
const summationButton = document.getElementById("btn-3");
const exponentButton = document.getElementById("btn-4");
const randomButton = document.getElementById("btn-5");

factorialButton.onclick = counter(factorial);
fibonacciButton.onclick = counter(fibonacci);
summationButton.onclick = counter(summation);
exponentButton.onclick = counter(exponent);
randomButton.onclick = counter(randomGen);

// console.log(factorialButton);

function printOnce(val){
    let hasBeenExecuted = false;
    return function(){
        if(hasBeenExecuted==false){
            hasBeenExecuted=true;
            console.log(val);
        }
    }
}

function factorial(count){

    let fact=1;
    for(let i=1; i<=count; i++){
        fact*=i;
    }
    console.log(fact);
}

function fibonacci(count){
    let [first,second] = [0,1];
    let arr = [];
    // console.log(first);
    // console.log(second);
    while(count>0){
        arr.push(first+second);
        [first,second] = [second,(first+second)];
        count--;
    }
    console.log(arr.pop());
}

function summation(count){
    const res = ((count*(count+1))/2);
    console.log(res);

    // console.log((count*(count+1))/2)
};

function exponent(count){
    console.log(2**count);
}

function randomGen(count){
    console.log(Math.floor(Math.random() * count));
}