/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.

function getSieve() {
    
    var n = parseInt(document.getElementById("num").value, 10);
    var primes = sieve(n).join(", ");

    document.getElementById("primes").innerText = primes;

}

var sieve = function(n){
    "use strict";

    var array = new Array(n+1).fill(true), primes = [], i, j;


    for (i = 2; i <= n; i++) {

        if (array[i]){

            primes.push(i);

            for (j = i*2; j <= n; j+=i){
                array[j] = false;
            }
            
        }

    }

    // TODO: Implement the sieve of eratosthenes algorithm to find all the prime numbers under the given number.

    return primes;
};



//console.log(sieve(1000000));
