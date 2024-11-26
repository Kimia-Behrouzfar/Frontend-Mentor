document.querySelector(".Subscribe").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const emailInput = document.querySelector(".email");
  const errorElement = document.querySelector(".error");
  const msgElement = document.querySelector(".msg");
  const emailValue = emailInput.value.trim();

  // Clear any previous error message
  errorElement.textContent = "";

  // Validate email
  if (!emailValue) {
    errorElement.textContent = "Email field cannot be empty.";
    return;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    errorElement.textContent = "Please enter a valid email address.";
    return;
  }

  // Show success message
  document.querySelector(".msg .email").textContent = emailValue;
  msgElement.style.display = "block";
});

document.querySelector(".dismiss").addEventListener("click", function () {
  document.querySelector(".msg").style.display = "none";
});
