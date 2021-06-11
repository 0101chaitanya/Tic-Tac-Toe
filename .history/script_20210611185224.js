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
    console.log(result);
    function checkWin() {



        function showResult(result) {
        }



        let count = 0;
        let setOutput = function (e, index) {
            e.target.textContent = runningCharacter;
            e.target.removeEventListener('click', e => setOutput(e));
            switchRunChar();
            checkWin();
            // console.log(count);
            count++;
        };

        if (count === 8) {
            showResult(result);
        }
        array.forEach((item, index) => {
            item.textContent = "";
            item.addEventListener('click', e => setOutput(e, index), { once: true });
            //   console.log(index);
        });

        return { result, showResult, array, setOutput, setUser, count };
    }) ();
//eventFun.text(2);
//console.log();eventFun.text(2)