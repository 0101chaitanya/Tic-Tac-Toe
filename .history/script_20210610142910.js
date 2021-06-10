'use strict';
let eventFun = (function() {
    //init an object and return // play again 

    let user1Selection, user2Selection;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    let setUser = (input) => sessionStorage.setItem('user1Selection', input.value);
    user1Selection = sessionStorage.getItem('user1Selection');
    user2Selection = (user1Selection === 'X') ? 'O' : 'X';
    array.forEach((item) => {
        item.addEventListener('click', setOutput.bind(this));
        return { item };
    });

    /* let setOutput = () => {

    };
 */
    return { user1Selection, user2Selection, array, setOutput };
})();
console.log(eventFun.setOutput());
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));