
// This is the foundation for the timer and the scoreboard in the top left corner

document.getElementById('timer').innerHTML = 005 + ":" + 30;
var score = document.getElementById('score'), count=0;


// These functions and variables all relate to whether the buttons will cause the test to change, as well as which direction the score will go in.
var a1 = document.getElementById("a1")
a1.onclick = function(){
  count+=1;
  score.innerHTML = "Score: " + count;
  correct1();
}
var b1 = document.getElementById("b1")
b1.onclick= function(){
  count -=1;
  score.innerHTML="Score: " + count;
}

var b2 = document.getElementById("b2")
b2.onclick = function(){
  count+=1;
  score.innerHTML = "Score: " + count;
  correct2();
}
var a2 = document.getElementById("a2")
a2.onclick= function(){
  count -=1;
  score.innerHTML="Score: " + count;
}


var a3 = document.getElementById("a3")
a3.onclick = function(){
  count+=1;
  score.innerHTML = "Score: " + count;
  correct3();
}
var b3 = document.getElementById("b3")
b3.onclick= function(){
  count -=1;
  score.innerHTML="Score: " + count;
}



var a4 = document.getElementById("a4")
a4.onclick = function(){
  count+=1;
  score.innerHTML = "Score: " + count;
  correct4();
}
var b4 = document.getElementById("b4")
b4.onclick= function(){
  count -=1;
  score.innerHTML="Score: " + count;
}



// This takes control of the timer ID and creates the stage for allowing it to work by using the timeArray.
function startTimer(){
    var presentTime= document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1]-1));
    if(s==59){m=m-1}


// Because M and S are variables, the final clock time is the two added together by changing the inner HTML
document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}
// this sets the rules for the second side of the timer, and allows it to restart from 59 once it reaches zero
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
  }

// this functions purpose is to hide all other existing elements from the page at once, as well as start the timer
    function start(){
    document.getElementById('question1').style.display = "block";
    document.getElementById('a1').style.display="block";
    document.getElementById('b1').style.display="block";
    document.getElementById('question2').style.display="none";
    document.getElementById('question3').style.display="none";
    document.getElementById('question4').style.display="none";

    document.getElementById('a2').style.display="none";
    document.getElementById('b2').style.display="none";
    document.getElementById('a3').style.display="none";
    document.getElementById('b3').style.display="none";
    document.getElementById('a4').style.display="none";
    document.getElementById('b4').style.display="none";



    document.getElementById('timer').innerHTML = 005 + ":" + 30;
    startTimer();

}
  // all of these elements make the new elements visible and hide the previous one
    function correct1(){

    document.getElementById('question1').style.display = "none";
    document.getElementById('a1').style.display="none";
    document.getElementById('b1').style.display="none";
    document.getElementById('question2').style.display = "block";
    document.getElementById('a2').style.display="block";
    document.getElementById('b2').style.display="block";
    }


    function correct2(){
      document.getElementById('question2').style.display = "none";
      document.getElementById('a2').style.display="none";
      document.getElementById('b2').style.display="none";
      document.getElementById('question3').style.display = "block";
      document.getElementById('a3').style.display="block";
      document.getElementById('b3').style.display="block";
      } 
    

      function correct3(){
      document.getElementById('question3').style.display = "none";
      document.getElementById('a3').style.display="none";
      document.getElementById('b3').style.display="none";
      document.getElementById('question4').style.display = "block";
      document.getElementById('a4').style.display="block";
      document.getElementById('b4').style.display="block";
      }

      function correct4(){
      document.getElementById('question4').style.display = "none";
      document.getElementById('a4').style.display="none";
      document.getElementById('b4').style.display="none"; 
      alert("Your final score is " + count) 
      }





