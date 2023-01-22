import CellBlock from "../cellBlock/CellBlock.js";
import hasNeighbors from "./hasNeighbors.js";

describe("Given the function hasNeighbors", () => {
  describe("When on a 3x3 grid with 4 neighbors we check if the center cell will survive", () => {
    test("Then it should return false", () => {
      const cell = new CellBlock(1, 1);
      cell.isAlive = true;

      const testGrid = [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 1],
      ];

      const expectedResult = false;

      expect(hasNeighbors(cell, testGrid)).toEqual(expectedResult);
    });
  });
  describe("When on a 3x3 grid with 2 neighbors we check if the center cell will survive", () => {
    test("Then it should return true", () => {
      const cell = new CellBlock(1, 1);
      cell.isAlive = true;
      const testGrid = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const expectedResult = true;

      expect(hasNeighbors(cell, testGrid)).toEqual(expectedResult);
    });
  });

  describe("When on a 3x3 grid with 0 neighbors we check if the center cell will survive", () => {
    test("Then it should return false", () => {
      const cell = new CellBlock(1, 1);
      cell.isAlive = true;

      const testGrid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];

      const expectedResult = false;

      expect(hasNeighbors(cell, testGrid)).toEqual(expectedResult);
    });
  });
});
