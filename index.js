window.onload = function () {
  document.getElementById("dice1").setAttribute("src", "images/dice1.png");
  document.getElementById("dice2").setAttribute("src", "images/dice1.png");
};

function startMatch(){
const player1Name = document.getElementById("formGroupExampleInput").value.trim();
const player2Name = document.getElementById("formGroupExampleInput2").value.trim();

document.getElementById("player1").textContent = player1Name || "Player 1";
document.getElementById("player2").textContent = player2Name || "Player 2";


var randNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randNumber1 + ".png";
var diceSource1 = "images/" + randomDice1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", diceSource1);
var randNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randNumber2 + ".png";
var diceSource2 = "images/" + randomDice2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",diceSource2);
img1.classList.add("animate");
img2.classList.add("animate");
document.getElementById("player1").textContent = player1Name;
document.getElementById("player2").textContent = player2Name;

const result = document.getElementById("result-message");
if(randNumber1 > randNumber2)
{
    result.textContent = "🎉 "+ player1Name +" Wins!";
}
else if(randNumber2 > randNumber1)
{
    result.textContent = "🎉 "+player2Name+" Wins!";
}

else{
    result.textContent = "🤝 It's a Draw!";
}

setTimeout(() => {
    img1.classList.remove("animate");
    img2.classList.remove("animate");
},500)
}

document.querySelector(".start-btn").addEventListener("click",startMatch);

function lockNames() {
  const player1Name = document.getElementById("formGroupExampleInput").value.trim();
  const player2Name = document.getElementById("formGroupExampleInput2").value.trim();

  document.getElementById("player1").textContent = player1Name || "Player 1";
  document.getElementById("player2").textContent = player2Name || "Player 2";
}
