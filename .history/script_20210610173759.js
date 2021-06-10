//'use strict';
let eventFun = (function () {
    //init an object and return // play again 
    let user1Selection, user2Selection, runningCharacter;
    function setUser(given) {
        console.log(given.value);
        localStorage.setItem('user1Selection', given.value);
        document.querySelector(`form`).submit();
    }
    user1Selection = localStorage.getItem('user1Selection');
    user2Selection = (user1Selection != null) ? ((user1Selection === 'X') ? 'O' : 'X') : null;
    runningCharacter = user1Selection;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));

    let setOutput = (item) => {
        console.log(item);
    };

    array.forEach((item) => {
        item.addEventListener('click', setOutput.bind(this), { capture: false }, { once: true });
    });
    setOutput = function (arg) {
        arg.textContent = runningCharacter;
        switchRunningCharacter();
    };
    switchRunningCharacter = () => {
        runningCharacter = (runningCharacter === "0") ? "X" : "O";
    };

    return { setUser, user1Selection, user2Selection, array, setOutput };
})();
/*
let radios = Array.from(document.querySelectorAll('input'));
//sessionStorage.clear();
radios.forEach((radio) => {s

    radio.addEventListener('click', console.log(eventFun));



});
 */
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));s