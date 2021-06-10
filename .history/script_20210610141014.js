let eventFun = (function() {
    //init an object and return // play again 
    let user1Selection;
    let elementArray = [];
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    array.forEach((item) => {
        // item.addEventListener('click', showItem(item));

    });
    setUser = (input) => {

        sessionStorage.setItem('user1Selection', input.value);

    };
    user1Selection = sessionStorage.getItem('user1Selection');

    evaluate = (x) => {
        document.getElementsByNa();

    }
    return { user1Selection, elementArray, array };
})();
console.log(eventFun.user1Selection);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));