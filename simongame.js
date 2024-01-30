let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];


let started=false;

let level=0;


document.addEventListener("keydown",function(){

    if(started==false){

        console.log("Game is started");
        started=true;


        levelup();
    }
});

let h2=document.querySelector("h2");


function gameflash(btn){

    btn.classList.add("flash");


    setTimeout(function () {

        btn.classList.remove("flash");
    },500);

}



function levelup(){

    userseq=[];


    level++;
    h2.innerText=`Level ${level}`;


    let randomidx=Math.floor(Math.random()*3);

    let randomcolor=btns[randomidx];

    let randombtn=document.querySelector(`.${randomcolor}`);


    gameseq.push(randomcolor);
    console.log(gameseq);










    gameflash(randombtn);

    
}


function userflash(btn){

    btn.classList.add("userflash");


    setTimeout(function () {

        btn.classList.remove("userflash");
    },250);

}

function checkAns(idx){


    if(userseq[idx]==gameseq[idx]){

        console.log("same value");

        if(userseq.length==gameseq.length){

            setTimeout(levelup,1000);
        }

    }else{

        h2.innerText=`Game over your score was ${level} Press any key to start`;

        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){

            document.querySelector("body").style.backgroundColor="white";

            

        },150);

        reset();



    }

    console.log("curr level:",level);
}

function reset(){

    gameseq=[];
    userseq=[];

    level=0;

    started=false;

}





function btnPress(){

    console.log(this);

    let btn=this;

    userflash(btn);

    userColor=btn.getAttribute("id");

    console.log(userColor);

    userseq.push(userColor);

    checkAns(userseq.length-1);

    





}


let allbtn=document.querySelectorAll(".btn");


for(btn of allbtn){

    btn.addEventListener("click",btnPress);

}









