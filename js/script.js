

let currentIndex = 0;
const slides = document.getElementsByClassName("img");
const totalSlides = slides.length;

function showSlide(index) {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1)% totalSlides ;
    showSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, 2000);


let startX = 0;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextSlide();
    } else if (endX - startX > 50) {
        previousSlide();
    }
});

// Initial display
showSlide(currentIndex);




const btn = document.getElementById('js_butt')
btn.onclick = function () {
    console.log('button has been clicked')
    alert('More pictures coming soon');
}