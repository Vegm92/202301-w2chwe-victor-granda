const checkNeighbors = (cellBlock, grid) => {
  const height = grid.length;
  const width = grid[0].length;
  const xValueCellBlock = cellBlock.xPosition;
  const yValueCellBlock = cellBlock.yPosition;
  const neighborsAtTop = yValueCellBlock === 0 ? 0 : -1;
  const neighborsAtBottom = yValueCellBlock === height - 1 ? 0 : 1;
  const neighborsAtLeft = xValueCellBlock === 0 ? 0 : -1;
  const neighborsAtRight = xValueCellBlock === width - 1 ? 0 : 1;

  let neighborsCounter = 0;

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
        neighborsCounter++;
      }
    }
  }

  if (cellBlock.isAlive === true) {
    neighborsCounter--;
  }

  return (
    neighborsCounter === 3 || (cellBlock.isAlive && neighborsCounter === 2)
  );
};

export default checkNeighbors;
