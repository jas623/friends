// function hideImages() {
//   var button = document.getElementById("sample");
//   button.innerHTML = "I've been clicked";
// }
//
// function hideImages() {
//   var button = document.getElementById("sample");
//   button.innerHTML = "I've been clicked";
//   var images = document.getElementByTagName("img");
//   for (i=0; i<images.length; i++){
//     images[i].style.display = "none";
//   }
// }
//
// function hideImages() {
//   var button = document.getElementById("sample");
//   button.innerHTML = "I've been clicked";
//   var images = document.getElementById("ppl");
//   images.style.display = "none";
// }
//
// function hideCast() {
//   var buttonCast = document.getElementById("meet");
//   var cast = document.getElementById("ppl");
//   cast.style.display = "none";
// }
//

function hideCast() {
  var buttonCast = document.getElementById("meet");
  var cast = document.getElementById("ppl");
  for (i=0; i<cast.length; i++){
    cast[i].style.display = "none";
  }
}
