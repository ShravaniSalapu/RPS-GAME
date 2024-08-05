const choice=["rock","paper","scissors"];
const pd=document.getElementById("pd");
const cd=document.getElementById("cd");
const rd=document.getElementById("rd");
const psd=document.getElementById("psd");
const csd=document.getElementById("csd");
const mr=document.getElementById("mainres");
let ps=0;
let cs=0;
function game(pc){
    const cc=choice[Math.floor(Math.random()*3)];
    let result="";
    if(pc==cc){
        result="IT'S A TIE!!🥴"
    }
    else{
        switch(pc){
            case "rock":
                result=(cc==="scissors")?"YOU WIN😊":"YOU LOSE😞";
                break;
            case "paper": 
                result=(cc==="rock")?"YOU WIN😊":"YOU LOSE😞";
                break;
            case "scissors": 
                result=(cc==="paper")?"YOU WIN😊":"YOU LOSE😞";
                break;
        }
    }
   pd.textContent=`PLAYER: ${pc}`;
   cd.textContent=`COMPUTER: ${cc}`;
   rd.textContent=`${result}`;
   rd.classList.remove("green","red");
   switch(result){
    case "YOU WIN😊":
        rd.classList.add("green");
        ps++;
        psd.textContent=`${ps}`
        break;
    case "YOU LOSE😞":
        rd.classList.add("red");
        cs++;
        csd.textContent=`${cs}`
        break;        
   }
   console.log(ps+cs);
   if(ps+cs==5){
     if(ps>cs){
        
         mr.textContent=`Player Wins`;
         console.log("PLayer wins");
     }
     else{
        
         mr.textContent=`Computer Wins`;
        
          console.log("Computer wins");
     }
   }
   else if(ps+cs>5){
    // ps=0;
    // cs=0;
    pd.textContent="";
   cd.textContent="";
   rd.textContent="";
    mr.textContent="restart your game";
    ps=0;
    cs=0;
    psd.textContent="";
    csd.textContent="";
    mr.textContent="";
    alert("chances over");
}
// mr.textContent="";
}
// if(ps+cs==5){
//     if(ps>cs){
        
//         mr.textContent=`Player Wins`;
//         // console.log("PLayer wins");
//     }
//     else{
        
//         mr.textContent=`Computer Wins`;
        
//         // console.log("Computer wins");
//     }
