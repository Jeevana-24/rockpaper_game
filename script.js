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
        y="rock beats scissors,you win!";
        x=1;
    }
    else if(playerSelection ==="scissors" && computerSelection === "paper"){
        y="scissors beats paper,you win!";
        x=1;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        y ="paper beats rock,you win!";
        x=1;
    }
    
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        y="rock beats scissors,you lose!";
        x=0;
    }
    
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        y ="scissors beats paper,you lose!";
        x=0;
    }
    
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        y ="paper beats rock,you lose!";
        x=0;
    }
    else{
        y ="tie";
    }
    
    l.push(x)
    console.log(l)
    let player=0
    let computer=0
    for(let i=0;i<l.length;i++){
        if (l[i]==1){
            player=player+1
        }
        else{
            computer=computer+1
        }
    }
    
    pp.textContent=`player:${player} computer:${computer}`
    
    if (l.length>=5){
        if (player>computer){
        
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

const bodiee=document.querySelector('body');
const pp=document.createElement('p');
bodiee.appendChild(pp)

btn1.onclick=()=>{
    playerSelection="rock"
    computerSelection=getComputerChoice()
x=plays(playerSelection,computerSelection)
para.textContent =y;
};

btn2.onclick=()=>{playerSelection="paper"
computerSelection=getComputerChoice()
x=plays(playerSelection,computerSelection)
para.textContent =y;
};

btn3.onclick=()=>{playerSelection="scissors"
computerSelection=getComputerChoice()
x=plays(playerSelection,computerSelection)
para.textContent =y;
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
