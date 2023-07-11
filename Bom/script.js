const scrollToTopButton = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
