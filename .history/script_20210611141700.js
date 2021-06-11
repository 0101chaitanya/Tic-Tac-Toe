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
    function checkWin() {
        let x = 0
        while (x < 9) {
            if (text(0 + x) != "" && text(0 + x) == text(1 + x) && text(1 + x) == text(2 + x))
                console.log(text(0 + x));
            x += 3;
        }
        x = 0;

        while (x < 3) {
            if (text(0 + x) != "" && text(0 + x) == text(3 + x) && text(3 + x) == text(6 + x))
                console.log(text(0 + x));
            x += 1;
        }
        x = 0;

        if (text(0 + x) != "" && text(0 + x) == text(4 + x) && text(4 + x) == text(8 + x))
            console.log(text(0 + x));

    }
    if (text(0 + x) != "" && text(0 + x) == text(4 + x) && text(4 + x) == text(8 + x))
        console.log(text(0 + x));

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
}) ();
//eventFun.text(2);
//console.log();eventFun.text(2)