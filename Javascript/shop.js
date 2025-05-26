// === Cart Sidebar Toggle ===
const cartToggleBtn = document.querySelector(".cart-toggle");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCartBtn = document.querySelector(".close-cart");

cartToggleBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

// === Product Modal Open/Close ===
const modalOverlay = document.getElementById("product-modal");
const modalCloseBtn = document.querySelector(".modal-close");
const cartButtons = document.querySelectorAll(".cart-btn");

// Example: Show modal when any product card is clicked
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
  card.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });
});

modalCloseBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// === Quantity Controls inside Modal ===
const quantityControls = document.querySelector(".quantity-controls");
if (quantityControls) {
  const decreaseBtn = quantityControls.querySelector('[aria-label="Decrease quantity"]');
  const increaseBtn = quantityControls.querySelector('[aria-label="Increase quantity"]');
  const quantityDisplay = quantityControls.querySelector(".num-item");

  let quantity = 1;

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });
}

// === Feedback Button Scroll ===
const feedbackBtn = document.getElementById("open-feedback");
if (feedbackBtn) {
  feedbackBtn.addEventListener("click", () => {
    document.getElementById("flyer").scrollIntoView({ behavior: "smooth" });
  });
}

// === Add to Cart Button (Demo Update) ===
cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Close modal after adding
    modalOverlay.style.display = "none";

    // Increase cart count number
    const itemCount = document.querySelector(".item-count");
    let currentCount = parseInt(itemCount.textContent);
    itemCount.textContent = currentCount + 1;
  });
});
