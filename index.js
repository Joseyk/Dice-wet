var fun=Math.round(Math.random()*6);
var fun2=Math.round(Math.random()*6);

// for player 1

if(fun===1){
document.querySelectorAll('img')[0].setAttribute('src','images/dice1.png');
}
else if(fun===2){
document.querySelectorAll('img')[0].setAttribute('src','images/dice2.png');
}
else if(fun===3){
document.querySelectorAll('img')[0].setAttribute('src','images/dice3.png');
}
else if(fun===4){
document.querySelectorAll('img')[0].setAttribute('src','images/dice4.png');
}
else if(fun===5){
document.querySelectorAll('img')[0].setAttribute('src','images/dice5.png');
}
else{
document.querySelectorAll('img')[0].setAttribute('src','images/dice6.png');
}

// for player2

if(fun2===1){
document.querySelectorAll('img')[1].setAttribute('src','images/dice1.png');
}
else if(fun2===2){
document.querySelectorAll('img')[1].setAttribute('src','images/dice2.png');
}
else if(fun2===3){
document.querySelectorAll('img')[1].setAttribute('src','images/dice3.png');
}
else if(fun2===4){
document.querySelectorAll('img')[1].setAttribute('src','images/dice4.png');
}
else if(fun2===5){
document.querySelectorAll('img')[1].setAttribute('src','images/dice5.png');
}
else{
document.querySelectorAll('img')[1].setAttribute('src','images/dice6.png');  
}

// for the winner

if(fun===fun2){
document.querySelector('h1').innerHTML='Draw!';   
}
else if(fun>fun2){
document.querySelector('h1').innerHTML='Player 1 Wins!';  
}
else{
document.querySelector('h1').innerHTML='Player 2 Wins!';   
}

