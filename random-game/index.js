const TETROM_NAME = ['I', 'S', 'J', 'L', 'Z', 'T', 'O'] //имена фигурок
const TETROM_MAT = {  // матрицы фигурок
    'I': [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],

    'S': [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]],

    'J': [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]],

    'L': [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]],

    'Z': [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],

    'T': [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]],

    'O': [
        [1, 1],
        [1, 1]],
}
function getRandomName(arr) { // генерация случайного имени фигурки
    const randomInd = Math.floor(Math.random() * arr.length);
    return arr[randomInd];
}


// class Tetris
class TetrisPlay {
    constructor() {
        this.marginplay; //пустое игровое поле
        this.tetrom; //пустая фигура
        this.initial()
    }



    initial() {
        this.generMarginPlay()
        this.generTetrom()
    }

    generMarginPlay() {
        this.marginplay = new Array(15).fill().map(() => new Array(13).fill(0));
        console.table(this.marginplay)
    }
    generTetrom() {
        const nameTetrom = getRandomName(TETROM_NAME); // случайное имя фигурки
        const matrixTetrom = TETROM_MAT[nameTetrom]; //матрица случайной фигурки

        const columnPlayMargin = 6 - Math.floor(matrixTetrom.length / 2)// номер стартовой колонки
        const rowPlayMargin = -2;
        /*const rowPlayMargin = matrixTetrom.length;*/

        this.tetrom = { //значение фигурки
            nameTetrom,
            matrixTetrom,
            rowPlayMargin,
            columnPlayMargin
        }
    }
    rotateTetrom(){
        const startTetrom = this.tetrom.matrixTetrom;
        const rotateTetrom = [];
        for (let i = 0; i < this.tetrom.matrixTetrom.length; i++) {
            rotateTetrom[i] = [];
            for (let j = 0; j < this.tetrom.matrixTetrom.length; j++) {
                rotateTetrom[i][j] = this.tetrom.matrixTetrom[this.tetrom.matrixTetrom.length - j - 1][i];
            }
        }
        this.tetrom.matrixTetrom = rotateTetrom;
        if(this.validTetrom() === false) {
            this.tetrom.matrixTetrom = startTetrom;
        }
    }
    leftTetrom() {
        this.tetrom.columnPlayMargin -= 1;
        if(this.validTetrom() === false) {
            this.tetrom.columnPlayMargin += 1;
        }
    }
    rigthTetrom() {
        this.tetrom.columnPlayMargin += 1;
        if(this.validTetrom() === false) {
            this.tetrom.columnPlayMargin -= 1;
        }
    }
    downTetrom() {
        this.tetrom.rowPlayMargin += 1;
        if(this.validTetrom() === false) {
            this.tetrom.rowPlayMargin -= 1;
            this.saveTetrom();
        }
    }
    validTetrom() {
        const size = this.tetrom.matrixTetrom.length;
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if(this.tetrom.matrixTetrom[r][c] === 0) continue;
                if(this.outBoardTetrom(r,c)) return false;
                if(this.touchTetrom(r,c)) return false;
            }
        }
    return true
    }

    outBoardTetrom(r,c) {
        return this.tetrom.rowPlayMargin + r >= this.marginplay.length ||
            this.tetrom.columnPlayMargin + c >= 13 ||
            this.tetrom.columnPlayMargin + c < 0;
    }
    saveTetrom() {
        const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length;
        for (let r = 0; r < tetrMatrSize; r++) {
            for (let c = 0; c < tetrMatrSize; c++) {
                if (!TETRIS.tetrom.matrixTetrom[r][c]) continue;
    
                TETRIS.marginplay[TETRIS.tetrom.rowPlayMargin + r][TETRIS.tetrom.columnPlayMargin + c] = TETRIS.tetrom.nameTetrom
          
            }
        }
        this.deleteRows() // удаление заполненной строчки
        this.generTetrom()
    }
    deleteRows() {
        const rowsNumber = []; //для номеров заполненных строк
        for (let r = 0; r < 15; r++) {
            if(this.marginplay[r].every(element => element != 0)) {
                rowsNumber.push(r);
            }
        }
        this.deleteLine(rowsNumber);

    }

    deleteLine(rows) {
        rows.forEach(row => {
            for(; row > 0; row--) {
                this.marginplay[row] = this.marginplay[row - 1];
            }
            this.marginplay[0] = new Array(13).fill(0);
        })
    }

    touchTetrom(r,c){
        return this.marginplay[this.tetrom.rowPlayMargin + r]?.[this.tetrom.columnPlayMargin + c];
    }
}

let animationStartId;
let timeStartId;


const TETRIS = new TetrisPlay();



const cellsTetrom = document.querySelectorAll(".container div");

function convIndexPosit(r, c) {
    return r * 13 + c;
}

initKeyBoardTetrom()
initClickTetrom()
downTetromMove()


function initClickTetrom() {
    const bottom = document.querySelector(".bottom");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const rotate = document.querySelector(".rotate");
    rotate.addEventListener("click", event => {
        rotateTetromMove();
    })

    bottom.addEventListener("click", event => {
        downTetromMove();
    })

    left.addEventListener("click", event => {
        leftTetromMove();
    })
    right.addEventListener("click", event => {
        rigthTetromMove();
    })
}

function initKeyBoardTetrom() {


    document.addEventListener("keydown", event => {

        if (event.code == "Enter") {
            rotateTetromMove();
        }
        if (event.code == "ArrowDown") {
            downTetromMove();
        }
        if (event.code == "ArrowRight") {
            rigthTetromMove();
        }
        if (event.code == "ArrowLeft") {
            leftTetromMove();
        }    
    })
}
function rotateTetromMove(tetrom) {
    TETRIS.rotateTetrom();
    drawTetrom();
};
function downTetromMove() {
    TETRIS.downTetrom();
    drawTetrom();
    stopDraw();
    startDraw();
};
function rigthTetromMove() {
    TETRIS.rigthTetrom();
    drawTetrom();
};
function leftTetromMove() {
    TETRIS.leftTetrom();
    drawTetrom();
};

function startDraw() { // автоматическое падение фигурок
    timeStartId = setTimeout(() => animationStartId = requestAnimationFrame(downTetromMove), 500);
}
function stopDraw() {
cancelAnimationFrame(animationStartId);
clearTimeout(timeStartId);
}
// прорисовка фигурки
function drawTetrom() {
    cellsTetrom.forEach(cellTetrom => cellTetrom.removeAttribute("class"));
    drawMatrix()
    const nameTetr = TETRIS.tetrom.nameTetrom; //имя фигурки

    const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length; //размер матрицы фигурки

    for (let r = 0; r < tetrMatrSize; r++) {
        for (let c = 0; c < tetrMatrSize; c++) {
            if (!TETRIS.tetrom.matrixTetrom[r][c]) continue;
            if (TETRIS.tetrom.rowPlayMargin + r < 0) continue;
            const indexCell = convIndexPosit(TETRIS.tetrom.rowPlayMargin + r, TETRIS.tetrom.columnPlayMargin + c);
            cellsTetrom[indexCell].classList.add(nameTetr);
        }
    }
  

}

// прорисовка поля после падения фигурок
function drawMatrix() {
    for (let r = 0; r < 15; r++) {
        for (let c = 0; c < 13; c++) {
            if (!TETRIS.marginplay[r][c]) continue;
            const name = TETRIS.marginplay[r][c];
            const index = convIndexPosit(r, c);
            cellsTetrom[index].classList.add(name)
        }
    }

}

