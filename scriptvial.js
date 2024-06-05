let currentImageIndex = 0;
const images = [
    "vial/vial1.jpeg",
    "vial/vial2.jpeg",
    "vial/vial3.jpeg",
    "vial/vial4.jpeg",
    "vial/vial5.jpeg",
    "vial/vial6.jpeg"
];

function changeImage(index) {
    document.getElementById('displayedImage').src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('displayedImage').src = images[currentImageIndex];
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('displayedImage').src = images[currentImageIndex];
}