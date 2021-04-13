const recursionCheck = (board, word, indices, visitedArray) => {
  if (word === '') return true;

  if (
    indices[0] < 0 ||
    indices[0] >= board[0].length ||
    indices[1] < 0 ||
    indices[1] > board.length ||
    typeof visitedArray.find(
      (array) => array[0] === indices[0] && array[1] === indices[1]
    ) !== 'undefined'
  ) {
    visitedArray.pop();
    return false;
  }
  visitedArray.push(indices);
  if (board[indices[0]][indices[1]] === word.charAt(0)) {
    const down = recursionCheck(
      board,
      word.slice(1),
      [indices[0] + 1, indices[1]],
      visitedArray
    );
    if (down === true) return true;
    const up = recursionCheck(
      board,
      word.slice(1),
      [indices[0] - 1, indices[1]],
      visitedArray
    );
    if (up === true) return true;

    const left = recursionCheck(
      board,
      word.slice(1),
      [indices[0], indices[1] - 1],
      visitedArray
    );
    if (left === true) return true;

    const right = recursionCheck(
      board,
      word.slice(1),
      [indices[0], indices[1] + 1],
      visitedArray
    );
    if (right === true) return true;

    const upperLeft = recursionCheck(
      board,
      word.slice(1),
      [indices[0] - 1, indices[1] - 1],
      visitedArray
    );
    if (upperLeft === true) return true;

    const upperRight = recursionCheck(
      board,
      word.slice(1),
      [indices[0] - 1, indices[1] + 1],
      visitedArray
    );
    if (upperRight === true) return true;

    const downLeft = recursionCheck(
      board,
      word.slice(1),
      [indices[0] + 1, indices[1] - 1],
      visitedArray
    );
    if (downLeft === true) return true;

    const downRight = recursionCheck(
      board,
      word.slice(1),
      [indices[0] + 1, indices[1] + 1],
      visitedArray
    );
    if (downRight === true) return true;
    visitedArray.pop();
    return false;
  }
};

function checkWord(board, word) {
  const arrayToCheckStarts = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word.charAt(0)) arrayToCheckStarts.push([i, j]);
    }
  }
  for (let i = 0; i < arrayToCheckStarts.length; i++) {
    const result = recursionCheck(board, word, arrayToCheckStarts[i], []);
    if (result === true) return true;
  }
  return false;
  // return recursionCheck(board,word,)
}
var testBoard = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R'],
];

console.log(checkWord(testBoard, 'RSCAREIOYBAILNEA'));
