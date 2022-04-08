const calculator = (() => {
  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  function multiply(a, b) {
    return a * b;
  }

  return { add, sub, divide, multiply };
})();

module.exports = calculator;
