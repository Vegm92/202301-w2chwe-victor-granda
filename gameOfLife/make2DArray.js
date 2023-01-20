const make2DArray = (columns, rows) => {
  const array = new Array(columns);
  for (let index = 0; index < array.length; index++) {
    array[index] = new Array(rows);
  }

  return array;
};

export default make2DArray;
