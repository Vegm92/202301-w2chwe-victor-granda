import make2DArray from "./make2DArray.js";

describe("Given the function  make2DArray ", () => {
  describe("When it receives 3 and 3 a test as arguments", () => {
    test("Then it should return a bidemnsional array of 3 test each", () => {
      const arrayColumns = 3;
      const arrayRows = 3;
      const arrayTest = "test";

      const array = [
        ["test", "test", "test"],
        ["test", "test", "test"],
        ["test", "test", "test"],
      ];
      const expectedResult = array;

      const result = make2DArray(arrayColumns, arrayRows, arrayTest);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
