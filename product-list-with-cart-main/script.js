z; // انتخاب المنت‌های DOM
const cartSection = document.querySelector(".side");
const menuItems = document.querySelectorAll(".carts .cart");
const confirmOrderButton = cartSection.querySelector("button");
const orderTotalDisplay = cartSection.querySelector("p strong");
const cartItemsContainer = cartSection.querySelectorAll(".item");

// سبد خرید را ذخیره کنید
let cart = [];

// اضافه کردن آیتم به سبد خرید
menuItems.forEach((item, index) => {
  const addButton = item.querySelector("button");
  addButton.addEventListener("click", () => addToCart(index));
});

function addToCart(index) {
  const itemName = menuItems[index].querySelector("h3").innerText;
  const itemPrice = parseFloat(
    menuItems[index].querySelector("p").innerText.replace("$", "")
  );

  const existingItem = cart.find((cartItem) => cartItem.name === itemName);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function increaseQuantity(index) {
  cart[index].quantity++;
  renderCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    removeFromCart(index);
  }
  renderCart();
}

// رندر کردن سبد خرید در HTML
function renderCart() {
  const cartItems = cartSection.querySelectorAll(".item");
  cartItems.forEach((item) => item.remove());

  cart.forEach((cartItem, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("item");

    const itemName = document.createElement("h4");
    itemName.innerText = cartItem.name;

    const itemQuantity = document.createElement("span");
    itemQuantity.className = "num";
    itemQuantity.innerText = `${cartItem.quantity}x`;

    const itemPrice = document.createElement("span");
    itemPrice.innerText = `@ $${cartItem.price.toFixed(2)} $${(
      cartItem.price * cartItem.quantity
    ).toFixed(2)}`;

    const increaseButton = document.createElement("button");
    increaseButton.innerText = "+";
    increaseButton.addEventListener("click", () => increaseQuantity(index));

    const decreaseButton = document.createElement("button");
    decreaseButton.innerText = "-";
    decreaseButton.addEventListener("click", () => decreaseQuantity(index));

    cartItemElement.append(
      itemName,
      decreaseButton,
      itemQuantity,
      increaseButton,
      itemPrice
    );
    cartSection.insertBefore(cartItemElement, orderTotalDisplay.parentNode);
  });

  updateOrderTotal();
}

// محاسبه مجموع سفارش
function updateOrderTotal() {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  orderTotalDisplay.innerText = `$${total.toFixed(2)}`;
}

// نمایش مودال تایید سفارش
confirmOrderButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const confirmation = confirm("Do you want to confirm the order?");
  if (confirmation) {
    alert("Order confirmed! Thank you.");
    startNewOrder();
  }
});

// بازنشانی سبد خرید
function startNewOrder() {
  cart = [];
  renderCart();
}

// قابلیت‌های ریسپانسیو برای اینترفیس
function updateLayout() {
  if (window.innerWidth < 768) {
    document.querySelector(".container").style.flexDirection = "column";
    cartSection.style.width = "100%";
  } else {
    document.querySelector(".container").style.flexDirection = "row";
    cartSection.style.width = "30%";
  }
}

window.addEventListener("resize", updateLayout);
updateLayout();

// استایل‌های هاور و فوکوس برای المنت‌ها
menuItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.boxShadow = "none";
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("focus", () => {
    button.style.outline = "2px solid #d84315";
  });
  button.addEventListener("blur", () => {
    button.style.outline = "none";
  });
});
