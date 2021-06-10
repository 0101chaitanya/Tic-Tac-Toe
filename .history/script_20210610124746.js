let eventFun = (function() {
    //init an object and return // play again 
    let elementArray = [];
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    array.forEach((item) => {
        item.addEventListener('click', showItem(item));

    });

    function showItem(item) {
        elementArray.push(item);
    }
    return { elementArray, array };
})();
console.log(eventFun);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));