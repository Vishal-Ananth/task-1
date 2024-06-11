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


function counter(callback,reset){
    var count=1;
    let hasBeenExecuted = false;
    if(reset==true){
        count=0;
        reset=false;
    }
    return function increment(){
        

        console.log(`Clicked ${count} times`);
        let timmer = setTimeout(()=>{
            // if(!hasBeenExecuted){
                callback(count-1);
                // hasBeenExecuted=true;
            // }
            count=1;
        },3000)
        count++;
    };
};

const factorialButton = document.getElementById("btn-1");
const fibonacciButton = document.getElementById("btn-2");
const summationButton = document.getElementById("btn-3");
const exponentButton = document.getElementById("btn-4");
const randomButton = document.getElementById("btn-5");

factorialButton.onclick = counter(factorial,true);
fibonacciButton.onclick = counter(fibonacci,true);
summationButton.onclick = counter(summation,true);
exponentButton.onclick = counter(exponent,true);
randomButton.onclick = counter(randomGen,true);

// console.log(factorialButton);


function factorial(count){

    let fact=1;
    for(let i=1; i<=count; i++){
        fact*=i;
    }
    console.log(fact);
}

function fibonacci(count){
    let [first,second] = [0,1];
    // let arr = [];
    console.log(first);
    console.log(second);
    while(count>0){
        // arr.push(first+second);
        console.log(first+second);
        [first,second] = [second,(first+second)];
        count--;
    }
    // console.log(arr.pop());
}

function summation(count){
    const res = ((count*(count+1))/2);
    console.log(res);

};

function exponent(count){
    console.log(2**count);
}

function randomGen(count){
    console.log(Math.floor(Math.random() * count));
}