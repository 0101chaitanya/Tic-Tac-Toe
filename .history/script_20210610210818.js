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

        e.target.textContent = ;
        window[`${index}` + 'txt'] = runningCharacter;

        localStorage.setItem(`${index}` + 'text', window[`${index}` + 'text']);
        setContent(index)
        e.target.removeEventListener('click', e => setOutput(e));
        switchRunChar();
    };
    function setContent(index) {
        array[index].textContent = localStorage.getItem(`${index}` + 'text');

    }

    array.forEach((item, index) => {
        item.addEventListener('click', e => setOutput(e, index), { once: true });
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
})(); document.getElementById("do").addEventListener('click', function (e) {

    console.log(eventFun.array[0].textContent)


});