var speech = new SpeechSynthesisUtterance();
var accused = document.getElementById("accused");
var writer = document.getElementById("writer");
var judge1 = document.getElementById("judge1");
var judge2 = document.getElementById("judge2");
var judge3 = document.getElementById("judge3");
var player = document.getElementById("Plawyer");
var player1 = document.getElementById("Plawyer1");
var dlawyer = document.getElementById("Dlawyer");
var dlawyer1 = document.getElementById("Dlawyer1");
var player_stand = document.getElementById("player_stand");
var dlawyer_stand = document.getElementById("dlawyer_stand");
var dialog = document.getElementById("dialog");
var audio = document.getElementById("audio");
var bg = document.getElementById("bgCourt");
var tv = document.getElementById("tv");
var scene = 0;

//display_dialog(user,message); -Used to display dialog and speak text
//quiz_display(); -Used to display Quiz Question

increaseOpacity(bg, 0.005);
start();
async function start() {
//scene 01
display_dialog(writer,"All rise for the jury.");
await wait(5000);
// scene 03
// jury enters

setTimeout(async function () {
increaseOpacity(judge2, 0.007);
increaseOpacity(judge3, 0.007);
await wait(1500);
increaseOpacity(judge1, 0.007);
scene++;
}, 3000);
await wait(3000);
display_dialog(judge1,"order-order");
}


// functions used multiple times

//play function is used to play mp3 file
function play() {
audio.play();
}

//Used to Increase Opacity
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

//Used to Decrease Opacity
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

//Used to display Dialog box
async function display_dialog(user,message){
speech.lang = "en-US";
speech.text = message;
speech.volume = 5;
speech.rate = 1;
speech.pitch = -1;
style = window.getComputedStyle(user),
top1 = parseInt(style.getPropertyValue('top'), 10);
left = parseInt(style.getPropertyValue('left'), 10);

document.getElementById("msg").innerHTML =`
<p>`+message+`</p>
`;
setTimeout(function () {
dialog.style.left = left + 20;
dialog.style.top = top1 - 170;
window.speechSynthesis.speak(speech);
increaseOpacity(dialog, 0.01);
scene++;
}, 3000);
await wait(3000);
setTimeout(function () {
decreaseOpacity(dialog, 0.03);
scene++;
}, 3000);
await wait(2000);
}

function wait(time) {
return new Promise((resolve) => setTimeout(resolve, time));
}

//Used to Hide/Display Quiz
function quiz_display() {
var x = document.getElementById("quiz_outer");
if (x.style.display === "none") {
x.style.display="block";
bg.style.filter= "blur(6px)";
}
else {
x.style.display="none";
bg.style.filter= ""
}
}

//Used to Hide/Display Book
function samarth() {
var modal = document.getElementById("display_book");
if(modal.style.display === "none"){
modal.style.display = "block";
bg.style.filter= "blur(6px)";
}
else{
modal.style.display = "none";
bg.style.filter= "";
}
}

//Used to Hide/Display Scroll
function scroll_function() {
var x = document.getElementById("scroll_div");
if (x.style.display === "none") {
x.style.display = "block";
bg.style.filter= "blur(6px)";
}
else {
x.style.display = "none";
bg.style.filter= "";
}
}