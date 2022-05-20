function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let options = ['rock', 'paper', 'scissors'];
    let pick = getRandomInt(3);
    return options[pick]
}

function playRound(playerSelection , computerSelection){    
    
    if (playerSelection == "rock" && computerSelection == 'paper'){
        return 'You Lose! Paper beats Rock';
    }    
    if (playerSelection == "rock" && computerSelection == 'scissors'){
        return 'You Win! Rock beats Paper';
    }
    if (playerSelection == "rock" && computerSelection == 'rock'){
        return 'It\'s a tie!';
    }
    if (playerSelection == "paper" && computerSelection == 'paper'){
        return 'It\'s a tie!';
    }
    if (playerSelection == "paper" && computerSelection == 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }
    if (playerSelection == "paper" && computerSelection == 'rock'){
        return 'You Win! Paper beats Rock';
    }    
    if (playerSelection == "scissors" && computerSelection == 'paper'){
        return 'You Win! Scissors beats Paper';
    }
    if (playerSelection == "scissors" && computerSelection == 'scissors'){
        return 'It\'s a tie!';
    }
    if (playerSelection == "scissors" && computerSelection == 'rock'){
        return 'You Lose! Rock beats Scissors';
    }

}

let scorePlayer=0;
let scoreComp=0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
      compPlay = computerPlay();
      result = playRound(button.id, compPlay);
      if (result.charAt(4) == 'W')
        scorePlayer++;
      if (result.charAt(4) == 'L')
        scoreComp++;
      
      sPlayer.textContent="Player Score: " + scorePlayer;
      sComp.textContent="Computer Score: " + scoreComp ;
      
      if (scoreComp >= 5){
        p.textContent="The computer has won the game";
        scorePlayer=0;
        scoreComp=0;
      }
      else if (scorePlayer >= 5){
        p.textContent="You won the game";  
        scorePlayer=0;
        scoreComp=0;
      }
      else {
        p.textContent=result;
        }
      
    });
  });

const container=document.querySelector('#container');

const p = document.createElement('p');
p.classList.add('result')
p.style.color='blue';
container.appendChild(p);

const sPlayer = document.createElement('p');
sPlayer.classList.add('score')
sPlayer.style.color='green';
container.appendChild(sPlayer);

const sComp = document.createElement('p');
sComp.classList.add('score')
sComp.style.color='green';
container.appendChild(sComp);



