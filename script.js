let data = document.querySelectorAll('.input');
let turn = true;
let winner = document.querySelector('.winner');
let resetGame = document.getElementById('newGame');
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const gameOff = () => {
    for(let box of data){
        box.classList.add('disable');
    }
}
const reset = () => {
    turn = true;
    winner.classList.add('winner');
    for(let box of data){
        box.classList.remove('disable');
        box.innerText = "";
    }
}

//new game
resetGame.addEventListener('click', reset);
data.forEach((input) => {
    input.addEventListener("click", ()=>{
        if(turn){
            input.innerText = "O";
            input.classList.add('red');
            turn = false;
        }else{
            input.innerText = "X";
            turn = true;
            input.classList.add('blue');
        }
        input.classList.add('disable');
        checkWinner();
    });
});
let checkWinner = ()=>{
    for(let pattern of win){
        let posOne = data[pattern[0]].innerText;
        let posTwo = data[pattern[1]].innerText;
        let posThree = data[pattern[2]].innerText;
        if(posOne != "" && posTwo != "" && posThree != ""){
            if(posOne === posTwo & posTwo === posThree){
                winner.classList.remove('winner');
                gameOff();
            }
        }
    }
}