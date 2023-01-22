const makeEmptyWorld = (callBack, width, height) => {
  const new2DBoard = new Array(height);
  for (let yAxis = 0; yAxis < height; yAxis++) {
    new2DBoard[yAxis] = [];
    for (let xAxis = 0; xAxis < width; xAxis++) {
      new2DBoard[yAxis][xAxis] = callBack(xAxis, yAxis);
    }
  }

  return new2DBoard;
};

export default makeEmptyWorld;
