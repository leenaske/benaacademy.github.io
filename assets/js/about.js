let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}
