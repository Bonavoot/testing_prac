const analyzeArray = require("./analyzeArray");
const object = {
  average: 4,
};

test("average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(object);
});