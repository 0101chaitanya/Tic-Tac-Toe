//'use strict';
let eventFun = (function () {
    //init an object and return // play again 
    let user1Selection, user2Selection, runningCharacter;
    let radios = Array.from(document.querySelectorAll('input'));
    //sessionStorage.clear();
    radios.forEach((radio) => {
        if (radio.checked) {
            radio.addEventListener('change', setUser(this));
        }
    });

    function setUser(x) {
        console.log(x.value);
        localStorage.setItem('user1Selection', x.value);
        document.querySelector(`form`).submit();
    }
    user1Selection = localStorage.getItem('user1Selection');
    user2Selection = (user1Selection != null && user1Selection === 'X') ? 'O' : 'X';
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
console.log(eventFun);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));