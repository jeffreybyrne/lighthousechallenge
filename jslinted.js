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
  var size = String(w + " x " + h);
  return size;
}

function totalCells() {
  var w = countColumns();
  var h = countRows();
  var total = w * h;
  return total;
}

function convertColumn(cell) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

function allCoords() {
  var coords = [];
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i=0;i<countRows();i++) {
    for (j=0;j<countColumns();j++) {
      column=alphabet.substr(j,1);
      row = i+1;
      coords.push(column + row);
    }
  }
  return coords;
}

function allCoordsGrid() {
  var coords = Array(countRows);
  for (var q = 0; q < countColumns(); q++) {
    coords[q] = new Array(countRows());
  }
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i=0;i<countRows();i++) {
    for (j=0;j<countColumns();j++) {
      column=alphabet.substr(j,1);
      row = i+1;
      coords[i][j]=(column + row);
    }
  }
  return coords;
}

function allRocks() {
  return allCoords().filter(coords => {
    return isRock(coords);
	});
}

function allCurrents() {
  return allCoords().filter(coords => {
    return isCurrent(coords);
	});
}

function allShips() {
  return allCoords().filter(coords => {
    return isShip(coords);
	});
}

function firstRock() {
  return allRocks()[0];
}

function firstCurrent() {
  return allCurrents()[0];
}

function shipReport() {
  var firstShip = allShips()[0];
  var lastShip = allShips()[allShips().length-1];
  var ships = [firstShip,lastShip];
  return ships;
}

function howDangerous(input) {
  if (isRock(input)) {
    return 100;
  } else if (isCurrent(input)) {
    return 50;
  } else {
    return 0;
  }
}

function percentageReport() {
  var numRocks = allRocks().length;
  var numCurrents = allCurrents().length;
  var numSpots = allCoords().length;
  var rockPercent = (numRocks/numSpots*100).toFixed(2);
  var currentPercent = (numCurrents/numSpots*100).toFixed(2);
  return [rockPercent,currentPercent];
}

function safetyReport() {
  var coords = Array(countRows());
  for (q = 0; q < countColumns(); q++) {
    coords[q] = new Array(countRows());
  }
  var newGrid = allCoordsGrid();
  for (i=0;i<countRows();i++) {
    coords[i]=newGrid[i].map(coords => {
      return howDangerous(coords);
	});
  }
  return coords;
}