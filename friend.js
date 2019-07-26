function imageEnlarge(x) {
  x.style.height="400px";
}

function imageShrink(y) {
  y.style.height="250px";
}

var i = 0;
var txt = 'Meet the Gang';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
