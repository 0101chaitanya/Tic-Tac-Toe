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
    let i;
    function txt(i) {
        return array[i].textContent;
    }
    console.log(txt(2));
    function checkWin(index) {
        if (index % 3 === 0) {
            if (txt(0) === txt(3) & txt(3) === txt(6)) {
                (txt(0) !== '') ? alert(`${txt(0)}`) : false;
            }
        }
        if ((index - 1) % 3 === 0) {
            if (txt(1) === txt(4) & txt(4) === txt(7)) {
                (txt(1) !== '') ? alert(`${txt(1)}`) : false;
            }
        }
        if ((index - 2) % 3 === 0) {
            if (txt(2) === txt(5) & txt(5) === txt(8)) {
                (txt(2) !== '') ? alert(`${txt(2)}`) : false;
            }
        }

    }

    let setOutput = function (e, index) {
        e.target.textContent = runningCharacter;
        e.target.removeEventListener('click', e => setOutput(e));
        switchRunChar();
        checkWin(index);
    };

    array.forEach((item, index) => {
        item.textContent = "";
        item.addEventListener('click', e => setOutput(e, index), { once: true });
        //   console.log(index);
    });

    return { txt, user2Selection, array, setOutput, setUser };
})();
consol.log(eventFun.txt(2));