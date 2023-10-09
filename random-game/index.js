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
        /*const rowPlayMargin = -2*/
        const rowPlayMargin = matrixTetrom.length;

        this.tetrom = { //значение фигурки
            nameTetrom,
            matrixTetrom,
            rowPlayMargin,
            columnPlayMargin
        }
    }
}



const TETRIS = new TetrisPlay();



const cellsTetrom = document.querySelectorAll(".container div");

function convIndexPosit(r, c) {
    return r * 13 + c;
}

initKeyBoardTetrom()

drawTetrom()


function drawTetromDownRight() {
    cellsTetrom.forEach(cellTetrom => cellTetrom.removeAttribute("class"));
    const nameTetr = TETRIS.tetrom.nameTetrom; //имя фигурки
    const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length; //размер матрицы фигурки

    for (let r = 0; r < tetrMatrSize; r++) {
        for (let c = 0; c < tetrMatrSize; c++) {
            if (!TETRIS.tetrom.matrixTetrom[r][c]) continue;
            if (TETRIS.tetrom.rowPlayMargin + r < 0) continue;
            const indexCell = (TETRIS.tetrom.rowPlayMargin + r) * 13 + TETRIS.tetrom.columnPlayMargin + c + 1;
            cellsTetrom[indexCell].classList.add(nameTetr)
        }
    }

}
function drawTetromDownLeft() {
    cellsTetrom.forEach(cellTetrom => cellTetrom.removeAttribute("class"));
    const nameTetr = TETRIS.tetrom.nameTetrom; //имя фигурки
    const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length; //размер матрицы фигурки

    for (let r = 0; r < tetrMatrSize; r++) {
        for (let c = 0; c < tetrMatrSize; c++) {
            if (!TETRIS.tetrom.matrixTetrom[r][c]) continue;
            if (TETRIS.tetrom.rowPlayMargin + r < 0) continue;
            const indexCell = (TETRIS.tetrom.rowPlayMargin + r) * 13 + TETRIS.tetrom.columnPlayMargin + c - 1;
            cellsTetrom[indexCell].classList.add(nameTetr)
        }
    }

}


let matrixRotate = TETRIS.tetrom.matrixTetrom;
// движение фигурки по нажатию на клавиши
function initKeyBoardTetrom() {


    document.addEventListener("keydown", event => {

        if (event.code == "Enter") {

            rotateTetrom();
        

            TETRIS.tetrom.matrixTetrom = rotateTetrom()
          
 
            matrixRotate = TETRIS.tetrom.matrixTetrom;

            if (matrixRotate[matrixRotate.length - 1].includes(1) === false && (TETRIS.tetrom.nameTetrom != "O") && (TETRIS.tetrom.nameTetrom != "I")) {
                if (TETRIS.tetrom.rowPlayMargin > 12) {
          
                    TETRIS.tetrom.rowPlayMargin -= 2;          
                }         
            }
            else if (TETRIS.tetrom.rowPlayMargin > 12 && (TETRIS.tetrom.nameTetrom != "O") && (TETRIS.tetrom.nameTetrom != "I")) {
                TETRIS.tetrom.rowPlayMargin -= 1;
            }
            else if (TETRIS.tetrom.nameTetrom === "I") {
            if(TETRIS.tetrom.rowPlayMargin > 11) {
            TETRIS.tetrom.rowPlayMargin -= 2;
        }
    }
            drawTetrom()

            if (TETRIS.tetrom.nameTetrom === "I") {
                if (TETRIS.tetrom.columnPlayMargin === 0) {
                    drawTetromDownRight();
                    TETRIS.tetrom.columnPlayMargin += 1;
                }
                if (TETRIS.tetrom.columnPlayMargin === -2) {
                    drawTetromDownRight();
                    TETRIS.tetrom.columnPlayMargin += 2;
                    drawTetrom()
                }
                if (TETRIS.tetrom.columnPlayMargin === -1) {
                    drawTetromDownRight();
                    TETRIS.tetrom.columnPlayMargin += 1;
                    drawTetrom()
                }
                if (TETRIS.tetrom.columnPlayMargin === 10) {
                    drawTetromDownLeft();
                    TETRIS.tetrom.columnPlayMargin -= 1;
                }
                if (TETRIS.tetrom.columnPlayMargin === 11) {
                    drawTetromDownLeft();
                    TETRIS.tetrom.columnPlayMargin -= 2;
                        drawTetrom()   
                }
            }
            else if (TETRIS.tetrom.columnPlayMargin === -1 && TETRIS.tetrom.nameTetrom != "O") {
                drawTetromDownRight();
                TETRIS.tetrom.columnPlayMargin += 1;
            }
            else if (TETRIS.tetrom.columnPlayMargin === 11 && TETRIS.tetrom.nameTetrom != "O" && TETRIS.tetrom.nameTetrom != "I") {
                drawTetromDownLeft();
                TETRIS.tetrom.columnPlayMargin -= 1;
            }
        }

        if (event.code == "ArrowDown") {
            TETRIS.tetrom.rowPlayMargin += 1;
            if (matrixRotate[matrixRotate.length - 1].includes(1) === false) {
              
                if (TETRIS.tetrom.rowPlayMargin < 14 && (TETRIS.tetrom.nameTetrom != "I")) {
                    drawTetrom()
                }
                if (TETRIS.tetrom.rowPlayMargin < 13 && (TETRIS.tetrom.nameTetrom === "I")) {
                    drawTetrom()
                }
                if (matrixRotate[matrixRotate.length - 2].includes(1) === true && TETRIS.tetrom.nameTetrom === "I") {
                    if (TETRIS.tetrom.rowPlayMargin < 12) {
                        drawTetrom()
                    }
                }
                if (matrixRotate[matrixRotate.length - 2].includes(1) === false) {
                    if (TETRIS.tetrom.rowPlayMargin < 14) {
                        drawTetrom()
                    }
                }
                if (TETRIS.tetrom.rowPlayMargin > 13) {
                    TETRIS.tetrom.rowPlayMargin -= 1;
                }
            }

            if (TETRIS.tetrom.nameTetrom === "O") {
                if (TETRIS.tetrom.rowPlayMargin < 14) {
                    drawTetrom()
                }
                if (TETRIS.tetrom.rowPlayMargin > 13) {
                    TETRIS.tetrom.rowPlayMargin -= 1;
                }
            }

            if (matrixRotate[matrixRotate.length - 1].includes(1) && TETRIS.tetrom.nameTetrom != "O") {
               
                if (TETRIS.tetrom.rowPlayMargin < 16 - matrixRotate.length) {
                    drawTetrom()
                }
                if (TETRIS.tetrom.rowPlayMargin > 15 - matrixRotate.length) {                    
                    TETRIS.tetrom.rowPlayMargin -= 1;
                }
                
            }


            if (rotateLeftLast() === true) {
                if (TETRIS.tetrom.columnPlayMargin === (12 - matrixRotate.length)) {
                    drawTetromDownRight();
                    TETRIS.tetrom.columnPlayMargin += 1
                }
            }

            else if ((rotateLeftLast() === false) && TETRIS.tetrom.nameTetrom != "I") {
                if (TETRIS.tetrom.columnPlayMargin === (13 - matrixRotate.length)) {
                    drawTetromDownRight();
                    TETRIS.tetrom.columnPlayMargin += 1;
                }
            }

            else if (TETRIS.tetrom.nameTetrom === "I") {
                if (rotateLeftLast() === false) {
                    if (TETRIS.tetrom.columnPlayMargin === (13 - matrixRotate.length)) {
                        drawTetromDownRight();
                        TETRIS.tetrom.columnPlayMargin += 1;
                    }
                }

                if (rotateLeftBeforeLast() === false) {
                    if (TETRIS.tetrom.columnPlayMargin === (14 - matrixRotate.length)) {
                        drawTetromDownRight();
                        TETRIS.tetrom.columnPlayMargin += 1
                    }
                }
            }


            if (rotateLeftFirth() === true) {
                if (TETRIS.tetrom.columnPlayMargin === 1) {
                    drawTetromDownLeft();
                    TETRIS.tetrom.columnPlayMargin -= 1
                }
            }


            else if ((rotateLeftFirth() === false) && TETRIS.tetrom.nameTetrom != "I") {

                if (TETRIS.tetrom.columnPlayMargin === 0) {

                    drawTetromDownLeft();
                    TETRIS.tetrom.columnPlayMargin -= 1
                }
            }

            else if (TETRIS.tetrom.nameTetrom === "I") {
                if (rotateLeftFirth() === false) {
                    if (TETRIS.tetrom.columnPlayMargin === 0) {
                        drawTetromDownLeft();
                        TETRIS.tetrom.columnPlayMargin -= 1
                    }
                }

                if (rotateLeftAfterFirth() === false) {
                    if (TETRIS.tetrom.columnPlayMargin === -1) {
                        drawTetromDownLeft();
                        TETRIS.tetrom.columnPlayMargin -= 1
                    }
                }
            }
        }

        function rotateLeftLast() {
            for (let i = 0; i < matrixRotate.length; i++) {
                for (let j = 0; j < matrixRotate.length; j++) {
                    if (j === matrixRotate.length - 1) {
                        if (matrixRotate[i][j] === 1) { return true }
                    }
                }
            }
            return false
        }
        function rotateLeftBeforeLast() {
            if (TETRIS.tetrom.nameTetrom === "I") {
                for (let i = 0; i < matrixRotate.length; i++) {
                    for (let j = 0; j < matrixRotate.length; j++) {
                        if (j === matrixRotate.length - 2) {
                            if (matrixRotate[i][j] === 1) { return true }
                        }
                    }
                }
            }

            return false
        }
        function rotateLeftFirth() {
            for (let i = 0; i < matrixRotate.length; i++) {
                for (let j = 0; j < matrixRotate.length; j++) {
                    if (j === 0) {
                        if (matrixRotate[i][j] === 1) { return true }
                    }
                }
            }
            return false
        }
        function rotateLeftAfterFirth() {
            if (TETRIS.tetrom.nameTetrom === "I") {
                for (let i = 0; i < matrixRotate.length; i++) {
                    for (let j = 0; j < matrixRotate.length; j++) {
                        if (j === 1) {
                            if (matrixRotate[i][j] === 1) { return true }
                        }
                    }
                }
            }

            return false
        }


        if (event.code == "ArrowRight") {
            
            if ((TETRIS.tetrom.columnPlayMargin > (12 - matrixRotate.length)) && (rotateLeftLast() === true)) {
                TETRIS.tetrom.columnPlayMargin -= 1;
            }

            else if (rotateLeftLast() === false && TETRIS.tetrom.nameTetrom != "I") {
                if (TETRIS.tetrom.columnPlayMargin > (13 - matrixRotate.length)) {
                    TETRIS.tetrom.columnPlayMargin -= 1;
                }
            }
            else if (TETRIS.tetrom.nameTetrom === "I") {
                if ((rotateLeftBeforeLast() === false) && (rotateLeftLast() === false) && (TETRIS.tetrom.columnPlayMargin > (14 - matrixRotate.length))) {
                    TETRIS.tetrom.columnPlayMargin -= 1;
                }
                if ((rotateLeftBeforeLast() === true) && (rotateLeftLast() === false) && (TETRIS.tetrom.columnPlayMargin > (13 - matrixRotate.length))) {
                    TETRIS.tetrom.columnPlayMargin -= 1;
                }
                if (matrixRotate[matrixRotate.length - 2].includes(1) === false) {
              
                    if(TETRIS.tetrom.rowPlayMargin > 13) {
                        TETRIS.tetrom.rowPlayMargin -= 1;
                    }
                }  
                if ((matrixRotate[matrixRotate.length - 2].includes(1) === true) && (matrixRotate[matrixRotate.length - 1].includes(1) === false) && (TETRIS.tetrom.rowPlayMargin > 12)) {
                  
                    TETRIS.tetrom.rowPlayMargin -= 1;
                  
                }
            }
            TETRIS.tetrom.columnPlayMargin += 1;
            drawTetrom()

        }
        if (event.code == "ArrowLeft") {
            if ((TETRIS.tetrom.columnPlayMargin < 1) && (rotateLeftFirth() === true)) {
                TETRIS.tetrom.columnPlayMargin += 1;
            }


            else if (rotateLeftFirth() === false && TETRIS.tetrom.nameTetrom != "I") {
                if (TETRIS.tetrom.columnPlayMargin < 0) {
                    TETRIS.tetrom.columnPlayMargin += 1;
                }
            }
            else if (TETRIS.tetrom.nameTetrom === "I") {
                if ((rotateLeftAfterFirth() === false) && (rotateLeftFirth() === false) && (TETRIS.tetrom.columnPlayMargin < -1)) {
                    TETRIS.tetrom.columnPlayMargin += 1;
                }
                if ((rotateLeftAfterFirth() === true) && (rotateLeftFirth() === false) && (TETRIS.tetrom.columnPlayMargin < 0)) {
                    TETRIS.tetrom.columnPlayMargin += 1;
                }
                if (matrixRotate[matrixRotate.length - 2].includes(1) === false) {
              
                    if(TETRIS.tetrom.rowPlayMargin > 13) {
                        TETRIS.tetrom.rowPlayMargin -= 1;
                    }
                }  
                if (matrixRotate[matrixRotate.length - 2].includes(1) === true && (matrixRotate[matrixRotate.length - 1].includes(1) === false)) {
                    if(TETRIS.tetrom.rowPlayMargin > 12) {
                  
                        TETRIS.tetrom.rowPlayMargin -= 1;
                      
                    }
                } 

            }
            TETRIS.tetrom.columnPlayMargin -= 1;
            drawTetrom()
        }
    })
}

function initClickTetrom() {
    const bottom = document.querySelector(".bottom");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const rotate = document.querySelector(".rotate");
    rotate.addEventListener("click", event => {
        TETRIS.tetrom.matrixTetrom = rotateTetrom()
        rotateTetrom();
    })

    bottom.addEventListener("click", event => {
        TETRIS.tetrom.rowPlayMargin += 1;
        drawTetrom()
        if (TETRIS.tetrom.rowPlayMargin > (14 - TETRIS.tetrom.matrixTetrom[0].length)) {
            TETRIS.tetrom.rowPlayMargin -= 1;
        }
    })

    left.addEventListener("click", event => {
        TETRIS.tetrom.columnPlayMargin -= 1;
        drawTetrom()
        if (TETRIS.tetrom.columnPlayMargin < (Math.floor(TETRIS.tetrom.matrixTetrom.length) + 1 - TETRIS.tetrom.matrixTetrom.length)) {
            TETRIS.tetrom.columnPlayMargin += 1;
        }
    })
    right.addEventListener("click", event => {
        TETRIS.tetrom.columnPlayMargin += 1;
        drawTetrom()
        if (TETRIS.tetrom.columnPlayMargin > (12 - TETRIS.tetrom.matrixTetrom.length)) {
            TETRIS.tetrom.columnPlayMargin -= 1;
        }
    })


}



// прорисовка фигурки
function drawTetrom() {
    cellsTetrom.forEach(cellTetrom => cellTetrom.removeAttribute("class"));
    const nameTetr = TETRIS.tetrom.nameTetrom; //имя фигурки
    const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length; //размер матрицы фигурки

    for (let r = 0; r < tetrMatrSize; r++) {
        for (let c = 0; c < tetrMatrSize; c++) {
            if (!TETRIS.tetrom.matrixTetrom[r][c]) continue;
            if (TETRIS.tetrom.rowPlayMargin + r < 0) continue;
            const indexCell = convIndexPosit(TETRIS.tetrom.rowPlayMargin + r, TETRIS.tetrom.columnPlayMargin + c);
            cellsTetrom[indexCell].classList.add(nameTetr)
        }
    }

}

// поворот фигурки
function rotateTetrom() {
    const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length; //размер матрицы фигурки
    const rotateTetrom = [];
    for (let i = 0; i < tetrMatrSize; i++) {
        rotateTetrom[i] = [];
        for (let j = 0; j < tetrMatrSize; j++) {
            rotateTetrom[i][j] = TETRIS.tetrom.matrixTetrom[tetrMatrSize - j - 1][i];
        }
    }

    return rotateTetrom
}