const minusIcon = document.getElementById("minus");
const plusIcon = document.getElementById("plus");
const quantityDisplay = document.getElementById("btn-cart");
let quantity = 0;

plusIcon.addEventListener("click", () => {
  if (quantity === 0) {
    quantityDisplay.textContent = 1;
  } else {
    quantityDisplay.textContent = parseInt(quantityDisplay.textContent) + 1;
  }
  quantity = parseInt(quantityDisplay.textContent);
});

minusIcon.addEventListener("click", () => {
  if (quantity > 1) {
    quantityDisplay.textContent = parseInt(quantityDisplay.textContent) - 1;
    quantity = parseInt(quantityDisplay.textContent);
  } else if (quantity === 1) {
    quantityDisplay.textContent = "Add to Cart";
    quantity = 0;
  }
});
