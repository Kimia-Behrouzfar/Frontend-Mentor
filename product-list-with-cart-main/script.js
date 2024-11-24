const btnCart = document.querySelector(".btn-cart");
console.log(
  btnCart.addEventListener("click", () => {
    btnCart.textContent = "0";
  })
);
