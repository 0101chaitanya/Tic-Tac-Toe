let eventFun = (function() {
    //init an object and return // play again 
    let elementArray = [];
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    array.forEach((item) => {
        item.addEventListener('click', pushItem);

    });

    function pushItem(item) {
        elementArray.push(item);
    }
    return { elementArray };
})();
console.log(eventFun.elementArray);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));