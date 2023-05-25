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
  const values = { amount: 1000, years: 2, rate: 3.28 };
  const initialAmount = document.getElementById("loan-amount");
  initialAmount.placeholder = values.amount;
  const initialYears = document.getElementById("loan-years");
  initialYears.placeholder = values.years;
  const initialRate = document.getElementById("loan-rate");
  initialRate.placeholder = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUiValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUiValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const yearlyRate = values.rate / 100 / 12;
  const numberMonthlyPayments = values.years * 12;

  return (
    (values.amount * yearlyRate) /
    (1 - (1 + yearlyRate) ** -numberMonthlyPayments)
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentDiv = document.querySelector("#monthly-payment");
  monthlyPaymentDiv.classList.add("user-payment");
  monthlyPaymentDiv.innerHTML = `Your monthly payment will be $${monthly}`;
}
