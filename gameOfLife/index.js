import CellBlock from "./cellBlock/CellBlock.js";
import checkNeighbors from "./checkNeighbors/checkNeighbors.js";
import make2DArray from "./make2DArray/make2DArray.js";
import stageGeneration from "./stageNextGeneration/stageNextGeneration.js";
import randomSeedLife from "./randomSeedLife/randomSeedLife.js";

const gameColumns = 50;
const gameRows = 50;

const initializeGame = () => {
  const cell = new CellBlock();
  const newGrid = make2DArray(gameColumns, gameRows, cell);
  do {
    randomSeedLife(gameColumns, gameRows, newGrid);
    checkNeighbors(cell);
  } while (stageGeneration(newGrid));
};

export default initializeGame;
