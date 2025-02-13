document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.sneakersCollection');
  const mainDisplay = document.getElementById('displaySneakers');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  const modal = document.getElementById('imageModal');
  const closeModal = document.querySelector('.close-btn');
  const modalImage = document.getElementById('modalDisplaySneakers');
  const modalThumbnails = document.querySelectorAll('.modalSneakersCollection');
  const modalPrevButton = document.querySelector('.modal .prev');
  const modalNextButton = document.querySelector('.modal .next');

  const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
  ];

  let currentIndex = 0;

  function updateMainDisplay(index) {
    mainDisplay.src = images[index];
    thumbnails.forEach((thumbnail, i) => {
      if (i === index) {
        thumbnail.classList.add('selected');
      } else {
        thumbnail.classList.remove('selected');
      }
    });
  }

  function updateModalDisplay(index) {
    modalImage.src = images[index];
    modalThumbnails.forEach((thumbnail, i) => {
      if (i === index) {
        thumbnail.classList.add('selected');
      } else {
        thumbnail.classList.remove('selected');
      }
    });
  }

  function showModal() {
    modal.style.display = 'flex';
    updateModalDisplay(currentIndex);
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateMainDisplay(index);
      showModal();
    });
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateMainDisplay(currentIndex);
    showModal();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateMainDisplay(currentIndex);
    showModal();
  });

  mainDisplay.addEventListener('click', showModal);

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modalThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateModalDisplay(index);
    });
  });

  modalPrevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateModalDisplay(currentIndex);
  });

  modalNextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateModalDisplay(currentIndex);
  });

  updateMainDisplay(currentIndex); // Initialize the main display without showing the modal
});

// Quantity controls
const decreaseItemButton = document.getElementById('decreaseItemBtn');
const increaseItemButton = document.getElementById('increaseItemBtn');
const addToCartButton = document.getElementById('addToCartBtn');
const cartCountDisplay = document.getElementById('cart-count');

let itemCount = 0;
let totalCartItems = 0; // This will track the total number of items in the cart

increaseItemButton.addEventListener('click', () => {
  itemCount++;
  document.getElementById('sneakerQty').innerHTML = itemCount;
});

decreaseItemButton.addEventListener('click', () => {
  if (itemCount > 0) {
    itemCount--;
  }
  document.getElementById('sneakerQty').innerHTML = itemCount;
});

addToCartButton.addEventListener('click', () => {
  if (itemCount > 0) {
    totalCartItems += itemCount; // Add selected quantity to cart
    cartCountDisplay.textContent = totalCartItems;
    cartCountDisplay.style.visibility = "visible"; // Show cart badge
    itemCount = 0; // Reset selected quantity after adding to cart
    document.getElementById('sneakerQty').innerHTML = itemCount;
  }
});
