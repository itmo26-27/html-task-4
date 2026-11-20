const board = document.getElementById("board");

function createPiece(color) {
  const piece = document.createElement("span");
  piece.className = "piece " + color;
  piece.dataset.color = color;
  return piece;
}

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement("button");
    const dark = (row + col) % 2 === 1;
    cell.className = dark ? "cell dark" : "cell";
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.setAttribute("aria-label", "Клетка " + "abcdefgh"[col] + (8 - row));
    if (dark && (row < 3 || row > 4)) {
      cell.append(createPiece(row < 3 ? "black" : "white"));
    }
    board.append(cell);
  }
}

// Продолжите здесь. Один обработчик на board принимает клики и по шашкам, и по клеткам.
