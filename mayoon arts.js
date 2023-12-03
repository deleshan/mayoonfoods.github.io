let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 6000);
}

var model = document.getElementById("contactModel");
var img = document.getElementById("contactImg");
var span = document.getElementsByClassName("close")[0];
img.onclick = function () {
  model.style.display = "block";
};
span.onclick = function () {
  model.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == model) {
    model.style.display = "none";
  }
};
