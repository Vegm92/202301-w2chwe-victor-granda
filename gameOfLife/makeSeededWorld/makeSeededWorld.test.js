import makeSeededWorld from "./makeSeededWorld.js";

describe("Given the function  makeSeededWorld ", () => {
  describe("When it receives 3 and 3 a test as arguments", () => {
    test("Then it should return a bidemnsional array of 3 strings each", () => {
      const arrayColumns = 3;
      const arrayRows = 3;

      const totalNumberOfArrays = 3;

      const expectedResult = totalNumberOfArrays;

      const result = makeSeededWorld(arrayColumns, arrayRows).length;

      expect(result).toEqual(expectedResult);
    });
  });
});
