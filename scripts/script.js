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

let the = document.querySelector('button')
the.addEventListener('click', juiceHandler)
the.addEventListener('animationend', juiceHandler)

function juiceHandler() {
  the.classList.toggle('juice')
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}