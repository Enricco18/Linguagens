const MAX = 6;
const MIN = 1

let game = [{
    player:1,
    score:0,
},
{
    player:2,
    score:0,
}] ;

let turn = 0

const placar1 = document.getElementById("pontP1")
const placar2 = document.getElementById("pontP2")

const grab1Btn = document.getElementById("pegP1")
const grab2Btn = document.getElementById("pegP2")

const passBtn = document.getElementById("pass")
const newGameBtn = document.getElementById("newGame")



function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function grabCard(){
    const number = randomInt(MAX,MIN);
    if(number==1){
        game[turn].score= 0
    }
    else{
        game[turn].score+=number
    }
    placar1.innerText = game[0].score;
    placar2.innerText = game[1].score;
}

function passTurn(){
    // sim ta feio mal
    if(turn==0){
        grab1Btn.disabled =true;
        grab2Btn.disabled = false;
        
        turn =1;
        console.log(turn)
    }else{
        grab1Btn.disabled =false;
        grab2Btn.disabled = true;
        turn = 0
        console.log(turn)
    }
}

function newGame(){
    turn = 0;
    grab1Btn.disabled =false;
    grab2Btn.disabled = true;
    placar1.innerText = 0;
    placar2.innerText = 0;

}
