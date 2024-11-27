const showAge = document
  .querySelector(".icon")
  .addEventListener("click", () => {
    const days = document.getElementById("day").value;
    const months = document.getElementById("month").value;
    const years = document.getElementById("year").value;
    const result = document.querySelector(".result");
    result.textContent = `Day: ${days}, Month: ${months}, Year: ${years}`;

    console.log(`Day: ${days}, Month: ${months}, Year: ${years}`);
  });
