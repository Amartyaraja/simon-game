let gameSequence=[];
let userSequence=[];
let highestscr=[];
let started=false;
let level=0;
let btns=["yellow","red","blue","green"];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

// steps to do 
//1 keypress the game start
// 2  button flash + level 1
document.addEventListener("keypress", function()
{
    if(started==false){
        console.log("game started");
        started=true;
        levelup();    }
});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function (){
    btn.classList.remove("flash")
},400);
   
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function (){
    btn.classList.remove("userflash")
},250);
   
}


function levelup()
{    userSequence=[];
    level++;
   
    h2.innerText=`level ${level}`;
    let idx=Math.floor(Math.random()*3);
    let randomcolor=btns[idx];
    let randomBtn=document.querySelector(`.${randomcolor}`);
    // console.log(idx);
    // console.log(randomcolor);
   
    // console.log(randomBtn);
    gameSequence.push(randomcolor);

    btnFlash(randomBtn);


}

function checkAns(index)
{
//   console.log("current level",level);
  
  if(userSequence[index]==gameSequence[index])
  {
      if(userSequence.length==gameSequence.length)
    setTimeout(levelup,500);
  }
  else
  {
  
    h2.innerHTML=`game over! your score was ${level-1} <br> please any key to restart`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
     },200);
     highestscr.push(level-1);
    reset();
  }
}

function btnpressed()
{
   let btn=this;
   userFlash(btn);
   let userColor=btn.getAttribute("id");
   userSequence.push(userColor);
   checkAns(userSequence.length-1);
    

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click", btnpressed);
}

function reset()
{    h3.innerText=`Highest Score: ${highest(highestscr)}`;
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}
function highest(arr)
{
    return Math.max(...arr);
}



