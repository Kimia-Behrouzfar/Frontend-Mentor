// const icons = document.querySelectorAll(".icon");
// const answers = document.querySelectorAll(".answer");

// icons.forEach((icon) => {
//   icon.addEventListener("DOMContentLoaded", () => {
//     if (answers.style.display === "none") {
//       answers.style.display = "block";
//     } else {
//       answers.style.display = "none";
//     }
//   if (answers.style.visibility === "hidden") {
//     answers.style.visibility = "visible";
//   } else {
//     answers.style.visibility = "hidden";
//   }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
// const icons = document.getElementById("icon");
// const answers = document.getElementById("answer");

// icons.forEach(icon) => {
//   icon.addEventListener("click", ()=> {
//     if (answers.style.display === "none") {
//       answers.style.display = "block";
//     } else {
//       answers.style.display = "none";
//     }

// })};

// const minusIcon = document.querySelectorAll(".minus");
// const answers = document.querySelectorAll(".answer");
// const plusIcon = document.querySelectorAll(".plus").forEach((answer) => {
//   answer.addEventListener("click", () => {
// plusIcon.replace(minusIcon);
// const answr = answer.parentElement.nextElementSibling;

// if (answr.style.display === "none") {
//   answers.style.display = "block";
// icon.textContent = answers;
// }
//  else {
// answr.style.display = "none";
// icon.textContent = plusIcon;
// }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const answers = document.getElementById("answer");
  const plusIcon = document.querySelectorAll(".plus");
  plusIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (answers.style.display === "none") {
        answers.style.display = "block";
        icon.textContent = answers;
      }

      // if (answers.classList.contains("show")) {
      //   answers.classList.remove("show");
      //   plusIcon.textContent = "+";
      // } else {
      //   answers.classList.add("show");
      //   plusIcon.textContent = "-";
      // }
    });
  });
});

// console.log(icons);
// console.log(answers);
