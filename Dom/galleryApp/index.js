const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const closeButton = document.querySelector(".close-button");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modal.style.display = "flex";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
