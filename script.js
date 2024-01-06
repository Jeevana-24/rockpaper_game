function getComputerChoice(){
    choices=["rock","paper","scissors"]
    return choices[Math.floor((Math.random()*3))];
}
function getUserChoice(){
    return window.prompt('rock,paper or scissors?')
}

function plays(playerSelection,computerSelection){
    if (playerSelection==="rock" && computerSelection==="scissors"){
        console.log("you win!")
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        console.log("you win!")
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win!')
    }
    
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose!')
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose!')
    }
    
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose!')
    }
    else{
        console.log("tie")
    }
}
const l=[];
function Game(){
    for(let i=0;i<5;i++){
        x=plays(getUserChoice(),getComputerChoice());
        l.push(x)
    }
}
let win=0
let lose=0
for(let i=0;i<l.length;i++){
    if (l[i]=="You win!"){
        win=win+1
    }
    else{
        lose=lose+1
    }
}
if (win>lose){
    console.log("You win the game")
}
else{
    console.log("Computer wins the game")
}

Game();
