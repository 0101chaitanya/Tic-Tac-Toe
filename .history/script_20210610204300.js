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
    let setOutput = function (a) {
        a.target.textContent = runningCharacter;
        a.target.removeEventListener('click', e => setOutput(e));
        switchRunChar();
    };
    array.forEach((item) => {
        item.addEventListener('click', e => setOutput(e), { once: true });
    });
    let stack = 0;
    let a1 = [0, 1, 2];
    checkWin(...a1);//...a1
    function checkWin(x, y, z) {
        //  let checkBox = "";
        return array[x].textContent + array[y].textContent + array[z].textContent;
        console.log(`${checkBox} won`);

        if (checkBox === 'XXX' || checkBox === 'OOO') {
        }
    }

    return { checkWin, user1Selection, user2Selection, array, setOutput };
})();
document.getElementById("do").addEventListener('click', function (e) {

    console.table((array[0]), (eventFun.checkWin()));

});