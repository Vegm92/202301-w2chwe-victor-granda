const make2DArray = (columns, rows, cell) => {
  const array = Array(columns)
    .fill(cell)
    .map(() => Array(rows).fill(cell));

  return array;
};

export default make2DArray;
