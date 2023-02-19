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

right.addEventListener("click", () => {
  upperSlider();
  containerImages.insertBefore(
    containerImages.children[4],
    containerImages.children[0]
  );

  upperSlider();
});
left.addEventListener("click", () => {
  upperSlider();
  containerImages.insertBefore(
    containerImages.children[0],
    containerImages.children[5]
  );
  console.log(containerImages.children);
  upperSlider();
});

// Lower part

// Upper part
let upperSliderVar = document.querySelector(".mainImage");
function upperSlider() {
  upperSliderVar.innerHTML = "";
  let bigImg = document.createElement("img");
  bigImg.src = containerImages.children[2].src;
  upperSliderVar.append(bigImg);

  upperSliderVar.append(bigImg);
}

upperSlider();
