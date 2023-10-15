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
let countTetrom = 0;
let countPoints = 0;
let numberGame = 1;

function getRandomName(arr) { // генерация случайного имени фигурки
    const randomInd = Math.floor(Math.random() * arr.length);
    return arr[randomInd];

}


// class Tetris
class TetrisPlay {
    constructor() {
        this.marginplay; //пустое игровое поле
        this.tetrom; //пустая фигура
        this.gameEnd = false; //конец игры
        this.initial()
    }



    initial() {
        this.generMarginPlay()
        this.generTetrom()
    }

    generMarginPlay() {
        this.marginplay = new Array(15).fill().map(() => new Array(13).fill(0));
    }
    generTetrom() {
        const nameTetrom = getRandomName(TETROM_NAME); // случайное имя фигурки
        const matrixTetrom = TETROM_MAT[nameTetrom]; //матрица случайной фигурки

        const columnPlayMargin = 6 - Math.floor(matrixTetrom.length / 2)// номер стартовой колонки
        const rowPlayMargin = -2;
   

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
            countTetrom += 1;
     
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
                if (this.outBoardTopTetrom(r)) {
                    this.gameEnd = true;
                    return;
                }
                TETRIS.marginplay[TETRIS.tetrom.rowPlayMargin + r][TETRIS.tetrom.columnPlayMargin + c] = TETRIS.tetrom.nameTetrom
          
            }
        }

        this.deleteRows() // удаление заполненной строчки
        this.generTetrom()
    }
    outBoardTopTetrom(r) {
        return this.tetrom.rowPlayMargin + r < 0;
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
            countPoints += 1;
            this.marginplay[0] = new Array(13).fill(0);
        })
   
    }

    touchTetrom(r,c){
        return this.marginplay[this.tetrom.rowPlayMargin + r]?.[this.tetrom.columnPlayMargin + c];
    }
}

let animationStartId;
let timeStartId;


let TETRIS = new TetrisPlay();






function convIndexPosit(r, c) {
    return r * 13 + c;
}
const cellsTetrom = document.querySelectorAll(".container div");

// songs
const AUDIO_1 = new Audio("assets/audio/start_game.mp3");
const AUDIO_2 = new Audio("assets/audio/game-over.mp3");
const playList = [AUDIO_1, AUDIO_2];


let numberSpeed = 0;// скорость игры
let n = 0;
let speed = [900, 700, 500, 300, 100];

document.querySelector(".tetris").style.filter = "blur(10px)";
document.querySelector(".my-result").style.display = "none";
document.querySelector(".top10").style.display = "none";
document.querySelector(".title-top").style.display = "none";
 function playAuto() {
    playList[0].play();
 }
 
function start() {
    playList[0].play();
    playList[0].addEventListener("ended", playAuto)
    document.querySelector(".start").style.display = "none";
    document.querySelector(".tetris").style.filter = "none";
    initClickTetrom()
    initKeyBoardTetrom()
    downTetromMove()
}
document.querySelector(".speed1").addEventListener("click", event => {
    n = 1;
    numberSpeed = speed[0];
    start(); 
})
document.querySelector(".speed2").addEventListener("click", event => {
    n = 2;
    numberSpeed = speed[1];
    start(); 
})
document.querySelector(".speed3").addEventListener("click", event => {
    n = 3;
    numberSpeed = speed[2];
    start(); 
})
document.querySelector(".speed4").addEventListener("click", event => {
    n = 4;
    numberSpeed = speed[3];
    start(); 
})
document.querySelector(".speed5").addEventListener("click", event => {
    n = 5;
    numberSpeed = speed[4];
    start(); 
})



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
    
    if(TETRIS.gameEnd) {
        playList[1].play();
        playList[0].pause();
        gameEnd();
        countTetrom -= 1;
    }
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
    timeStartId = setTimeout(() => animationStartId = requestAnimationFrame(downTetromMove), numberSpeed);

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

function gameEnd() {

    stopDraw();
    animationGameEnd()
    activeAgain ()

    document.querySelector(".count-moves").innerHTML = countTetrom;
    document.querySelector(".count-points").innerHTML = countPoints;

}

function animationGameEnd() {
   
    const fullSquares = [...cellsTetrom].filter(c => c.classList.length > 0);
    fullSquares.forEach((c, j) => {
        setTimeout(() => c.classList.add("mask"), j * 10);
        setTimeout(() => c.removeAttribute("class"), j * 10 + 700)
    })
    
}


function activeAgain () {
    document.querySelector(".tetris").style.display = "none";
    document.querySelector(".my-result").style.display = "flex";
    document.querySelector(".again").style.display = "flex";
    document.querySelector(".top10").style.display = "flex";
    document.querySelector(".end").style.display = "flex";
    document.querySelector(".title-top").style.display = "flex";
    document.querySelector(".title-top").style.zIndex = "99999999";
    document.querySelector(".again").style.zIndex = "99999999";
    
}

document.querySelector(".title-top").addEventListener("click", event => {
    saveLocalStorage()
    document.querySelector(".title-top").style.display = "none";
    document.querySelector(".top10").style.filter = "none";



    localStorage.setItem("numberGame", JSON.stringify(user)); 
 
   if(user.length <= 10) {
    for(let i = 0; i < user.length; i++) {
        let obj = user[i];
        document.querySelector(".moves" + String(i + 1)).innerHTML = String(obj.moves);
        document.querySelector(".points" + String(i + 1)).innerHTML = String(obj.points);
        
    }
   }
   let j = 1;
   if(user.length > 10) {
    for(let i = user.length - 10; i < user.length; i++) {
        let obj = user[i];
        document.querySelector(".moves" + String(j)).innerHTML = String(obj.moves);
        document.querySelector(".points" + String(j)).innerHTML = String(obj.points);   
        j++;
    }
   }
  
    
    

})
document.querySelector(".again").addEventListener("click", event => {
    
location.reload()
})
let user = [];
function saveLocalStorage() { 

    
   
    let local = JSON.parse(localStorage.getItem("numberGame"));
    
    if(local != null) {
        let i = local.length - 1;
        user.push(...local);
    }
    user.push({
        moves: countTetrom + 1,
        points: countPoints
    })
}


console.log(`
    1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-5.md;
    \n
    2. Deploy: https://rolling-scopes-school.github.io/ranika23-JSFEPRESCHOOL2023Q2/image-gallery/ ;
    \n
    3. Done 28.09.2023 / deadline 02.10.2023;
    \n
    4. Score : 70/60;
    \n
    1) Вёрстка(10/10): 
    \n
    - (5/5) реализован интерфейс игры; 
    \n
    - (5/5) в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс;
    \n
    2) (10/10) Логика игры. Ходы, перемещения фигур, другие действия игрока подчиняются определённым свойственным игре правилам;
    \n
    3) (10/10) Реализовано завершение игры при достижении игровой цели;
    \n
    4) (10/10)  По окончанию игры выводится её результат: количество ходов, набранные баллы;
    \n
    5) (10/10)  Есть таблица результатов, в которой сохраняются результаты 10 последних игр (хранится в local storage);
    \n
    6) (10/10)  Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов;
    \n
    7) (10/10)  Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения;
    \n
`);
