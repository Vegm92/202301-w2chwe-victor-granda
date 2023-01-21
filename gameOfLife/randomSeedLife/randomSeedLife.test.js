import randomSeedLife from "./randomSeedLife.js";

describe("Given the function randomSeedLife ", () => {
  describe("When it receives 3 and 3 as arguments", () => {
    test("Then it should return a bidemnsional array of 3 test each filled with an 0 each of them", () => {
      const arrayColumns = 3;
      const arrayRows = 3;
      const totalNumberOfArrays = 3;

      const expectedResult = totalNumberOfArrays;

      const result = randomSeedLife(arrayColumns, arrayRows).length;

      expect(result).toEqual(expectedResult);
    });
  });
});
