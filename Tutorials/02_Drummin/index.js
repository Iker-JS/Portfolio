const sounds = {
    'w': 'tom-1.mp3',
    'a': 'tom-2.mp3',
    's': 'tom-3.mp3',
    'd': 'tom-4.mp3',
    'j': 'snare.mp3',
    'k': 'crash.mp3',
    'l': 'kick-bass.mp3',
}


function playSound(sound) {

    audio = new Audio(`sounds/${sound}`);
    audio.play();
    
}

document.addEventListener('keypress', function(event) {
    
    if (sounds[event.key]) {

        let element =  document.getElementsByClassName(event.key)[0];
        
        if (element) {
            
            element.classList.add('pressed')            
            playSound(sounds[event.key]);
            setInterval(() => {
                element.classList.remove('pressed');
            }, 100);

        
        }



    }

});
