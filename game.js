let num=document.getElementById("1");
let generate=document.getElementById("2");
let res=document.getElementById("h1");
let play=document.getElementById("b");
let score=document.getElementById("s");
let reset=document.getElementById("re");
let count=0;
play.addEventListener("click",function(){
    let m=num.value;
    count+=1;
    generate.value=Math.floor(Math.random()*100)+1;
    if(m==generate.value){
        res.textContent="Success";
        score.value=100-count;
        alert("stop");
    }
   })
reset.addEventListener("click",function(){
    count=0;
    num.value="";
    generate.value="";
    res.textContent="Result";
    score.value="";


   })