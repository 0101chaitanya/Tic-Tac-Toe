'use strict';
let eventFun = (function () {
    let user1Selection, user2Selection, runningCharacter;
    function setUser(given) {
        //console.log(given.value);
        localStorage.setItem('user1Selection', given.value);
        document.querySelector(`form`).submit();
    }
    user1Selection = localStorage.getItem('user1Selection');
    user2Selection = (user1Selection != null) ? ((user1Selection === 'X') ? 'O' : 'X') : null;
    runningCharacter = user1Selection;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    function switchRunChar() {

        runningCharacter = (runningCharacter === "O") ? "X" : "O";
    }
    let i;
    function text(i) {
        return array[i].textContent;
    }
    // console.log(text(2));
    let x = 0;
    let result;
    function checkWin() {

        while (x < 9) {
            if (text(0 + x) != "" && text(0 + x) == text(1 + x) && text(1 + x) == text(2 + x)) {
                result = (text(0 + x));
                showResult(result);
                return;
            }
            x += 3;
        }
        x = 0;

        while (x < 3) {
            if (text(0 + x) != "" && text(0 + x) == text(3 + x) && text(3 + x) == text(6 + x)) {
                result = (text(0 + x));
                showResult(result);
                return;
            }
            x += 1;
        }
        x = 0;

        if (text(0 + x) != "" && text(0 + x) == text(4 + x) && text(4 + x) == text(8 + x)) {
            result = (text(0 + x));
            showResult(result);
            return;
        } x = 2;

        if (text(0 + x) != "" && text(0 + x) == text(2 + x) && text(2 + x) == text(4 + x)) {
            result = (text(0 + x));
            showResult(result);
            return;
        }
        x = 0;
    }
    function showResult(result) {
        if (user1Selection === result) {
            alert(`Player 1 Won`);
        }
        else alert(`Player 2 won`);
    }




    let setOutput = function (e, index) {
        e.target.textContent = runningCharacter;
        e.target.removeEventListener('click', e => setOutput(e));
        switchRunChar();
        checkWin();
    };

    array.forEach((item, index) => {
        item.textContent = "";
        item.addEventListener('click', e => setOutput(e, index), { once: true });
        //   console.log(index);
    });

    return { text, user2Selection, array, setOutput, setUser, checkWin };
})();
//eventFun.text(2);
//console.log();eventFun.text(2)