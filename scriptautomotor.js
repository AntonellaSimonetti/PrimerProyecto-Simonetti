let currentImageIndex = 0;
const images = [
    "automotriz/auto1.jpeg",
    "automotriz/auto2.jpeg",
    "automotriz/auto3.jpeg",
    "automotriz/auto4.jpeg",
    "automotriz/auto5.jpeg",
    "automotriz/auto6.jpeg"
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