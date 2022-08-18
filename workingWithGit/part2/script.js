let tableOf = 12;
let squareOf = 20;
let cubeOf = 2;

function printTable(table) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${table} x ${index} = ${table * index}`);
  }
}

printTable(tableOf); // function call

function getSquare(square) {
  console.log(square * square);
}

getSquare(squareOf); // function call

function getCube(cube) {
  console.log(cube * cube * cube);
}

getCube(cubeOf); // function call
