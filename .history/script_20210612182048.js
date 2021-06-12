"use strict";

let eventFun = (function () {
    let user1Selection, user2Selection, runningCharacter;

    let runningNumber,
        result;
    let newArray;
    let count;

    let horizontalArray;
    let verticalArray;
    let diagonalArray;
    let array;


    function setUser(given) {
        localStorage.setItem("user1", given.value);

        document.querySelector(`#userForm`).submit();
    }
    function setAi(given) {
        localStorage.setItem("Ai", given.value);

        document.querySelector(`#aiForm`).submit();
    }

    function player(input) {
        //let player$ = document.getElementById(input.value);
        let x = prompt('Enter player name');
        localStorage.setItem(`${input}`, x);
        location.reload();
    }

    function init() {
        runningNumber = 0;
        user1Selection = localStorage.getItem("user1") || null;
        user2Selection =
            user1Selection != null ? (user1Selection === "X" ? "O" : "X") : null;
        runningCharacter = user1Selection;

        (localStorage.getItem("p1") !== null) ? document.getElementById('p1').textContent = localStorage.getItem("p1") + " choose: " + user1Selection : document.getElementById('p1').textContent += ` ` + user1Selection || ' ';
        (localStorage.getItem("p2") !== null) ? document.getElementById('p2').textContent = localStorage.getItem("p2") + " : " + user2Selection : document.getElementById('p2').textContent += ` ` + user2Selection || ' ';

        array = Array.from(
            document.getElementById("gameSquare").querySelectorAll("div")
        );
        newArray = Array(9).fill(array.keys());
        console.log(newArray);
        count = 0;

        horizontalArray = undefined;
        verticalArray = undefined;
        diagonalArray = undefined;
        eventListen();
    } function setAi(given) {
        localStorage.setItem("Ai", given.value);

        document.querySelector(`#aiForm`).submit();
    }

    if (localStorage.getItem("user1") !== null) {
        init();
        if (localStorage.getItem('Ai') == `yesAi`) {
            // initAi(user2Selection);
        }

    }

    function reset() {
        init();
        document.getElementById('p1').textContent = `Player 1 choose: `;

        document.getElementById('p2').textContent = `Player 2 : `;
        localStorage.clear();
        location.reload();

    }

    function switchRunChar() {
        runningCharacter = runningCharacter === "O" ? "X" : "O";
        runningNumber = runningNumber === 0 ? 1 : 0;
    }

    function arrayCreator(index, incrementer) {
        return [
            newArray[index],
            newArray[index + incrementer],
            newArray[index + 2 * incrementer],
        ];
    }

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
        close.onclick = function () {
            localStorage.clear();
            //  init();
            document.getElementById('gameSquare').submit();
            let div = this.parentElement;
            div.style.opacity = '0';
            setTimeout(function () {
                document.getElementById('ResultBox').style.display = 'none';
                block1.style.filter = 'blur(0.0rem)';

            }, 60);
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

    let setOutput = function (e, index) {
        e.target.textContent = runningCharacter;
        e.target.removeEventListener("click", (e) => setOutput(e));
        newArray.splice(index, 1, runningNumber);
        switchRunChar();
        checkWin();

        count++;
    };

    function eventListen() {
        array.forEach((item, index) => {
            item.textContent = "";
            item.addEventListener("click", (e) => setOutput(e, index), { once: true });
        });
    }

    return { setUser, player, reset, setAi };
})();