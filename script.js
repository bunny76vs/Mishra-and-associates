document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE NAVBAR
  ========================== */

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });

    // Close menu when link is clicked (mobile UX fix)
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
      });
    });
  }

  /* =========================
     SLIDER
  ========================== */

  const slides = document.querySelectorAll(".slide");
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

});
