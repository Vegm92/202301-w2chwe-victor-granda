const hasNeighbors = (rows, columns, grid) => {
  let numberOfNeighbors = 0;
  const xDirections = [-1, -1, -1, 0, 1, 1, 1, 0];
  const yDirections = [-1, 0, 1, 1, 1, 0, -1, -1];

  for (let index = 0; index < xDirections.length; index++) {
    const xPosition = rows + xDirections[index];
    const yPosition = columns + yDirections[index];

    if (
      xPosition >= 0 &&
      yPosition >= 0 &&
      xPosition < grid.length &&
      yPosition < grid[0].length &&
      grid[xPosition][yPosition] === 1
    ) {
      numberOfNeighbors++;
    }
  }

  return numberOfNeighbors;
};

export default hasNeighbors;
