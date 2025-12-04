let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const cells = document.querySelectorAll(".cell");
const messageElement = document.getElementById("message");

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], // row 1
        [3, 4, 5], // row 2
        [6, 7, 8], // row 3
        [0, 3, 6], // column 1
        [1, 4, 7], // column 2
        [2, 5, 8], // column 3
        [0, 4, 8], // diagonal 1
        [2, 4, 6], // diagonal 2
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            messageElement.textContent = `${currentPlayer} wins!`;
            return;
        }
    }

    if (!gameBoard.includes("")) {
        gameActive = false;
        messageElement.textContent = "It's a draw!";
    }
}

function handleCellClick(event) {
    const cellIndex = event.target.id.split("-")[1];
    
    if (gameBoard[cellIndex] !== "" || !gameActive) return;

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});
