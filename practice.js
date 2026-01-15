document.querySelectorAll(".court-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    card.style.transform = "scale(1.04)";
  });
  card.addEventListener("mouseleave", e => {
    card.style.transform = "scale(1)";
  });
});
