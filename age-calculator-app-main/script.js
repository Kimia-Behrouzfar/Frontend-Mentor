const showAge = document
  .querySelector(".icon")
  .addEventListener("click", () => {
    const day = document.querySelector(".days").value;
    const month = document.querySelector(".months").value;
    const year = document.querySelector(".years").value;
    const result = document.querySelector(".result");
    result.textContent = `Day: ${day}, Month: ${month}, Year: ${year}`;

    console.log(result);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

    // document.getElementById("text").textContent = text;
  });
// console.log(showAge);
