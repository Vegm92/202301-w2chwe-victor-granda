const hasNeighbors = (CellBlock, grid) => {
  const height = grid.length;
  const width = grid[0].length;

  const xValueCellBlock = CellBlock.xPosition;
  const yValueCellBlock = CellBlock.yPosition;

  const neighborsAtTop = yValueCellBlock === 0 ? 0 : -1;
  const neighborsAtBottom = yValueCellBlock === height - 1 ? 0 : 1;
  const neighborsAtLeft = xValueCellBlock === 0 ? 0 : -1;
  const neighborsAtRight = xValueCellBlock === width - 1 ? 0 : 1;

  for (
    let topToBottomLimit = yValueCellBlock + neighborsAtTop;
    topToBottomLimit <= yValueCellBlock + neighborsAtBottom;
    topToBottomLimit++
  ) {
    for (
      let leftToRightLimit = xValueCellBlock + neighborsAtLeft;
      leftToRightLimit <= xValueCellBlock + neighborsAtRight;
      leftToRightLimit++
    ) {
      if (grid[topToBottomLimit][leftToRightLimit] === 1) {
        CellBlock.numberOfNeighbors++;
      }
    }
  }

  if (CellBlock.isAlive === true) {
    CellBlock.numberOfNeighbors--;
  }

  return (
    CellBlock.numberOfNeighbors === 3 ||
    (CellBlock.isAlive && CellBlock.numberOfNeighbors === 2)
  );
};

export default hasNeighbors;
