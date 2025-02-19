const arrowDown = document.querySelector(".down");
const cart = document.querySelector(".feature");
arrowDown.addEventListener("click", () => {
  console.log("hii");
  cart.style.removeProperty("visibility");
});
