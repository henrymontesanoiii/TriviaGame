// variables
var time = 40;
var correct = 0;
var incorrect = 0;
var unanswered = 8;
var started = false;
var intervalId;
var question1Answer = "";
var question2Answer = "";
var question3Answer = "";
var question4Answer = "";
var question5Answer = "";
var question6Answer = "";
var question7Answer = "";
var question8Answer = "";

//audio elements
var boomstick = document.createElement("audio");
boomstick.setAttribute("src", "assets/audio/boomstick.mp3");
var pants = document.createElement("audio");
pants.setAttribute("src", "assets/audio/pants.mp3");
var run = document.createElement("audio");
run.setAttribute("src", "assets/audio/run.mp3");




//page loads
function load (){
$('#game').hide();
$(".end").hide();
started === false;
console.log("ready");
 
} 


load();

//start game
$(".bg-primary").click(start);


function start (){
  $('#game').show();
  $('.bg-primary').hide();
  $('.load-picture').hide();
  started === true;
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  boomstick.play();
  
}


//timer function


function decrement() {
  time--;
  $("#timer").html("<h1>" + time + " seconds" + "</h1>");

  if (time === 0) {

    stop();

  }
}




//give question variables value
$("#q1").on("change", function() {
  
  question1Answer = this.value;
  
  
})

$("#q2").on("change", function() {
  
  question2Answer = this.value;
  
})

$("#q3").on("change", function() {
  
  question3Answer = this.value;
  
})

$("#q4").on("change", function() {
  
  question4Answer = this.value;
  console.log(question4Answer);
  
})

$("#q5").on("change", function() {
  
  question5Answer = this.value;
  
})
$("#q6").on("change", function() {
  
  question6Answer = this.value;
  
})
$("#q7").on("change", function() {
  
  question7Answer = this.value;
  
})
$("#q8").on("change", function() {
  
  question8Answer = this.value;
  
})

  

//game over logic

//question 1
function question1(){
if (question1Answer === "3"){
  correct ++
  unanswered --
}
else if (question1Answer === "2" || question1Answer === "4"){
  incorrect ++
  unanswered --
}
}
//question 2
function question2(){
  if (question2Answer === "2"){
    correct ++
    unanswered --
  }
  else if (question2Answer === "3" || question2Answer === "4"){
    incorrect ++
    unanswered --
  }
  }
  //question 3
function question3(){
  if (question3Answer === "2"){
    correct ++
    unanswered --
  }
  else if (question3Answer === "3" || question3Answer === "4"){
    incorrect ++
    unanswered --
  }
  }
//question 4
function question4(){
  if (question4Answer === "3"){
    correct ++
    unanswered --
  }
  else if (question4Answer === "2" || question4Answer === "4"){
    incorrect ++
    unanswered --
  }
  }
  //question 5
function question5(){
  if (question5Answer === "4"){
    correct ++
    unanswered --
  }
  else if (question5Answer === "3" || question5Answer === "2"){
    incorrect ++
    unanswered --
  }
  }
   //question 6
function question6(){
  if (question6Answer === "4"){
    correct ++
    unanswered --
  }
  else if (question6Answer === "3" || question6Answer === "2"){
    incorrect ++
    unanswered --
  }
  }
   //question 7
function question7(){
  if (question7Answer === "2"){
    correct ++
    unanswered --
  }
  else if (question7Answer === "3" || question7Answer === "4"){
    incorrect ++
    unanswered --
  }
  }
   //question 8
function question8(){
  if (question8Answer === "3"){
    correct ++
    unanswered --
  }
  else if (question8Answer === "2" || question8Answer === "4"){
    incorrect ++
    unanswered --
  }
  }



//  The stop function
function stop() {
  clearInterval(intervalId);
  $('#game').hide();
  $(".start-screen").hide();
  $('.load-picture').show();
  question1();
  console.log(question1Answer);
  question2();
  console.log(question2Answer);
  question3();
  console.log(question3Answer);
  question4();
  console.log(question4Answer);
  question5();
  console.log(question5Answer);
  question6();
  console.log(question6Answer);
  question7();
  console.log(question7Answer);
  question8();
  console.log(question8Answer);
  $(".end").show();
  $("#correct").text("Correct: " + correct);
  $("#incorrect").text("Incorrect: " + incorrect);
  $("#unanswered").text("Unanswered: " + unanswered);
  if (correct > 4){
    pants.play();
  }
  else{
    run.play();
  }
  

}








