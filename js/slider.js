const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const searchBox = document.querySelector('.search-box');
const menuOverlay = document.querySelector('.menu-overlay');
const closeButton = document.querySelector('.close-button');
const cartProfileButton = document.querySelector('.cart-profile');

cartProfileButton.addEventListener('click', function() {
  menuOverlay.classList.add('active');
});
closeButton.addEventListener('click', function() {
  menuOverlay.classList.remove('active');
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});












// СЛАЙДЕР_______________________________________________

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const arrows = document.querySelectorAll('.arrow');
const slideBars = document.querySelectorAll('.slide-bar');

let currentIndex = 0;

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateY(-${currentIndex * 100}%)`;
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex || index === currentIndex + 1) {
      slide.classList.add('active');
    }
  });
  slideBars.forEach((slideBar, index) => {
    slideBar.classList.remove('active');
    if (index === currentIndex) {
      slideBar.classList.add('active');
    }
  });
}

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('top-arrow')) {
      prevSlide();
    } else if (arrow.classList.contains('bottom-arrow')) {
      nextSlide();
    }
  });
});

setInterval(() => {
  nextSlide();
}, 8000);

updateSlider();



