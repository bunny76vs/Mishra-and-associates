document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // MOBILE NAVBAR
  // =====================
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  // =====================
  // SLIDER (FIXED)
  // =====================
  const slides = document.querySelectorAll(".slides .slide");
  let index = 0;

  if (slides.length > 0) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[0].classList.add("active");

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3500);
  }

  // =====================
  // HIGHLIGHT ANIMATION
  // =====================
  const highlightBoxes = document.querySelectorAll(".highlight-box");

  if (highlightBoxes.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    highlightBoxes.forEach(box => observer.observe(box));
  }

});
