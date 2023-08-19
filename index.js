var num1 = Math.random() * 6;
num1 = Math.floor(num1)+1;
var num2 = Math.random() * 6;
num2 = Math.floor(num2)+1;
var randomImage1 = "./dice" + num1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);
var randomImage2 = "./dice" + num2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);
if (num1 > num2){
    document.querySelector("h1").textContent= "🚩Player 1 Wins!";
}
else if (num1 == num2){
    document.querySelector("h1").textContent= "Draw!";
}
else{
    document.querySelector("h1").textContent= "Player 2 Wins!🚩";
}
