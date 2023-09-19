const AUDIO_1 = new Audio("assets/audio/song-1.mp3");
const AUDIO_2 = new Audio("assets/audio/song-2.mp3");
const AUDIO_3 = new Audio("assets/audio/song-3.mp3");


const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const BUTTON = document.querySelector(".button-play");
const BACK= document.querySelector(".back");
const NEXT = document.querySelector(".next");


let songNum = 0;
const playList = [AUDIO_1, AUDIO_2, AUDIO_3]

//play-pause
function toggleBtn() {
    BUTTON.classList.toggle("pause");
}

let isPlay = false;
function playAudio() {
    if (isPlay === false) {
        playList[songNum].currentTime = 0;
        playList[songNum].play();
        isPlay = true;
        toggleBtn()
    }  
    else if (isPlay === true) {
        isPlay = false;
        playList[songNum].pause();
        
        toggleBtn()
    }  
}




//toggle play-pause


//switch button play-pause

BUTTON.addEventListener("click", playAudio);


// switch buttons next-back
function playAudioNext() {
    if (isPlay === false) {
        playList[songNum].currentTime = 0;
        playList[songNum].play();
        isPlay = true;
        toggleBtn()
    }  
    else if (isPlay === true) {
        songNum > 0 ? playList[songNum - 1].pause(): playList[2].pause(); 
        playList[songNum].currentTime = 0;
        playList[songNum].play();        
    }  
}
function playAudioBack() {
    if (isPlay === false) {
        playList[songNum].currentTime = 0;
        playList[songNum].play();
        isPlay = true;
        toggleBtn()
    }  
    else if (isPlay === true) {
        songNum < 2 ? playList[songNum + 1].pause(): playList[0].pause(); 
        playList[songNum].currentTime = 0;
        playList[songNum].play();        
    }  
}
function playNext() {
    songNum += 1;
    if(songNum > 2) songNum = 0;
    if(songNum < 0) songNum = 2;
    playAudioNext()
}

function playBack() {
    songNum -= 1;
    if(songNum > 2) songNum = 0;
    if(songNum < 0) songNum = 2;
    playAudioBack()   
}

BACK.addEventListener("click", playBack);
NEXT.addEventListener("click", playNext);