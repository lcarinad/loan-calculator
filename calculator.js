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
  const initialYears = document.getElementById("loan-years");
  initialYears.placeholder = initialValues.years;
  const initialRate = document.getElementById("loan-rate");
  initialRate.placeholder = initialValues.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const userAmount = document.getElementById("loan-amount").value;
  const userYears = document.getElementById("loan-years").value;
  const numberMonthlyPayments = userYears * 12;
  const userRate = document.getElementById("loan-rate").value;
  const yearlyRate = userRate / 100 / 12;
  let monthlyPayment =
    (userAmount * yearlyRate) /
    (1 - (1 + yearlyRate) ** -numberMonthlyPayments);
  let roundedPayment = Math.round(monthlyPayment).toFixed(2);
  const monthlyPaymentDiv = document.querySelector("#monthly-payment");
  monthlyPaymentDiv.innerHTML = `Your monthly payment will be $${roundedPayment} for ${numberMonthlyPayments} months.`;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
