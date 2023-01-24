let images = [
  "album/apple.jpg",
  "album/berry.jpg",
  "album/potato.jpg",
  "album/images.jpg",
  "album/carrot.jpg",
];

let right = document.querySelector(".rigthIcon");
let left = document.querySelector(".leftIcon");

right.addEventListener("click", () => {
  console.log("sda");
  images[0] = images[2];
  imagesF();
  console.log(imagesF());
});

console.log(imagesF());

function imagesF() {
  return images;
}
let lowerSliderVar = document.querySelector(".images");

// Lower part

// Upper part
let upperSliderVar = document.querySelector(".mainImage");
function upperSlider() {
  let bigImg = document.createElement("img");
  bigImg.src = imagesF()[2];

  upperSliderVar.append(bigImg);
}

upperSlider();
