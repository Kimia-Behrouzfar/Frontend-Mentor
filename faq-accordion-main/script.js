const plusIcon = document.querySelectorAll(".plus");
const minusIcon = document.querySelectorAll(".minus");

document.querySelectorAll(".plus").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === "block";

    document
      .querySelectorAll(".answer")
      .forEach((ans) => (ans.style.display = "none"));
    document
      .querySelectorAll(".plus")
      .forEach((icon) => (icon.textContent = "plusIcon"));

    if (!isOpen) {
      answer.style.display = "block";
      question.querySelector("svg").textContent = "minusIcon";
    }
  });
});
console.log(plusIcon);
console.log(minusIcon);
