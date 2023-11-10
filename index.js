let slideIndex = 0;
showSlides();

function showSlides() {
    let productImages = document.querySelectorAll('.product .product-image img');
    let currentIndex = slideIndex % productImages.length;

    for (let i = 0; i < productImages.length; i++) {
        productImages[i].style.opacity = 0;
    }

    productImages[currentIndex].style.opacity = 1;

    slideIndex++;

    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}
