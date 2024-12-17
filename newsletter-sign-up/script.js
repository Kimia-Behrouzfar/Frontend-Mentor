const message = document
  .querySelector(".Subscribe")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const remove = document.getElementById("log-in");
    remove.style.display = "none";
    console.log(remove);

    const add = document.getElementById("msg");
    if (add) {
      add.style.display = "inline-block";

      console.log("Cart element shown:", add);
    } else {
      console.error("Cart element not found.");
    }
  });

// I don't write code about condition of email and responsive!!!!
// that's it just know!
