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
    let runningNumber = 0;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    function switchRunChar() {

        runningCharacter = (runningCharacter === "O") ? "X" : "O";
        runningNumber = (runningNumber === 0) ? 1 : 0;
        console.log(newArray);

    }
    let i;
    function text(i) {
        return array[i].textContent;
    }
    // console.log(text(2));
    let x = 0;
    let result;
    //console.log(result);
    let newArray = Array(array.length).fill();
    function arrayCreator(index, incrementer) {
        return [newArray[index], newArray[index + incrementer], newArray[index + 2 * incrementer]];
    }

    let horizontalArray = [arrayCreator(0, 1), arrayCreator(3, 1), arrayCreator(6, 1)];
    let verticalArray = [arrayCreator(0, 3), arrayCreator(1, 3), arrayCreator(2, 3)];
    let diagonlArray = [arrayCreator(0, 4), arrayCreator(2, 2)];
    console.log(horizontalArray, verticalArray, diagonlArray);
    function parser(arrayInput) {

        let arr = arrayInput.map((item, index) => {
            let stack = 0;
            let res = item.reduce((stack, item) => {
                stack += item.value;
                return stack;
            });
            return res;
        });
        return arr;
    }
    function checkWin() {
        let horizontalParsed = parser(horizontalArray);
        let verticalParsed = parser(verticalArray);

        let diagonalParsed = parser(diagonalArray);
        console.log({ horizontalParsed: horizontalParsed, verticalParsed: verticalParsed, diagonalParsed: diagonalParsed });

    }
    function showResult(result) {
    }


    let count = 0;
    let setOutput = function (e, index) {
        c//onsole.log(index);
        e.target.textContent = runningCharacter;
        e.target.removeEventListener('click', e => setOutput(e));
        newArray.splice(index, 1, runningNumber);
        switchRunChar();
        checkWin();

        // console.log(count);
        count++;
    };
    console.log(newArray);
    if (count === 8) {
        showResult(result);
    }
    array.forEach((item, index) => {
        item.textContent = "";
        item.addEventListener('click', e => setOutput(e, index), { once: true });
        //   console.log(index);
    });

    return { result, showResult, array, setOutput, setUser, count };
})();
//eventFun.text(2);
//console.log();eventFun.text(2)