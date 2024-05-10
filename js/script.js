let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Add this line to set the first slide as active initially
slides[currentSlide].classList.add('active');
