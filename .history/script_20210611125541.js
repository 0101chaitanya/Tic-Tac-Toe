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
    function checkWin() {
        for (i = 0; i < array.length / 3; i++) {
            if (txt(i) || txt(i - 1) || txt(i - 2) !== ('' || undefined) &&
                ((txt(i) || txt(i - 1) || txt(i - 2)) == txt(i + 1 || txt(i) || txt(i - 1) &&
                    txt(i + 1) || txt(i) || txt(i - 1) == txt(i + 2) || txt(i + 1) || txt(i)) ||
                    (txt(i) || txt(i - 3) || txt(i - 6) == txt(i + 3) || txt(i) || txt(i - 3) &&
                        txt(i + 3) || txt(i) || txt(i - 3) == txt(i + 6) || txt(i + 3) || txt(i)))
        {

            }
            /* for (let i = 0; i < array.length; i++) {
                if (i % 3 === 0) {
                    if (txt(0) === txt(3) & txt(3) === txt(6)) {
                        (txt(0) !== '') ? alert(`${txt(0)}`) : false;
                    }
    
                    if (txt(i) === txt(i + 1) & txt(i + 1) === txt(i + 2)) {
                        (txt(i) !== '') ? alert(`${txt(0)}`) : false;
                    }
                }
                if ((i - 1) % 3 === 0) {
                    if (txt(1) === txt(4) & txt(4) === txt(7)) {
                        (txt(1) !== '') ? alert(`${txt(1)}`) : false;
                    }
                    if (txt(1) === txt(4) & txt(4) === txt(7)) {
                        (txt(1) !== '') ? alert(`${txt(1)}`) : false;
                    }
                }
                if ((i - 1) % 3 === 0) {
                    if (txt(1) === txt(4) & txt(4) === txt(7)) {
                        (txt(1) !== '') ? alert(`${txt(1)}`) : false;
                    }
                    if (txt(1) === txt(4) & txt(4) === txt(7)) {
                        (txt(1) !== '') ? alert(`${txt(1)}`) : false;
                    }
    
                }
    
    
    
            }
        } */
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

        return { txt, user2Selection, array, setOutput, setUser, checkWin };
    }) ();

    console.log(eventFun.txt(2));