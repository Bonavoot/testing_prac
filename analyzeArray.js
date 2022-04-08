function analyzeArray(arr) {
  return {
    average: arr.reduce((prev, curr) => prev + curr) / arr.length,
  };
}

module.exports = analyzeArray;
