 (function(){
   //init an object and return // play again 
let elementArray;
   let Array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
Array.forEach((item)=>{
    item.addEventListener('click',e=>{
        console.log(this);
    } )
})
})(); 
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));
    