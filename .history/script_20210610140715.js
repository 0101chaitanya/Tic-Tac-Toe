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
        console.
        sessionStorage.setItem('user1Selection', input);

    };
    user1Selection = sessionStorage.getItem('user1Selection');

    evaluate = (x) => {
        document.getElementsByNa();


        /* let element = docuemnt.querySelector(`input[value="${x}"]`);
        let user1obj = { element, x }
        localStorage.getItem('user1Obj', JSON.stringify(user1obj));
 */
        // currentPlayer
    };
    //    let obj = JSON.parse(localStorage.getItem('user1Obj'));

    return { user1Selection, elementArray, array };
})();
console.log(eventFun.user1Selection);
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));