var rand1 = Math.floor(Math.random() * 6)+1; 

var dice = "images/dice" + rand1 + ".png";
var img = document.querySelectorAll("img")[0];
img.setAttribute("src",dice);


var rand2 = Math.floor(Math.random() * 6) + 1;

var dice2 = "images/dice" + rand2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",dice2);

if( rand1 > rand2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(rand1 == rand2)
{
    document.querySelector("h1").innerHTML = "Its a Draw Match";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}