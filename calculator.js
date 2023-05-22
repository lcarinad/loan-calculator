window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialValues = { amount: 1000, years: 2, rate: 3.28 };
  const initialAmount = document.getElementById("loan-amount");
  initialAmount.placeholder = initialValues.amount;
  // initialAmount.classList.add("initial-values");
  const initialYears = document.getElementById("loan-years");
  initialYears.placeholder = initialValues.years;
  // initialYears.classList.add("initial-values");
  const initialRate = document.getElementById("loan-rate");
  initialRate.placeholder = initialValues.rate;
  // initialRate.classList.add("initial-values");
  update();
}

// Get the current values from the UI
// Update the monthly payment
// function update() {
//   const form = document.getElementById("calc-form");
//   form.classList.toggle("user-value");
//   let formBtn = document.querySelector("button");
//   const userAmount = document.getElementById("loan-amount").value;
//   const userYears = document.getElementById("loan-years").value;
//   const userRate = document.getElementById("loan-rate").value;

//   formBtn.addEventListener("click", function () {
//     let monthlyPayment = userAmount * userYears;
//     console.log(userAmount);
//   });
// }

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
