const make2DArray = (columns, rows, test) => {
  const array = Array(columns)
    .fill(test)
    .map(() => Array(rows).fill(test));

  return array;
};

export default make2DArray;
