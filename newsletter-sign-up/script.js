// const subBtn = document.querySelector(".Subscribe");
// const emailInput = document.querySelector(".email").value;
// const errorElement = document.querySelector(".error");

const message = document
  .querySelector(".Subscribe")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    // Clear previous error
    // errorElement.textContent = "";

    const remove = document.querySelector("body");
    remove.style.display = "none";
    console.log(remove);
    const add = document.getElementById("cart");
    add.style.display = "block";
    console.log(add);

    // console.log();

    // document.querySelector(".msg").style.display = "block";
    // document.body.appendChild("msg").style.display = "block";

    // console.log(sty);
  });
// console.log(msg);

///////////*************************** */
// subBtn.addEventListener("click", () => {
//   const sub = (subBtn.textContent = "hii");
//   console.log(sub);
// });
// Check if the input is empty
// if (!emailInput) {
//   errorElement.textContent = "Email field cannot be empty.";
//   return;
// }

// Check if the input has exactly 8 characters
// if (emailInput.length >= 8) {
//   errorElement.textContent = "Email must be exactly 8 characters.";
//   return;
// }
