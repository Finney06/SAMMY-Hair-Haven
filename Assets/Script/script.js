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
  const quantityElement = document.getElementById("quantity");
  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");

  let quantity = 0;

  decreaseButton.addEventListener("click", () => {
      if (quantity > 0) {
          quantity--;
          updateQuantity();
      }
  });

  increaseButton.addEventListener("click", () => {
      quantity++;
      updateQuantity();
  });

  function updateQuantity() {
      quantityElement.textContent = quantity;
  }
  