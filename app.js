// let images = [
//   "album/apple.jpg",
//   "album/berry.jpg",
//   "album/potato.jpg",
//   "album/images.jpg",
//   "album/carrot.jpg",
// ];

let right = document.querySelector(".rigthIcon");
let left = document.querySelector(".leftIcon");
let images = document.querySelectorAll(".singleImg");
let containerImages = document.querySelector(".images");
console.log(images);

let lowerSliderVar = document.querySelector(".images");

right.addEventListener("click", () => {
  containerImages.insertBefore(images[4], images[0]);
  let pom = images[4];
  images[4] = images[0];
  images[0] = pom;
  containerImages.insertBefore(images[1], images[2]);
  let pom2 = images[1];
  images[1] = images[2];
  images[2] = pom2;
  containerImages.insertBefore(images[2], images[3]);
  let pom3 = images[2];
  images[2] = images[3];
  images[3] = pom3;
  console.log(containerImages.childNodes);
  console.log(images, "any change");
});
console.log(containerImages.childNodes);

// Lower part

// Upper part
// let upperSliderVar = document.querySelector(".mainImage");
// function upperSlider() {
//   let bigImg = document.createElement("img");
//   bigImg.src = imagesF()[2];

//   upperSliderVar.append(bigImg);
// }

// upperSlider();
