import CellBlock from "../cellBlock/CellBlock";

const make2DArray = (columns, rows, cellBlock) => {
  const array = Array(columns)
    .fill(cellBlock)
    .map(() => Array(rows).fill(cellBlock));

  return array;
};

const cell = new CellBlock();
make2DArray(cell);
export default make2DArray;
