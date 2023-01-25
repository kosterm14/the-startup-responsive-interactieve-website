window.onscroll = function() {stick()};

var header = document.getElementById("sticky-header");

var sticky = header.offsetTop;

function stick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let animation = document.querySelector('button')
animation.addEventListener('click', juiceHandler)
animation.addEventListener('animationend', juiceHandler)

function juiceHandler() {
  animation.classList.toggle('juice');
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}