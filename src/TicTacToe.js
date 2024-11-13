import Phaser from 'phaser';

class TicTacToe extends Phaser.Scene {
    constructor() {
        super('TicTacToe');
        this.board = Array(3).fill().map(() => Array(3).fill(0));
        this.currentPLayer = 1;
        this.gameOver = false;
    }

    preload() {
        //load images or assets if necessary
    }

    create() {
        this.createBoard();
        this.input.on('pointerdown', this.handleInput, this);
    }

    createBoard() {
        let size = 100; // Size of each square
        let offset = 20; // Offset between squares
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                let x = col * (size + offset);
                let y = row * (size + offset);
                let rect = this.add.rectangle(x, y, size, size, 0xffffff).setOrigin(0, 0);
                rect.setStrokeStyle(2, 0x000000);
                this.board[row][col] = { rect, value: 0 };
            }
        }
    }

    handleInput(pointer) {
        if (this.gameOver) return;

        let size = 100;
        let offset = 20;
        let col = Math.floor(pointer.x / (size + offset));
        let row = Math.floor(pointer.y / (size + offset));

        if (this.board[row][col].value === 0) {
            this.board[row][col].value = this.currentPlayer;
            this.add.text(col * (size + offset), row * (size + offset), this.currentPlayer === 1 ? 'X' : 'O', { font: '65px Arial', color: '#000' });

            if (this.checkWin(row, col)) {
                this.gameOver = true;
                console.log(`Player ${this.currentPlayer} wins!`);
            } else if (this.isBoardFull()) {
                this.gameOver = true;
                console.log('Game is a tie!');
            } else {
                this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
            }
        }
    }

    checkWin(row, col) {
        const total = this.currentPlayer * 3;
        let rowSum = 0, colSum = 0, diag1Sum = 0, diag2Sum = 0;

        for (let i = 0; i < 3; i++) {
            rowSum += this.board[row][i].value;
            colSum += this.board[i][col].value;
            diag1Sum += this.board[i][i].value;
            diag2Sum += this.board[i][2 - i].value;
        }

        return rowSum === total || colSum === total || diag1Sum === total || diag2Sum === total;
    }

    isBoardFull() {
        return this.board.every(row => row.every(cell => cell.value !== 0));
    }
}

export const startGame = () => {
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 360,
        height: 360,
        scene: TicTacToe
    });
}
