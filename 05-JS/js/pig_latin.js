/*
Pig Latin
*/

function igpayAtinlay() {

    // TODO: Initialize the word array properly
    var returnArray = [], wordArray = document.getElementById("txtVal").value.toLowerCase().split(" ");

    // TODO: make sure that the output is being properly built to produce the desired result.
    
    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word + "way");
            console.log(word + "way")
            continue;
        }

        else{

            word = word.slice(1) + beginning;
            
            returnArray.push(word + "ay")
            console.log(word + "ay")
            
        }

    }

    document.getElementById("pigLatLbl").innerText = returnArray.join(" ");
    return returnArray.join(" ");
}

// Some examples of expected outputs
//console.log(igpayAtinlay("pizza")); // "izzapay"
//console.log(igpayAtinlay("apple")); // "appleway"
//console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"
