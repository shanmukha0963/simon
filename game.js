var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var level=0;
var score=0;
var started =false;

$(document).keypress(function(){
  if(!started){
$("#level-title").text("Level "+level);
$("#score").text("Score : "+score);
nextSequence();
started=true;}
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
    score+=50;
  }
  else{  var existingScores = JSON.parse(localStorage.getItem('scores')) || [];
    if(existingScores.length==10)
    existingScores.pop();
   existingScores.push(score);
   localStorage.setItem('scores', JSON.stringify(existingScores));
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);


  startOver();
  }
}

function nextSequence()
{  userClickedPattern=[];
  level++;
  $("h1").text("Level "+level);
  $("#score").text("Score : "+score);
  var num=Math.floor(Math.random()*4);
var randomChosenColour=buttonColours[num];
gamePattern.push(randomChosenColour);
$('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}


function playSound(name)
{
  var audio = new Audio("sounds/" +name + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
  $('#'+currentColour).addClass("pressed");
  setTimeout(function(){
    $('#'+currentColour).removeClass("pressed");
  },100);
}


 function startOver()
 {  window.location.href = 'home.html';
 }
