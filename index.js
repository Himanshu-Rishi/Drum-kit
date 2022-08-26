// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     alert("I got clicked");
//   });
// }
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function()
//   {
//     var audio = new Audio('sounds/crash.mp3')
//     audio.play();
//   });
// }
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var char = this.innerHTML;
  });
}
document.addEventListener('keypress', function (event) {
    makesound(event.key);
    addanimation(event.key);
    // alert(event.key);
    // console.log(event);
});

function makesound(char){
  switch (char) {
    case "w":
      var audio_a = new Audio("sounds/tom-1.mp3");
      audio_a.play();
      break;
    case "a":
      var audio_a = new Audio("sounds/tom-2.mp3");
      audio_a.play();
      break;
    case "s":
      var audio_a = new Audio("sounds/tom-3.mp3");
      audio_a.play();
      break;
    case "d":
      var audio_a = new Audio("sounds/tom-4.mp3");
      audio_a.play();
      break;
    case "j":
      var audio_a = new Audio("sounds/snare.mp3");
      audio_a.play();
      break;
    case "k":
      var audio_a = new Audio("sounds/crash.mp3");
      audio_a.play();
      break;
    case "l":
      var audio_a = new Audio("sounds/kick-bass.mp3");
      audio_a.play();
      break;

    default:
      console.log(char);
  }
}
function addanimation(element)
{
  var selected_key = document.querySelector("." + element);
  console.log(selected_key);
  selected_key.classList.add("pressed");
  setTimeout(function()
  {
    selected_key.classList.remove("pressed");
  }, 100);
}