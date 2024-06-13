// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("img");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }



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

// function previousSlide() {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     showSlide(currentIndex);
// }

// Automatically move to the next slide every 2 seconds
let autoSlide = setInterval(nextSlide, 2000);

// Touch events for mobile devices to swipe
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
