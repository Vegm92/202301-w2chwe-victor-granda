import make2DArray from "./make2DArray.js";

let grid;

const randomSeedLife = (columns, rows) => {
  grid = make2DArray(columns, rows);
  for (let index = 0; index < columns; index++) {
    for (let innerIndex = 0; innerIndex < rows; innerIndex++) {
      grid[index][innerIndex] = Math.random() < 0.5 ? 0 : 1;
    }
  }

  return grid;
};

export default randomSeedLife;
