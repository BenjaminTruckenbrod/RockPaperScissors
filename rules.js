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

console.log(computerPlay());
playerSelection = prompt('What do you choose?').toLowerCase();
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
