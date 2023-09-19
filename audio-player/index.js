let songNum = 0;

// background of page
const PAGE_1 = document.querySelector(".bachground-page1")
const PAGE_2 = document.querySelector(".bachground-page2")
const PAGE_3 = document.querySelector(".bachground-page3")
const pageList = [PAGE_1, PAGE_2, PAGE_3]

function backGround() {
    for(let i = 0; i < pageList.length; i++) {
        if (i === songNum) {
            pageList[i].style.opacity = "1";
            pageList[i].style.zIndex = "1";
        }
        else {
            pageList[i].style.opacity = "0";
            pageList[i].style.zIndex = "0";
        }
    }
}


// images for songs
const IMG_1 = document.querySelector(".play-image1")
const IMG_2 = document.querySelector(".play-image2")
const IMG_3 = document.querySelector(".play-image3")
const imgList = [IMG_1, IMG_2, IMG_3]

function playImg() {
    for(let i = 0; i < imgList.length; i++) {
        if (i === songNum) {
            imgList[i].style.display = "flex";
        }
        else {
            imgList[i].style.display = "none";
        }
    }
}



// titles for songs
const TITLE_1 = document.querySelector(".song-title1")
const TITLE_2 = document.querySelector(".song-title2")
const TITLE_3 = document.querySelector(".song-title3")
const titleList = [TITLE_1, TITLE_2, TITLE_3]

function songTitle() {
    for(let i = 0; i < titleList.length; i++) {
        if (i === songNum) {
            titleList[i].style.display = "flex";
        }
        else {
            titleList[i].style.display = "none";
        }
    }
}


// songs
const AUDIO_1 = new Audio("assets/audio/song-1.mp3");
const AUDIO_2 = new Audio("assets/audio/song-2.mp3");
const AUDIO_3 = new Audio("assets/audio/song-3.mp3");


// buttons
const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const BUTTON = document.querySelector(".button-play");
const BACK= document.querySelector(".back");
const NEXT = document.querySelector(".next");
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
    backGround()
    playImg()
    songTitle()
}

function playBack() {
    songNum -= 1;
    if(songNum > 2) songNum = 0;
    if(songNum < 0) songNum = 2;
    playAudioBack()  
    backGround() 
    playImg()
    songTitle()
}

BACK.addEventListener("click", playBack);
NEXT.addEventListener("click", playNext);





