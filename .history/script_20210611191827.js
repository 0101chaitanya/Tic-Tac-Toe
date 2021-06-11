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
    let runningNumber = 0;
    let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
    function switchRunChar() {

        runningCharacter = (runningCharacter === "O") ? "X" : "O";
        runningNumber = (runningNumber === 0) ? 1 : 0;
        console.log(newArray);

    }
    let i;
    function text(i) {
        return array[i].textContent;
    }
    // console.log(text(2));
    let x = 0;
    let result;
    console.log(result);
    let horizontalArray = [[array[0], array[1], array[2]], [array[3], array[4], array[5]], [array[6], array[7], array[8]]];
    let verticalArray =
        [[array[0], array[3], array[2]], [array[3], array[4], array[5]], [array[6], array[7], array[8]]];
    let arrayCreator = fucntion(index, incrementer){
        return [array[index], array[index+ incrementer], array[index + 2 * incrementer]]
} 
function checkWin() {

    let checkHorizontal = newArray.

    }
function showResult(result) {
}


let newArray = Array(array.length).fill();
let count = 0;
let setOutput = function (e, index) {
    console.log(index)
    e.target.textContent = runningCharacter;
    e.target.removeEventListener('click', e => setOutput(e));
    newArray.splice(index, 1, runningNumber);
    switchRunChar();
    checkWin();

    // console.log(count);
    count++;
};
console.log(newArray);
if (count === 8) {
    showResult(result);
}
array.forEach((item, index) => {
    item.textContent = "";
    item.addEventListener('click', e => setOutput(e, index), { once: true });
    //   console.log(index);
});

return { result, showResult, array, setOutput, setUser, count };
}) ();
//eventFun.text(2);
//console.log();eventFun.text(2)