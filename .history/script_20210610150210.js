'use strict';
let eventFun = (function() {
    //init an object and return // play again 

    let user1Selection, user2Selection, runningCharacter;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    let setUser = (input) => sessionStorage.setItem('user1Selection', input.value);
    user1Selection = sessionStorage.getItem('user1Selection');
    user2Selection = (user1Selection === 'X') ? 'O' : 'X';
    runningCharacter = user1Selection;
    const setOutput = (item) => {
        console.log(item);
    };

    array.forEach((item) => {
        item.addEventListener('click', ((event) => {
            //   event.stopPropagation();
            setOutput;
        }).bind(this), { capture: flase }, { once: true });

    });


    return { user1Selection, user2Selection, array, setOutput };
})();
console.log(eventFun.setOutput());
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));