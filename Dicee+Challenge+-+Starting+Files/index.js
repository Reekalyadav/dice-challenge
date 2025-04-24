var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

var dice1 = document.getElementsByTagName('img')[0].setAttribute("src","./images/dice" +random1+ ".png");
var dice2 = document.getElementsByTagName('img')[1].setAttribute("src","./images/dice" +random2+ ".png");

var heading=document.querySelector('h1');
if(random1 > random2){
    heading.textContent=" :) Player 1 Wins (:";
}
else if (random1 < random2) {
    heading.textContent=" :) Player 2 Wins (:";
} 
else {
    heading.textContent=" :) Draw (:";

}