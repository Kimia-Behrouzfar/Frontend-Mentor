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
  const icons = document.getElementById("icon");
  const answers = document.getElementById("answer");

  icons.forEach(icon) => {
    icon.addEventListener("click", ()=> {
      if (answers.style.display === "none") {
        answers.style.display = "block";
      } else {
        answers.style.display = "none";
      }
    // });
  }});


console.log(icons);
console.log(answers);
