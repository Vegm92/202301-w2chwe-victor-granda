const makeSeededWorld = (columns, rows) => {
  const grid = Array(columns)
    .fill(null)
    .map(() =>
      Array(rows)
        .fill(null)
        .map(() => Math.round(Math.random()))
    );
  return grid;
};

export default makeSeededWorld;
