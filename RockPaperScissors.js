var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} 
else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);





if (userChoice === conputerChoice) {
    alert ("The result is a tie!");
  } 
  
else if (userChoice === "rock"){
  if (conputerChoice === "scissors"){
     alert ("rock wins");
  }
  else {
      alert ("paper wins");
      }
if (userChoice === "paper"){
    if (conputerChoice ==="rock"){
        alert ("paper wins");
  }
  else {
      alert ("scissors wins");
      }
if (userChoice === "scissors"){
    if (conputerChoice ==="rock"){
        alert ("rock wins");
  }
    if (conputerChoice ==="paper"){
        alert ("scissors wins");
 } else {
      alert ("scissors wins");
      }
  }
