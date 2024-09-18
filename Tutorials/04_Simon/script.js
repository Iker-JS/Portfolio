// script.js

    
    //COMMENT: step 7
    let anyKey = false;
    let level = 0;

    //COMMENT: step 6
    let started = false;

    //COMMENT: step 5
    let globalColors = ['red', 'green', 'blue', 'yellow'];
    let gamePattern = [];
    let userClickedPattern  = [];
    
    //COMMENT: step 4
    function nextSequence(){
        userClickedPattern = [];
        level++;

        updateTitle('Level ' + level)
        let random = Math.floor(Math.random()*4);
        let color = globalColors[random];
        gamePattern.push(color);
        
        console.log('Game pattern:', gamePattern);

        playSound(color);
        blinkButton(color);
    }

    
    function playSound(buttonID){

        let audio = new Audio('./sounds/' + buttonID + '.mp3');
        audio.play();
    }

    
    function checkAnswer(index) {
        // Check if the user clicked the right button in the sequence
        if (userClickedPattern[index] === gamePattern[index]) {
            // If the user has completed the sequence correctly
            if (userClickedPattern.length === gamePattern.length) {
                // Move to the next sequence after a short delay
                
                playSound(userClickedPattern[index]);

                setTimeout(() => {
                    nextSequence();
                }, 1000);
            }
        }
        
        else {
            // If the user makes a mistake
            playSound('wrong');  // Play the wrong sound
            
            // Apply the game-over style to the body
            $('body').addClass('game-over');
            setTimeout(function () {
                $("body").removeClass('game-over');
            }, 200);  // Remove it after 200ms
    
            // Update the heading to show the game over message
            updateTitle('Game over, Press Any Key to Restart');
            
            // Call the startOver function to reset the game
            startOver();
        }
    }

    function animatePress(buttonID) {
        $('#' + buttonID).addClass('pressed');
        setTimeout(() => {
            $('#' + buttonID).removeClass('pressed');
        }, 100); 
    }
    
    function blinkButton(buttonID){

        $('#'+buttonID).fadeOut(100).fadeIn(100);
    }

    function startOver(){

        anyKey = true;
        started = false;
        level = 0;
        gamePattern = [];    
    }

    
    
    function updateTitle(newTitle){
        $('#level-title').text(newTitle);
    }


    $(document).keydown(function(event){
        
        if (event.key === 'a' || event.key === 'A' && !anyKey) {

            if (!started) {
                started = true;
                nextSequence(0, 3);
            }
        }
        
        //COMMENT: el juego ya fue iniciado una vez por lo que ahora se puede precionar cualquier tecla

        else if (!started && anyKey){
            started = true;
            nextSequence(0, 3);
        }
    });




    $('.btn').on('click', function(event){

        if(started){

            let buttonID = event.target.id;
            userClickedPattern.push(buttonID)

            console.log('User clicked pattern:', userClickedPattern);

            blinkButton(buttonID);
            animatePress(buttonID);
            playSound(buttonID);
            checkAnswer(userClickedPattern.length - 1);

        }
    });

