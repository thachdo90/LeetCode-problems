var gridIllumination = function(n, lamps, queries) {
  let lights = {
    cols: {},
    rows: {},
    majorDiags: {},
    minorDiags: {}
  }
  let onLamp = {} // onLamp[1][2] = true to turn on lamp at row 1 and col 2
  const turnOnLamp = (row, col) => {
    if (!onLamp[row]) onLamp[row] = {};
    onLamp[row][col] = true;
    lights.cols[col] = (lights.cols[col] || 0) + 1;
    lights.rows[row] = (lights.rows[row] || 0) + 1;

    let majorDiag = col - row;
    let minorDiag = row + col;
    lights.majorDiags[majorDiag] = (lights.majorDiags[majorDiag] || 0) + 1;
    lights.minorDiags[minorDiag] = (lights.minorDiags[minorDiag] || 0) + 1;
  }

  const turnOffLamp = (row, col) => {
    onLamp[row][col] = false;
    lights.cols[col] = (lights.cols[col] - 1 || 0)
    lights.rows[row] = (lights.rows[row] -1 || 0)

    let majorDiag = col - row;
    let minorDiag = row + col;
    lights.majorDiags[majorDiag] = (lights.majorDiags[majorDiag] - 1 || 0)
    lights.minorDiags[minorDiag] = (lights.minorDiags[minorDiag] - 1 || 0)
  }

  const turnOffGridAt = (row, col) => {
    for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex++) {
      for (let colIndex = col - 1; colIndex <= col + 1; colIndex++) {
        if (onLamp[rowIndex] && onLamp[rowIndex][colIndex]) turnOffLamp(rowIndex, colIndex)
      }
    }
  }

  const illuminatedAt = (row, col) => {
    let majorDiag = col - row;
    let minorDiag = row + col;
    return (lights.cols[col] || lights.rows[row] || lights.majorDiags[majorDiag] || lights.minorDiags[minorDiag]);
  }

  lamps.forEach(lamp => turnOnLamp(...lamp));
  let results = [];
  queries.forEach(lamp => {
    results.push(illuminatedAt(...lamp) ? 1 : 0);
    turnOffGridAt(...lamp);
  })
  return results;
};