let eventFun = (function() {
    //init an object and return // play again 
    let user1Selection;
    let elementArray = [];
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    array.forEach((item) => {
        // item.addEventListener('click', showItem(item));

    });

    /* function showItem(item) {
        evaluateTurn(x);
    }
     */
    setUser = (input) => {
        user1Selection = input;
    };
    evaluate = (x) => {
        // currentPlayer
    };
    return { user1Selection, elementArray, array };
})();
console.log(eventFun.user1Selection);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));