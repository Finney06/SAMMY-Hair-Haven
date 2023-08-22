const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.pageYOffset > 200) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
  
  document.getElementById('scrollToTopButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // INCREASE DECREASE
  const quantityInput = document.getElementById("quantity");
  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");

  decreaseButton.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 0) {
          quantityInput.value = currentValue - 1;
      }
  });

  increaseButton.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
  });