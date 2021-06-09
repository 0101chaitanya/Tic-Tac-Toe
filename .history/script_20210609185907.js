 let eventFun = (function(){
   //init an object and return // play again 
let elementArray;
   let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
array.forEach((item)=>{
    item.addEventListener('click',function(event.target){
       console.log(this);
    
    } );
    
})
})(); 
eventFun;
//console.log(document.getElementById('gameSquare').querySelectorAll('div'));
    