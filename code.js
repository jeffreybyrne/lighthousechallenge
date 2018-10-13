    const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

function countRows() {
  var i = GRID.length;
  return i; 
}

function countColumns() {
  var i = GRID[0].length;
  return i;
}

function gridSize() {
  var w = countColumns();
  var h = countRows();
  var size = String(w + ' x ' + h);
  return size;
}

function totalCells() {
  var w = countColumns();
  var h = countRows();
  var total = w * h;
  return total;
}

function convertColumn(cell) {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var pos = cell.substr(0,1);
  var val = alphabet.indexOf(pos);
  return val;
}

function lightCell(input) {
  var x = input.substr(1) - 1;
  var y = convertColumn(input);
  if (x > countRows() || y > countColumns()) {
    return false;
  } else {
  return GRID[x][y];
  }
}

function isRock(cell) {
  if (lightCell(cell) == '^') {
    return true;
  } else {
    return false;
  }
}

function isCurrent(cell) {
  if (lightCell(cell) == '~') {
    return true;
  } else {
    return false;
  }
}

function isShip(cell) {
  if (lightCell(cell) == 'v') {
    return true;
  } else {
    return false;
  }
}

function lightRow(input) {
    return GRID[input-1];
}

function lightColumn(input) {
  var i;
  var column = Array(countColumns);
  var columnPosition = convertColumn(input);
  for (i=0; i < countRows(); i++) {
    column[i] = GRID[i][columnPosition];
  }
  return column;
}

function allRocks() {
  var rocks = [];
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i=0; i<countRows(); i++) {
    for (j=0; j<countColumns(); j++) {
      column=alphabet.substr(j,1);
      row=i+1;
      cell=String(column + row);
      if (isRock(cell)){
        rocks.push(cell);
      }
    }
  }
  return rocks;
}

function allCurrents() {
  var currents = [];
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i=0; i<countRows(); i++) {
    for (j=0; j<countColumns(); j++) {
      column=alphabet.substr(j,1);
      row=i+1;
      cell=String(column + row);
      if (isCurrent(cell)){
        currents.push(cell);
      }
    }
  }
  return currents;
}