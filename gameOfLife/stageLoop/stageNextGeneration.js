import checkNeighbors from "../checkNeighbors/checkNeighbors.js";

const stageGeneration = (nextGenerationGrid) => {
  nextGenerationGrid.forEach((row) => {
    row.forEach((cell) => {
      if (checkNeighbors(cell, nextGenerationGrid)) {
        cell.spawn();
      } else {
        cell.execute();
      }
    });
  });
};

export default stageGeneration;
