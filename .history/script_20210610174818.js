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

    let setOutput = function (arg) {
        console.log(arg);
        arg.textContent = runningCharacter;
        console.log(arg.textContent);
        switchRunningCharacter();
    };

    array.forEach((item) => {
        item.addEventListener('click', setOutput.bind(item), { capture: false }, { once: true });
    });
    switchRunningCharacter = () => {
        runningCharacter = (runningCharacter === "0") ? "X" : "O";
    };

    return { setUser, user1Selection, user2Selection, array, setOutput };
})();
eventFun.setOutput();
let y = document.getElementById('r3Column3').textContent;
console.log(y);