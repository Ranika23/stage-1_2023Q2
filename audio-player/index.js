const AUDIO_1 = new Audio("assets/audio/song-1.mp3");
const AUDIO_2 = new Audio("assets/audio/song-2.mp3");
const AUDIO_3 = new Audio("assets/audio/song-3.mp3");


const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const BUTTON = document.querySelector(".button-play");

//play-pause
let isPlay = false;
function playAudio() {
    if (isPlay === false) {
        AUDIO_1.currentTime = 0;
        AUDIO_1.play();
        isPlay = true;
    }  
    else if (isPlay === true) {
        AUDIO_1.pause();
        isPlay = false;
    }  
}




//toggle play-pause
function toggleBtn() {
    BUTTON.classList.toggle("pause");
  }


BUTTON.addEventListener("click", toggleBtn);
BUTTON.addEventListener("click", playAudio);
