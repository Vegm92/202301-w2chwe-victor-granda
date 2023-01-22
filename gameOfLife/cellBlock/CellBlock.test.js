import CellBlock from "./CellBlock.js";

describe("Given the class CellBlock", () => {
  describe("When it is invoqued", () => {
    test("It should return an object containing all relevant info abaout the cell", () => {
      const cellXPosition = 5;
      const cellYPosition = 5;

      const objectResult = {
        isAlive: false,
        willSpawn: false,
        xPosition: 5,
        yPosition: 5,
      };

      const result = new CellBlock(cellXPosition, cellYPosition);

      expect(result).toEqual(objectResult);
    });
  });
});
