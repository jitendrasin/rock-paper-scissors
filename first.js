function computerPicks() {
  let compChoices = ["rock","paper","scissors"];
  let randomChoice = Math.floor(Math.random()*3);
  if(randomChoice==0) return "rock";
  if(randomChoice==1) return "paper";
  return "scissors";
};
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let msg = document.querySelector('.msg-container');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
//Rock
rock.addEventListener('click',()=>{
  let randomCompChoice = computerPicks();
  if(randomCompChoice=='rock') {
    msg.innerHTML = "<h2>It was Draw.</h2>";
    msg.style.backgroundColor = 'darkblue';
    msg.style.color = 'white';
  }
  else if(randomCompChoice=='paper'){
    msg.innerHTML = "<h2>You lost. Paper beats Rock</h2>";
    msg.style.backgroundColor = 'red';
    msg.style.color = 'white';
    compScore.innerText = (parseInt)(compScore.innerText)+1;
  }
  else{
    msg.innerHTML = "<h2>You won. Rock beats Scissors</h2>";
    msg.style.backgroundColor = 'green';
    msg.style.color = 'white';
    userScore.innerText = (parseInt)(userScore.innerText)+1;
  }
});
//Paper
paper.addEventListener('click',()=>{
  let randomCompChoice = computerPicks();
  if(randomCompChoice=='paper') {
    msg.innerHTML = "<h2>It was Draw.</h2>";
    msg.style.backgroundColor = 'darkblue';
    msg.style.color = 'white';
  }
  else if(randomCompChoice=='scissors'){
    msg.innerHTML = "<h2>You lost. Scissors beats Paper</h2>";
    msg.style.backgroundColor = 'red';
    msg.style.color = 'white';
    compScore.innerText = (parseInt)(compScore.innerText)+1;
  }
  else{
    msg.innerHTML = "<h2>You won. Paper beats Rock</h2>";
    msg.style.backgroundColor = 'green';
    msg.style.color = 'white';
    userScore.innerText = (parseInt)(userScore.innerText)+1;
  }
});
//Scissors
scissors.addEventListener('click',()=>{
  let randomCompChoice = computerPicks();
  if(randomCompChoice=='scissors') {
    msg.innerHTML = "<h2>It was Draw.</h2>";
    msg.style.backgroundColor = 'darkblue';
    msg.style.color = 'white';
  }
  else if(randomCompChoice=='rock'){
    msg.innerHTML = "<h2>You lost. Rock beats Scissors</h2>";
    msg.style.backgroundColor = 'red';
    msg.style.color = 'white';
    compScore.innerText = (parseInt)(compScore.innerText)+1;
  }
  else{
    msg.innerHTML = "<h2>You won. Scissors beats Paper</h2>";
    msg.style.backgroundColor = 'green';
    msg.style.color = 'white';
    userScore.innerText = (parseInt)(userScore.innerText)+1;
  }
});