const container = document.querySelector(".container");

const URL = "https://dog.ceo/api/breeds/image/random";

// get the images

function loadImages(numImages = 16) {
  let i = 0;
  while (i < numImages) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.message)
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
}

loadImages();

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener("scroll", () => {
  console.log("scrolled", window.scrollY); //scrolled from top
  console.log(window.innerHeight); //visible part of screen
  loadImages();
});
