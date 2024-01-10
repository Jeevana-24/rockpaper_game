function getComputerChoice(){
    choices=["rock","paper","scissors"]
    return choices[Math.floor((Math.random()*3))];
}
const bodie=document.querySelector('body');
const para = document.createElement("p");
bodie.appendChild(para);
const l=[]
function plays(playerSelection,computerSelection){
    if (playerSelection ==="rock" && computerSelection === "scissors"){
        x="you win!";
    }
    else if(playerSelection ==="scissors" && computerSelection === "paper"){
        x="you win!";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        x="you win!";
    }
    
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        x='you lose!';
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        x='you lose!';
    }
    
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        x='you lose!';
    }
    else{
        x="tie"
    }
    
    l.push(x)
    console.log(l)
    if (l.length==5){
        let win=0
        let lose=0
        for(let i=0;i<l.length;i++){
            if (l[i]=="you win!"){
                win=win+1
            }
            else{
                lose=lose+1
            }
        }
        if (win>lose){
            
            alert("You win the game");
        }
        else{
            alert("Computer wins the game");
        }
    
    }
    return x;
}
let playerSelection;
const body=document.querySelector('body');
const btn1 = document.createElement("button");
btn1.textContent = "rock";
body.appendChild(btn1);


const btn2 = document.createElement("button");
btn2.textContent = "paper";
body.appendChild(btn2);


const btn3 = document.createElement("button");
btn3.textContent = "scissors";
body.appendChild(btn3);

btn1.onclick=()=>{
    playerSelection="rock"
    computerSelection=getComputerChoice()
x=plays(playerSelection,computerSelection)
para.textContent =x;
};

btn2.onclick=()=>{playerSelection="paper"
computerSelection=getComputerChoice()
x=plays(playerSelection,computerSelection)
para.textContent =x;
};

btn3.onclick=()=>{playerSelection="scissors"
computerSelection=getComputerChoice()
x=plays(playerSelection,computerSelection)
para.textContent =x;
};




    


/*let win=0
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

Game();*/
