let eventFun = (function() {
            //init an object and return // play again 
            let user1Selection;
            let elementArray = [];

            setUser = (input) => {

                sessionStorage.setItem('user1Selection', input.value);

            };
            evaluate = (x) => {
                document.getElementsByNa();

                let array = Array.from(document.getElementById('gameSquare').querySelectorAll('div'));
                array.forEach((item) => {

                });
                user1Selection = sessionStorage.getItem('user1Selection');



                return { user1Selection, elementArray, array };
            })(); console.log(eventFun.user1Selection);
        //console.log(document.getElementById('gameSquare').querySelectorAll('div'));