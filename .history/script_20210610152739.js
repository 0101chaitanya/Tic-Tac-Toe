//'use strict';
let eventFun = (function() {
    //init an object and return // play again 
    let user1Selection, user2Selection, runningCharacter;
    let radios = Array.from(document.querySelectorAll('input'));
    radios.forEach((radio) {
        radio.addEventListener('click', setUser.bind(this));
    });

    function setUser(x) {
        return sessionStorage.setItem('user1Selection', input);
    }
    user1Selection = sessionStorage.getItem('user1Selection');
    user2Selection = (user1Selection === 'X') ? 'O' : 'X';
    runningCharacter = user1Selection;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));

    let setOutput = (item) => {
        console.log(item);
    };

    array.forEach((item) => {
        item.addEventListener('click', setOutput.bind(this), { capture: false }, { once: true });

    });


    return { user1Selection, user2Selection, array, setOutput };
})();
//console.log(eventFun.setOutput());
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));