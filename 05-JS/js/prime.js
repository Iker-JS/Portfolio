
var getPrimeFactors = function () {
    "use strict";
    var n = parseInt(document.getElementById("num").value, 10);
    var sequence = [];

    while (n % 2 === 0) {
        sequence.push(2);
        n = n / 2;
    }

    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            sequence.push(i);
            n = n / i;
        }
    }

    if (n > 2) {
        sequence.push(n);
    }

    // Mostrar el resultado en el HTML
    document.getElementById("pf").innerText = `Prime factors of ${document.getElementById("num").value}: ${sequence.join(", ")}`;
};