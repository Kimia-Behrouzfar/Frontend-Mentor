const showAge = document
  .querySelector(".icon")
  .addEventListener("click", () => {
    const days = document.getElementById("day").value;
    const months = document.getElementById("month").value;
    const years = document.getElementById("year").value;
    // const result = document.querySelector(".result");
    // result.textContent = `Day: ${days}, Month: ${months}, Year: ${years}`;
    // console.log(`Day: ${days}, Month: ${months}, Year: ${years}`);

    const birthDate = new Date(years, months - 1, days);
    const today = new Date();

    // Calculate the difference in years, months, and days
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

    // Adjust months and years if the birthday hasn't occurred yet this year
    if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12; // Adjust months to reflect the previous year
    }

    // Adjust days if the birth day hasn't occurred yet this month
    if (ageInDays < 0) {
      ageInMonths--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Get last day of the previous month
      ageInDays += lastMonth.getDate(); // Add the number of days in the previous month
    }

    // Display the result
    const result = document.querySelector(".result");
    result.textContent = `Age: ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`;

    console.log(
      `Age: ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`
    );
  });
