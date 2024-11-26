const message = document
  .querySelector(".Subscribe")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    // Clear previous error
    // errorElement.textContent = "";

    const remove = document.getElementById("log-in");
    remove.style.display = "none";
    console.log(remove);

    const add = document.getElementById("msg");
    if (add) {
      // Check if the element exists
      add.style.display = "inline-block";
      console.log("Cart element shown:", add);
    } else {
      console.error("Cart element not found.");
    }
  });

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
