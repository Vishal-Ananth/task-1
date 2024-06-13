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

function counter(callback,operation){
    let count=1;
    let timeout=null;
    const top = document.getElementById("top");
    let card ;
    let cardWrapper ;
    let logContainer;


    return function increment(){
        if(count==1){

            // console.log(top.hasChildNodes());
            if(top.hasChildNodes()){
                const olderCard = top.firstChild;
                card = document.createElement("div");
                card.setAttribute("class","card");
                top.insertBefore(card,olderCard);
            }else{
                card = document.createElement("div");
                card.setAttribute("class","card");
                top.appendChild(card);
            }

            

            cardWrapper = document.createElement("div");
            cardWrapper.setAttribute("class","card-wrapper")
            card.appendChild(cardWrapper)

            logContainer = document.createElement("div");
            logContainer.setAttribute("class","log-container");
            cardWrapper.appendChild(logContainer);
        }
      
        if(timeout) {
            clearTimeout(timeout);
        }

        const logValue = document.createElement("div");
        logValue.setAttribute("class","log")
        logValue.textContent = `Clicked ${count} times`;
        logContainer.appendChild(logValue);

        timeout = setTimeout(()=>{
            
            const result = document.createElement("div");
            result.setAttribute("class","result")
            result.textContent = `${operation} Result : ${callback(count-1)}`
            cardWrapper.appendChild(result);
            count=1;
        },1500);

        count++;
    };
};

const factorialButton = document.getElementById("btn-1");
const fibonacciButton = document.getElementById("btn-2");
const summationButton = document.getElementById("btn-3");
const exponentButton = document.getElementById("btn-4");
const randomButton = document.getElementById("btn-5");

factorialButton.onclick = counter(factorial,"Factorial");
fibonacciButton.onclick = counter(fibonacci,"Fibonacci");
summationButton.onclick = counter(summation,"Summation");
exponentButton.onclick = counter(exponent,"Exponent");
randomButton.onclick = counter(randomGen,"Random");

function factorial(count){
    return (count==1) ? 1 : (count*factorial(count-1));
}

function fibonacci(count){
    return (count==0 || count==1)? 1 :(fibonacci(count-1)+fibonacci(count-2));     
}

function summation(count){
    
    const result = ((count*(count+1))/2);
    return result;

};

function exponent(count){
    const result = 2**count;
    return result;
        
}

function randomGen(count){
    const result = Math.floor(Math.random() * count);
    return result;
}