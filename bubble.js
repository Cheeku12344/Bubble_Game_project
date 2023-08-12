
function Bubble(){
var clutter = "";
for(var i = 1;i<=230;i++){
    var a = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${a}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 10;
var b = 0;
function time(){
 var timing = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timing);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over</h1>`;
        }
    },1000)
}
function getNewHit()
{
     b = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = b;
}
var score = 0;
function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(val){
    var clickd = Number(val.target.textContent);
    if(clickd===b){
        increseScore();
        Bubble();
        getNewHit();
    }

})

time();
Bubble();
getNewHit();
