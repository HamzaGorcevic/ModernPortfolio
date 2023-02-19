let images = [
  "album/apple.jpg",
  "album/berry.jpg",
  "album/potato.jpg",
  "album/images.jpg",
  "album/carrot.jpg",
];

let right = document.querySelector(".rightIcon");
let left = document.querySelector(".leftIcon");
let containerImages = document.querySelector(".images");

right.addEventListener("click", () => {
  upperSlider();
  containerImages.insertBefore(
    containerImages.children[6],
    containerImages.children[0]
  );

  upperSlider();
});
left.addEventListener("click", () => {
  upperSlider();
  containerImages.insertBefore(
    containerImages.children[0],
    containerImages.children[7]
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
  bigImg.src = containerImages.children[3].children[0].src;
  upperSliderVar.append(bigImg);

  upperSliderVar.append(bigImg);
}

upperSlider();
