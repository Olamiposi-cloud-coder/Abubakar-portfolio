'use strict'
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel')
  const reviews = document.querySelectorAll('.review')
  const reviewWidth = reviews[0].offsetWidth // Get the width of a single review
  const totalWidth = reviews.length * reviewWidth // Calculate the total width of the carousel
  let currentIndex = 0

  function animateCarousel() {
    currentIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1
    carousel.style.transition = 'transform 1s ease'
    carousel.style.transform = `translateX(-${currentIndex * reviewWidth}px)`
  }

  // Start the carousel animation
  setInterval(animateCarousel, 5000) // Adjust the interval as needed
})
