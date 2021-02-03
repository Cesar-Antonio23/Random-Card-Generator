
let carta = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
let pinta = ['&spades;','&clubs;', '&hearts;', '&diams;'];

function randomCardNumber(card){
    return carta[card];
}

function randomSuiteNumber(suite){
    return pinta[suite];
}

window.onload = () =>{
    randomCard = Math.floor(Math.random()* carta.length);
    randomSuite = Math.floor(Math.random()* pinta.length);
    
    document.getElementById("topSuite").innerHTML = randomSuiteNumber(randomSuite);
    document.getElementById("numero").innerHTML = randomCardNumber(randomCard);
    document.getElementById("bottomSuite").innerHTML = randomSuiteNumber(randomSuite);
    
    if(pinta[randomSuite] == '&hearts;'|| pinta[randomSuite] =='&diams;' ){
        document.getElementById("bottomSuite").style.color = "#F5221F";
        document.getElementById("topSuite").style.color = "#F5221F";
        document.getElementById("numero").style.color = "#F5221F";
    }
    
}