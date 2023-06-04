
let cardDiv=document.querySelectorAll(".card")
let wrongAudio = new Audio('asset/wrong.mp3');
let greenAudio=new Audio("asset/g.mp3")
let yellowAudio=new Audio("asset/y.mp3")
let redAudio=new Audio("asset/r.mp3")
let purpleAudio=new Audio("asset/p.mp3")

function correctAnswerSound(listColorItem){
    switch (listColorItem){
        case "green":
            greenAudio.currentTime = 0;
            greenAudio.play();
            break;
        case "red":
            redAudio.currentTime = 0;
            redAudio.play();
            break;
        case "yellow":
            yellowAudio.currentTime = 0;
            yellowAudio.play();
            break;
        case "purple":
            purpleAudio.currentTime = 0;
            purpleAudio.play();
            break;
    }
    
}

function wrongAnswerSound(){
    wrongAudio.currentTime=0;
    wrongAudio.play();
}

function blinkDiv(numberth){
    cardDiv[numberth].classList.add("flash");
    correctAnswerSound(cardDiv[numberth].classList[0]);
    setTimeout(() => {
        cardDiv[numberth].classList.remove("flash");
        }, "50");
}
function clickDiv(clicked,correctColor){
    if (clicked==correctColor){
        cardDiv[clicked].classList.add("clickedCorrect");
        correctAnswerSound(cardDiv[clicked].classList[0]);
        setTimeout(() => {
            cardDiv[clicked].classList.remove("clickedCorrect");
        }, "50");
        
    }else{
        cardDiv[clicked].classList.add("clickedWrong");
        gameStart=true;
        wrongAnswerSound(cardDiv[clicked].classList[0]);
        setTimeout(() => {
            cardDiv[clicked].classList.remove("clickedWrong");
        }, "50");
        gameTitle.innerHTML="Kaybettin Tekrar Başlamak için Bir Tuşa Bas!"
        
    }
    
}

let simonOrderArray=[]
function addingNewElement(){
    let randomNumber=Math.floor(Math.random()*4);
    simonOrderArray.push(randomNumber);
    setTimeout(() => {
        blinkDiv(randomNumber);
    }, "1000");
     
}

let counter=0;

for(let i=0;i<4;i++){
    cardDiv[i].addEventListener("click",()=>{
        if(!gameStart){
            if(counter==simonOrderArray.length-1){
                clickDiv(i,simonOrderArray[counter]);
                if(i==simonOrderArray[counter]){
                    addingNewElement();
                    level++;
                    gameTitle.innerHTML="Bölüm "+level
                }else{
                    console.log("son seçenekte elendin")
                }
                counter=0;
                console.log("event listener if")
                console.log(counter);
                console.log(simonOrderArray);
            }else if(counter<simonOrderArray.length){
                clickDiv(i,simonOrderArray[counter]);
                counter++;
                console.log("event listener elif")
                console.log(counter);
                console.log(simonOrderArray);
            }else{
                console.log("nasıl olabilir? imkansız")
            }
            
            }
            
            
        }
    )
}

let gameStart=true;
let gameTitle=document.querySelector("h1")
let level=0
document.addEventListener("keydown",()=>{
    if(gameStart){
        console.log("keydown if")
        simonOrderArray=[];
        addingNewElement();
        counter=0;
        gameStart=false;
        level=0;
        gameTitle.innerHTML="Bölüm "+level
    }else{
        console.log("oyun başladı")
    }
})