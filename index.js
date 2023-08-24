var gamePattern=[];
var userPattern=[];
var started=false;
var buttcol=["red", "blue", "green", "yellow"];
var level=0;

$(document).keydown(function(){
    if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true; }
     });

$(".btn").click(function(){
    var userchose=$(this).attr("id");
    userPattern.push(userchose);
    playSound(userchose);
    buttonAnimation(userchose);
    checkAnswer(userPattern.length-1);
    });

function checkAnswer(currentLevel)
{
 if (gamePattern [currentLevel]===userPattern[currentLevel]) {
    if (userPattern.length===gamePattern.length){
        setTimeout(function(){
        nextSequence();
        },1000);
    }}else{
           playSound("wrong");
           $("body").addClass("game-over");
           $("#level-title").text("Game Over, Press Any Key To Restart");
           setTimeout(function(){
            $("body").removeClass("game-over");
           },200);
           startOver();
}}

function nextSequence(){
userPattern=[];
level++;
$("#level-title").text("Level "+ level);
var randomNumber=Math.floor(Math.random()*4);
var randomColor= buttcol[randomNumber];
gamePattern.push(randomColor);
$("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomColor);
}

function buttonAnimation(currColor){
    $("#"+currColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currColor).removeClass("pressed");},100);  
}

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function startOver()
{
    level=0;
    gamePattern=[];
    started=false;
}



