
//Button click 
document.getElementById("playbtn").onclick = buttonClick;

//Button click function
function buttonClick(){
    var randomnum1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("player1").innerHTML = randomnum1;
    var imgSrc1 = "./images/dice" + randomnum1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imgSrc1);
  
    var randomnum2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("player2").innerHTML = randomnum2;
    var imgSrc2 = "./images/dice" + randomnum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);

  if (randomnum1 > randomnum2){
    document.getElementById("notice").innerHTML = "Player1 Wins..!!!"
  } else if(randomnum1 === randomnum2){
    document.getElementById("notice").innerHTML = "Draw..!!!"
  } else{
    document.getElementById("notice").innerHTML = "Player2 Wins..!!!"
  }

}

