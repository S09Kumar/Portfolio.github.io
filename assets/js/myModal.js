let currentImageIndex = 0;
const images = ['image1.jpg', 'image2.jpg'];

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = images.indexOf(imageSrc);

    modal.style.display = 'flex';
    modalImage.src = imageSrc;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function changeImage(step) {
    currentImageIndex += step;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    document.getElementById('modalImage').src = images[currentImageIndex];
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};