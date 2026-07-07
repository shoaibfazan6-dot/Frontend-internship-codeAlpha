const images=[
    './images/img1.jpg',
    './images/img2.jpg',
    './images/img3.jpg',
    './images/img4.jpg',
    './images/img5.jpg',
    './images/img6.jpg'
]

let currentIndx=0
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const openLightbox=(indx)=>{
    currentIndx=indx
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndx];
}
const closeLightbox=()=> {
  lightbox.style.display = "none";
}

const changeImage=(ind)=>{
    currentIndx+=ind
    if(currentIndx<0){
        currentIndx=images.length-1
    }
    if(currentIndx>images.length){
        currentIndx=0
    }
   lightboxImg.src = images[currentIndx];
}


document.addEventListener("keydown", function (e) {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") {
      changeImage(1);
    }
    if (e.key === "ArrowLeft") {
      changeImage(-1);
    }
    if (e.key === "Escape") {
      closeLightbox();
    }
  }
});