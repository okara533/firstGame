
let cardDiv=document.querySelectorAll(".card")
var audio = new Audio('asset/correct.wav');
let greenAudio=new Audio("asset/g.mp3")
let yellowAudio=new Audio("asset/y.mp3")
let redAudio=new Audio("asset/r.mp3")
let purpleAudio=new Audio("asset/p.mp3")
for(let i=0;i<4;i++){
    cardDiv[i].addEventListener("click",()=>{
        
        cardDiv[i].classList.add("clicked");
        switch (cardDiv[i].classList[0]){
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
        
        setTimeout(() => {
            cardDiv[i].classList.remove("clicked");

          }, "50");
        
          
    })
}
