const calculator = require("./calculator");

test("Calculator add function", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator sub function", () => {
  expect(calculator.sub(2, 1)).toBe(1);
});

test("Calculator divide function", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Calculator multiply function", () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});
