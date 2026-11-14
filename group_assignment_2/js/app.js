let imageIndex = 1;

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const imageCounter = document.querySelector(".footer__image-count");

arrowLeft.addEventListener("click", (previousImage) => {
  imageIndex = imageIndex - 1;
  if (imageIndex < 1) {
    imageIndex = 10;
  }
  imageCounter.textContent = `${imageIndex}/10`;
  //   console.log(imageIndex);
});

arrowRight.addEventListener("click", () => {
  imageIndex = imageIndex + 1;
  if (imageIndex > 10) {
    imageIndex = 1;
  }
  imageCounter.textContent = `${imageIndex}/10`;
  //   console.log(imageIndex);
});
