let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","blue"];
let started =false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress" ,function(){
    // console.log("game started");
    if(started==false){
        console.log("game is started");
        started =true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    // to bring and remove
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    // to bring and remove
}


//levelup and randomflash

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;


    let randidx=Math.floor(Math.random() * 3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // bar bar karne wali cheez ko fix
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);

    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

//button pressed after game start

function checkans(idx){
    console.log("curr level : ",level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        // console.log("same value");
        if(userseq.length==gameseq.length){
            // levelup();
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`\u2694 Game Over! Your score was <b>${level}   any key to start \u2694`;
        h2.classList.add("gameovercolor");
        reset()
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);
}
 
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}