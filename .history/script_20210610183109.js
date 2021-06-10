//'use strict';
let eventFun = (function () {
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
    function switchRunChar() {
        runningCharacter = (runningCharacter === "O") ? "X" : "O";
    };
    let setOutput = function (a) {
        a.target.textContent = runningCharacter;
        a.target.removeEventListener('click', e => setOutput(e));
        switchRunChar();
    };
    array.forEach((item) => {
        item.addEventListener('click', e => setOutput(e), { capture: false }, { once: true });
    });
    return { setUser, user1Selection, user2Selection, array, setOutput };
    // check function 
})();
//eventFun.setOutput();
