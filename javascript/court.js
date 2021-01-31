var accused = document.getElementById("accused");
var writer = document.getElementById("writer");
var judge1 = document.getElementById("judge1");
var judge2 = document.getElementById("judge2");
var judge3 = document.getElementById("judge3");
var dialog = document.getElementById("dialog");
var bg = document.getElementById("bgCourt");
var tv = document.getElementById("tv");
var scene = 0;
var audio = document.getElementById("audio");

increaseOpacity(bg, 0.005);
start();



async function start() {
  //scene 01
  display_dialog(writer,"All rise for the jury.");
  await wait(5000);
  // scene 03
  // jury enters
  
  setTimeout(function () {
    increaseOpacity(judge2, 0.007);
    increaseOpacity(judge3, 0.007);
    increaseOpacity(judge1, 0.003);
    scene++;
  }, 3000);
  await wait(3000);
  display_dialog(judge1,"order-order");
}

var modal = document.getElementById("sam");
function samarth() {
  if(modal.style.display === "none"){
     modal.style.display = "block";
     bg.style.filter= "blur(6px)"
  }
  else{
    modal.style.display = "none";
    bg.style.filter= ""
  }
}


// functions used multiple times

//play function is used to play mp3 file
function play() {
  audio.play();
    }

function increaseOpacity(ele, del) {
  var val = 0;
  var op = setInterval(function () {
    ele.style.opacity = val;
    val = val + del;
    if (val >= 1) {
      clearInterval(op);
    }
  }, 10);
}
function decreaseOpacity(ele, del) {
  var val = 1;
  var op = setInterval(function () {
    ele.style.opacity = val;
    val = val - del;
    if (val <= 0) {
      clearInterval(op);
    }
  }, 10);
}

async function display_dialog(user,message){
  audio.play();
	style = window.getComputedStyle(user),
    top1 = parseInt(style.getPropertyValue('top'), 10);
	left = parseInt(style.getPropertyValue('left'), 10);
	
	document.getElementById("msg").innerHTML =`
	<p>`+message+`</p>
	`;
	setTimeout(function () {
    dialog.style.left = left + 20;
    dialog.style.top = top1 - 170;
    increaseOpacity(dialog, 0.01);
    scene++;
  }, 3000);
  await wait(3000);

  // scene 02
  // rise lawyers
  // add pop up to make defence lawyer stand
  // wait for defense lawyer to stand
  setTimeout(function () {
    decreaseOpacity(dialog, 0.03);
    scene++;
  }, 3000);
  await wait(2000);
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
