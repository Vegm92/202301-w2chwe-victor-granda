import hasNeighbors from "./hasNeighbors.js";

describe("Given the function hasNeighbors", () => {
  describe("When on a 3x3 grid we check for the center cell(1,1) status", () => {
    test("Then it should return 4 neighbors near the center cell", () => {
      const testGrid = [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 1],
      ];

      const expectedResult = 4;

      expect(hasNeighbors(1, 1, testGrid)).toEqual(expectedResult);
    });
  });
});
