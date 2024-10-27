
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    console.log(num);
    var val = f(n);
    document.getElementById("fibonacciLbl").innerText = `${val}`
    // return val;
}


function f(n) {
    var value = 0;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        console.log(`${n} has own property`)
        value = memo[n];
        
    } else {
        //TODO: Implement the fibonacci function here!


        var j = 0;
        var i = 1;
        var value;

        if (n > 2) {
            for (var count = 2; count < n; count++) {
                value = j + i;
                j = i;   
                i = value;
            }
        } 

        else if(n == 2) {
            value = i;
        }

        else if(n == 1) {
            value = j;
        }



        memo[n] = value;
        console.log(memo);

    }

    return value;
}

console.log(f(15));

