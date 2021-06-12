"use strict";
let eventFun = (function() {
    let user1Selection, user2Selection, runningCharacter;
    let runningNumber = 0,
        result;

    function setUser(given) {
        localStorage.setItem("user1Selection", given.value);
        document.querySelector(`form`).submit();
    }
    user1Selection = localStorage.getItem("user1Selection");
    user2Selection =
        user1Selection != null ? (user1Selection === "X" ? "O" : "X") : null;
    runningCharacter = user1Selection;
    document.getElementById('1').textContent += ` ` + user1Selection || ' ';
    document.getElementById('2').textContent += ` ` + user2Selection || ' ';

    let array = Array.from(
        document.getElementById("gameSquare").querySelectorAll("div")
    );

    function switchRunChar() {
        runningCharacter = runningCharacter === "O" ? "X" : "O";
        runningNumber = runningNumber === 0 ? 1 : 0;
    }

    function text(i) {
        return array[i].textContent;
    }
    let newArray = Array(array.length).fill();

    function arrayCreator(index, incrementer) {
        return [
            newArray[index],
            newArray[index + incrementer],
            newArray[index + 2 * incrementer],
        ];
    }
    let count = 0;

    let horizontalArray;
    let verticalArray;
    let diagonalArray;

    function parser(arrayInput) {
        let arr = arrayInput.map((item, index) => {
            let res = item.reduce((stack, item) => {
                stack += item;
                return stack;
            });
            return res;
        });
        return arr;
    }

    function send(input) {
        let block1 = document.getElementById('block1');
        block1.style.filter = 'blur(0.5rem)';
        document.getElementById('ResultBox').style.display = 'block';
        document.getElementById('resultOut').textContent = input;
        let close = document.getElementById('closebtn');
        close.onclick = function() {
            let div = this.parentElement;
            div.style.opacity = '0';
            setTimeout(function() {
                div.style.display = "none";
                block1.style.filter = 'blur(0.0rem)';

            }, 600);
        };

    }

    function check(input) {
        input.forEach((item) => {
            if (item === 3) {
                result = item;
                send("Player 2 won");
            } else if (item === 0) {
                result = item;
                send("Player 1 won");
            }
        });
    }

    function checkWin() {
        horizontalArray = [
            arrayCreator(0, 1),
            arrayCreator(3, 1),
            arrayCreator(6, 1),
        ];
        verticalArray = [
            arrayCreator(0, 3),
            arrayCreator(1, 3),
            arrayCreator(2, 3),
        ];
        diagonalArray = [arrayCreator(0, 4), arrayCreator(2, 2)];

        let horizontalParsed = parser(horizontalArray);
        let verticalParsed = parser(verticalArray);

        let diagonalParsed = parser(diagonalArray);
        check(horizontalParsed);
        check(verticalParsed);
        check(diagonalParsed);

        if (count == 8) {
            console.table(horizontalArray, verticalArray, diagonalArray);
            console.table({
                horizontalParsed: horizontalParsed,
                verticalParsed: verticalParsed,
                diagonalParsed: diagonalParsed,
            });
            console.table(newArray);
            if (result == undefined) {
                send("draw");
            }
        }
    }

    let setOutput = function(e, index) {
        e.target.textContent = runningCharacter;
        e.target.removeEventListener("click", (e) => setOutput(e));
        newArray.splice(index, 1, runningNumber);
        switchRunChar();
        checkWin();

        count++;
    };
    array.forEach((item, index) => {
        item.textContent = "";
        item.addEventListener("click", (e) => setOutput(e, index), { once: true });
    });
    return { result, array, setOutput, setUser, count };
})();