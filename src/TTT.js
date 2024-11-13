export function initGame(container) {
    container.innerHTML = ''; // Clear the container to start fresh
    const state = Array(9).fill(null);
    let currentPlayer = 'X'; // Change from const to let to allow reassignment
    const info = document.createElement('div');
    info.textContent = `Current player: ${currentPlayer}`;
    container.appendChild(info);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gridGap = '10px';
    grid.style.maxWidth = '300px';
    grid.style.margin = 'auto';

    state.forEach((_, idx) => {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        cell.style.minHeight = '100px';
        cell.style.display = 'flex';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'center';
        cell.style.fontSize = '2em';
        cell.addEventListener('click', () => {
            if (!state[idx] && !checkWinner(state)) {
                state[idx] = currentPlayer;
                cell.textContent = currentPlayer;
                togglePlayer();
                info.textContent = `Current player: ${currentPlayer}`;
                if (checkWinner(state)) {
                    info.textContent = `Player ${currentPlayer} wins!`;
                } else if (state.every(cell => cell !== null)) {
                    info.textContent = 'Game is a tie!';
                }
            }
        });
        grid.appendChild(cell);
    });

    container.appendChild(grid);

    function togglePlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWinner(s) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];
        return lines.some(line => {
            const [a, b, c] = line;
            return s[a] && s[a] === s[b] && s[a] === s[c];
        });
    }
}

