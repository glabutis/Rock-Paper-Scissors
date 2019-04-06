let userScore = 0;
let computerScore = 0;
let levelNum = 1;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
let result_p = document.querySelector(".result > p");
let level_p = document.querySelector(".level");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice());

function convertToWord(letter){
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}



function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  console.log(userScore);
  computerScore_span.innerHTML = computerScore;
  const smallUserWord  = "user".fontsize(3).sub();
  const smallCompWord  = "comp".fontsize(3).sub();
  let response = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord} . You win!`;
  result_p.innerHTML = response;
  if(userScore == 10){
    levelNum++;
    result_p.innerHTML = response + " You passed level" + levelNum + "!";
    userScore = 0;
    computerScore = 0;
    level_p.innerHTML = "Level: " + levelNum;
    if(levelNum == 50){
      result_p.innerHTML = "CONGRATULATIONS!!!! YOU WON THE GAME!!!!";
    }
  }
  document.getElementById(userChoice).classList.add('greenGlow');
  setTimeout(function(){document.getElementById(userChoice). classList.remove('greenGlow')}, 300);


  }




function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord  = "user".fontsize(3).sub()
  const smallCompWord  = "comp".fontsize(3).sub()
  let response = `${convertToWord(userChoice)}${smallUserWord}  loses to   ${convertToWord(computerChoice)}${smallCompWord} . You lost...`
  result_p.innerHTML = response;
  if(computerScore == 10){
    result_p.innerHTML = response + " Game Over..."
    levelNum = 1;
    computerScore = 0;
    userScore = 0;
    level_p.innerHTML = "Level: " + levelNum;
  }
  document.getElementById(userChoice).classList.add('redGlow');
  setTimeout(function(){document.getElementById(userChoice). classList.remove('redGlow')}, 300);
}


function draw(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord  = "user".fontsize(3).sub()
  const smallCompWord  = "comp".fontsize(3).sub()
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  is equal to  ${convertToWord(computerChoice)}${smallCompWord} . It's a draw!`
  document.getElementById(userChoice).classList.add('grayGlow');
  setTimeout(function(){document.getElementById(userChoice). classList.remove('grayGlow')}, 300);
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
      case "rr":
      case "ss":
      case "pp":
        draw(userChoice, computerChoice);
        break;
  }
}



function main(){

  rock_div.addEventListener('click', function(){
    game("r");
  })
  paper_div.addEventListener('click', function(){
    game("p");
  })
  scissors_div.addEventListener('click', function(){
    game("s");
  })


}

main();
