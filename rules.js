function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    options = ['rock', 'paper', 'scissors'];
    pick = getRandomInt(3);
    return options[pick]
}

function playRound(playerSelection , computerSelection){    
    
    if (playerSelection == "rock" && computerSelection == 'paper')
        return 'You Lose! Paper beats Rock';
    if (playerSelection == "rock" && computerSelection == 'scissors')
        return 'You Win! Rock beats Paper';
    if (playerSelection == "rock" && computerSelection == 'rock')
        return 'It\'s a tie!';
    if (playerSelection == "paper" && computerSelection == 'paper')
        return 'It\'s a tie!';
    if (playerSelection == "paper" && computerSelection == 'scissors')
        return 'You Lose! Scissors beats Paper';
    if (playerSelection == "paper" && computerSelection == 'rock')
        return 'You Win! Paper beats Rock';
    if (playerSelection == "scissors" && computerSelection == 'paper')
        return 'You Win! Scissors beats Paper';
    if (playerSelection == "scissors" && computerSelection == 'scissors')
        return 'It\'s a tie!';
    if (playerSelection == "scissors" && computerSelection == 'rock')
        return 'You Lose! Rock beats Scissors';

}

//console.log(computerPlay());
//playerSelection = prompt('What do you choose?').toLowerCase();
//computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(){
    scoreA=0;
    scoreB=0;

    //for (let i=0; i<5; i++) {
        //computerSelection = computerPlay();
        
        //result = playRound(playerSelection, computerSelection);
        //if (result.charAt(4) == 'L')
            //scoreB++;
        //if (result.charAt(4) == 'W')
            //scoreA++;
        //console.log(result);

    //}
    if (scoreA>scoreB)
        return "You won the game!";
    return "You lost the game!";
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
      compPlay = computerPlay();
      playRound(button.id, compPlay);
    });
  });