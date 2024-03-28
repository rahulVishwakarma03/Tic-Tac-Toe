let buttons = document.querySelectorAll('.box');
let result = document.querySelector('#result');
let newGame = document.querySelector('#new');
let playerO = true;
let winerPosition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

buttons.forEach((btn)=>{
    btn.addEventListener('click', function(e){
        if(playerO){
            btn.innerHTML = 'O'
            btn.setAttribute('disabled','');
            playerO = false;
        }
        else{
            btn.innerHTML = 'X'
            btn.setAttribute('disabled','');
            playerO = true;
        }
        checkGameOver();
        checkWinner();
    })
})

newGame.addEventListener('click',function(e){
    start();
})


function checkWinner(){
    for(let pattern of winerPosition){
        let position1Val = buttons[pattern[0]].innerHTML;
        let position2Val = buttons[pattern[1]].innerHTML;
        let position3Val = buttons[pattern[2]].innerHTML;
        

        if(position1Val != "" && position2Val != "" && position3Val != ""){
            if(position1Val == position2Val && position2Val == position3Val){
                buttons[pattern[0]].style.color = 'orange';
                buttons[pattern[1]].style.color = 'orange';
                buttons[pattern[2]].style.color = 'orange';
                console.log("winner : ",position1Val)
                result.innerHTML = `Congratulation!<p> Winner is Player <b>${position1Val}</b></p>`
                gameOver();
                
            }
        }
    }
}

function checkGameOver(){
    let isOver= true;
    for(btn of buttons){
        if(btn.innerHTML == ""){
            isOver = false;
        }
    }
    if(isOver){
        result.innerHTML = `Game Over!`
        console.log('game Over')
        gameOver();
    }
}

function gameOver(){
    buttons.forEach((btn) =>{
        btn.disabled = true;
        newGame.style.display = 'block'
    })
    
}

function start(){
    for(btn of buttons){
        btn.style.color = 'black'
        btn.innerHTML = "";
        btn.removeAttribute('disabled');
    }
    
    result.innerHTML = ""
    newGame.style.display = 'none'
    playerO = true
}
