'use strict';
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
    let setOutput = function (e, index) {
        e.target.textContent = runningCharacter;
        e.target.removeEventListener('click', e => setOutput(e));
        switchRunChar();
    };
    function setContent(index) {
        array[index].textContent = localStorage.getItem(`${index}` + 'text');

    }

    array.forEach((item, index) => {
        item.addEventListener('click', e => setOutput(e, index), { once: true });
        //   console.log(index);
    });

    return { user1Selection, user2Selection, array, , setOutput, setUser };
})();