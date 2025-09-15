const { gcd } = require("./index");

describe("tools/utils", function () {
  describe("gcd", function () {
    const cases = [
      {
        input: [5000, 20000, 5000],
        expected: 5000,
      }
    ];
    for (const { input, expected } of cases) {
      test(`gcd(${input.join(", ")}) = ${expected}`, function () {
        expect(gcd(...input)).toEqual(expected);
      });
    }
  });
});
