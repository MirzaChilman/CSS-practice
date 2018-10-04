const parentNode = document.getElementsByClassName('row')[0];
function initImage() {
  for (let i = 0; i < 42; i++) {
    const childNode = document.createElement('img');
    if (i > 2) {
      childNode.setAttribute('data-src', 'banner.jpg');
      childNode.setAttribute('class', 'lazy');
    } else {
      childNode.setAttribute('src', 'banner.jpg');
    }
    parentNode.appendChild(childNode);
  }
}

initImage();

let lazyLoadImages;

if ('IntersectionObserver' in window) {
  lazyLoadImages = document.querySelectorAll('.lazy');

  let imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove('lazy');
        imageObserver.unobserve(image);
      }
    });
  });
  lazyLoadImages.forEach(function(image) {
    imageObserver.observe(image);
  });
} else {
  let lazyloadThrottleTimeout;
  lazyLoadImages = document.getElementsByClassName('lazy')[0];
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function() {
      let scrollTop = window.scrollTop();
      lazyLoadImages.forEach;
    });
  }
}
