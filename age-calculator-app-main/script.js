const showAge = document
  .querySelector(".icon")
  .addEventListener("click", () => {
    const days = document.getElementById("day").value;
    const months = document.getElementById("month").value;
    const years = document.getElementById("year").value;

    const birthDate = new Date(years, months - 1, days);
    const today = new Date();

    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

    if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12;
    }

    if (ageInDays < 0) {
      ageInMonths--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageInDays += lastMonth.getDate();
    }

    const result = document.querySelector(".result");
    result.textContent = `${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`;

    console.log(
      `Age: ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`
    );
  });
