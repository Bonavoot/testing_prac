const capitalize = require("./captialize");

test("Capitalize first letter", () => {
  expect(capitalize("joey")).toBe("Joey");
});
