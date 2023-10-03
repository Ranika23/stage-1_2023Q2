const TETROM_NAME = ['I', 'S', 'J', 'L', 'Z', 'T', 'O'] //имена фигурок
const TETROM_MAT = {  // матрицы фигурок
    'I': [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]],

    'S':[
        [0,1,1],
        [1,1,0],
        [0,0,0]],

    'J':[
        [1,0,0],
        [1,1,1],
        [0,0,0]],

    'L':[
        [0,0,1],
        [1,1,1],
        [0,0,0]],

    'Z':[
        [1,1,0],
        [0,1,1],
        [0,0,0]],
    
    'T':[
        [0,1,0],
        [1,1,1],
        [0,0,0]], 
    
    'O':[
        [1,1],
        [1,1]], 
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
        const rowPlayMargin = 3;

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

function convIndexPosit (r, c) {
    return r * 13 + c;
}

drawTetrom()

function drawTetrom() {
    cellsTetrom.forEach(cellTetrom => cellTetrom.removeAttribute("class"));
    const nameTetr = TETRIS.tetrom.nameTetrom; //имя фигурки
    const tetrMatrSize = TETRIS.tetrom.matrixTetrom.length; //размер матрицы фигурки

    for (let r = 0; r < tetrMatrSize; r++) {
        for (let c = 0; c < tetrMatrSize; c++) {
            if(!TETRIS.tetrom.matrixTetrom[r][c]) continue;
            if(TETRIS.tetrom.rowPlayMargin + r < 0) continue;
            const indexCell = convIndexPosit(TETRIS.tetrom.rowPlayMargin + r, TETRIS.tetrom.columnPlayMargin + c);
            cellsTetrom[indexCell].classList.add(nameTetr)
        }
    }

}


