// Disable future dates in date input
document.getElementById("dob").max = new Date().toISOString().split("T")[0];

function calculateAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function showAge() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) return alert("Please select your date of birth.");

  const dobDate = new Date(dobInput);
  const today = new Date();

  dobDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const age = calculateAge(dobInput);
  document.getElementById("result").textContent = `Your age is ${age.years} years, ${age.months} months, ${age.days} days.`
  /* document.getElementById("year").textContent = age.years;
  document.getElementById("month").textContent = age.months;
  document.getElementById("day").textContent = age.days; */
}