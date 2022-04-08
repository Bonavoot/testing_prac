const caesarCipher = require("./caesar-cipher");

test("Letter Wrapping lowercase", () => {
  expect(caesarCipher("joey", 5)).toBe("otjd");
});

test("Letter Wrapping upperrcase", () => {
  expect(caesarCipher("JOEY", 5)).toBe("OTJD");
});
