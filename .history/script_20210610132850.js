let eventFun = (function() {
    //init an object and return // play again 
    let user1Seletion;
    let elementArray = [];
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    array.forEach((item) => {
        item.addEventListener('click', showItem(item));

    });

    function showItem(item) {
        evaluateTurn(x);
    }
    setUser = (input) => {
        user1Seletion = input;
    }
    evaluate = (x) => {
        // currentPlayer
    }
    return { elementArray, array };
})();
console.log(eventFun.elementArray);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));