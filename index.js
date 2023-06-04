
let cardDiv=document.querySelectorAll(".card")


for(let i=0;i<4;i++){
    cardDiv[i].addEventListener("click",()=>{
        
        cardDiv[i].classList.add("clicked");
        setTimeout(() => {
            cardDiv[i].classList.remove("clicked");
          }, "50");
        
          
    })
}
