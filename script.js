let current = 0;
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", nextSlide);
});

function nextSlide() {
  if (current < slides.length - 1) {
    slides[current].classList.remove("active");
    current++;
    slides[current].classList.add("active");
  }
}

/* HEART GENERATOR */
for (let i = 0; i < 12; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
}
