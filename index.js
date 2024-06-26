const menutoggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

i = 0;

function ActiveSlide(n) {
  for (slide of slides) slide.classList.remove("active");
  slides[n].classList.add("active");
}

next.addEventListener("click", function () {
  if (i == slides.length - 1) {
    i = 0;
    ActiveSlide(i);
  } else {
    i++;
    ActiveSlide(i);
  }
})

prev.addEventListener("click", function () {
  if (i == 0) {
    i = slides.length - 1;
    ActiveSlide(i);
  } else {
    i--;
    ActiveSlide(i);
  }
})
