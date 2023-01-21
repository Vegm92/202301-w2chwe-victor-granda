import make2DArray from "../make2DArray/make2DArray.js";

const randomSeedLife = (columns, rows) => {
  const grid = make2DArray(columns, rows);
  for (let index = 0; index < columns; index++) {
    for (let innerIndex = 0; innerIndex < rows; innerIndex++) {
      grid[index][innerIndex] = Math.round(Math.random());
    }
  }

  return grid;
};

export default randomSeedLife;
