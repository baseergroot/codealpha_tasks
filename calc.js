const dobInput = "2003-09-15"; // example input in yyyy-mm-dd format

function calculateAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Adjust months and years if needed
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate(); // days in previous month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

const age = calculateAge(dobInput);
console.log(age)

/* console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`); */