it("should calculate the monthly rate correctly", function () {
  const values = { amount: 11000, years: 4, rate: 4.7 };
  expect(calculateMonthlyPayment(values)).toEqual(251.83);
});

// it("should return a result with 2 decimal places", function () {
//   // ..
// });

/// etc
