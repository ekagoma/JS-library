// Initialize AOS (Animate on Scroll) library
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Animation easing style
  once: true // Animation only once on scroll
});

// Initialize Glide.js for the carousel
document.addEventListener("DOMContentLoaded", function () {
  new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800
  }).mount();
});

// Initialize Masonry for the product grid layout
window.onload = function () {
  const grid = document.querySelector('.product-grid');
  if (grid) {
    new Masonry(grid, {
      itemSelector: '.product-item',
      columnWidth: '.product-item',
      percentPosition: true
    });
  }
};

// Initialize Lightbox for the image gallery
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'fadeDuration': 300
});

// Add Anime.js hover animation to product images
document.querySelectorAll('.product-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    anime({
      targets: item.querySelector('img'),
      scale: 1.05,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  });
  item.addEventListener('mouseleave', () => {
    anime({
      targets: item.querySelector('img'),
      scale: 1,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  });
});



