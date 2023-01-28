let images = [
  "album/apple.jpg",
  "album/berry.jpg",
  "album/potato.jpg",
  "album/images.jpg",
  "album/carrot.jpg",
];

let right = document.querySelector(".rigthIcon");
let left = document.querySelector(".leftIcon");
let containerImages = document.querySelector(".images");
console.log(images);

function creatingTable() {
  containerImages.innerHTML = "";
  images.forEach((img) => {
    let slika = document.createElement("img");
    slika.src = img;
    containerImages.append(slika);
  });
}
creatingTable();
let imagesDom = document.querySelectorAll("div.images > img");
console.log(imagesDom, "E");

console.log(containerImages, "Sda");

right.addEventListener("click", () => {
  let pom = images[4];

  images[4] = images[3];
  images[3] = images[2];
  images[2] = images[1];
  images[1] = images[0];

  images[0] = pom;
  imagesDom[0].style = "opacity:0";
  console.log(images, "inside");

  creatingTable();
  upperSlider();
});
console.log(containerImages.childNodes);

// Lower part

// Upper part
let upperSliderVar = document.querySelector(".mainImage");
function upperSlider() {
  upperSliderVar.innerHTML = "";
  let bigImg = document.createElement("img");
  bigImg.src = images[2];
  upperSliderVar.append(bigImg);
  console.log(images[2], "inside upper");
  console.log(bigImg);
  console.log(upperSliderVar);

  upperSliderVar.append(bigImg);
}

upperSlider();
