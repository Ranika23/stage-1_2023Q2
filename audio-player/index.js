let songNum = 0;

//animation-play
function animationPlay() {
    document.querySelector(".wrapper-player").style.opacity = "1";
    document.querySelector(".audio-visualizer").style.opacity = "1";
} 
function animationPause() {
    document.querySelector(".wrapper-player").style.opacity = "0";
    document.querySelector(".audio-visualizer").style.opacity = "";
} 

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


// autoplay
playList[songNum].addEventListener("ended", playNext)

//time-duration
function songTime() {
    let timeSong = Math.floor(playList[songNum].duration / 60) + ":" + (Math.floor(playList[songNum].duration,2) - (Math.floor(playList[songNum].duration / 60) * 60))
document.querySelector(".play-time").innerHTML = timeSong
}





//progress-line
const PROGRESS = document.querySelector(".line-progress");
const CONTAINER_PROGRESS = document.querySelector(".container-progress")
const TIME = document.querySelector(".start-time");
function progressUpdate(event) {
    const {duration, currentTime} = event.srcElement;
    const progressLine = (currentTime / duration) * 100;
    PROGRESS.style.width = progressLine + "%";
    //time-current
    if (Math.floor(currentTime, 2) - (Math.floor(currentTime / 60) * 60) < 10) {
        let timeCurrentSong = Math.floor(currentTime / 60) + ":0" + (Math.floor(currentTime, 2) - (Math.floor(currentTime / 60) * 60))
        TIME.innerHTML = timeCurrentSong;
    }
    if (Math.floor(currentTime, 2) - (Math.floor(currentTime / 60) * 60) >= 10) {
        let timeCurrentSong = Math.floor(currentTime / 60) + ":" + (Math.floor(currentTime, 2) - (Math.floor(currentTime / 60) * 60))
        TIME.innerHTML = timeCurrentSong;
    }
}
playList[songNum].addEventListener("timeupdate", progressUpdate)



//progress click
function progressClick(event) {
    const WIDTH_PROGRESS = this.clientWidth;
    const CLICK = event.offsetX;
    const DURATION = playList[songNum].duration;
    playList[songNum].currentTime = (CLICK / WIDTH_PROGRESS) * DURATION;
    playList[songNum].addEventListener("ended", playNext)
}
CONTAINER_PROGRESS.addEventListener("click", progressClick)









//play-pause
function toggleBtn() {
    BUTTON.classList.toggle("pause");
}
let isPlay = false;
function playAudio() {
    songTime()
    backGround()
    playImg()
    songTitle()
    if (isPlay === false) {
        playList[songNum].play();
        isPlay = true;
        toggleBtn()
        animationPlay()
    }  
    else if (isPlay === true) {
        isPlay = false;
        playList[songNum].pause();
        toggleBtn()
        animationPause()
    } 
    // autoplay
    playList[songNum].addEventListener("ended", playNext) 
}
BUTTON.addEventListener("click", playAudio);






// switch buttons next-back
function playAudioNext() {
    playList[songNum].addEventListener("timeupdate", progressUpdate)
    songTime()
    animationPlay()
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
    playList[songNum].addEventListener("timeupdate", progressUpdate)
    songTime()
    animationPlay()
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
    // autoplay
    playList[songNum].addEventListener("ended", playNext)
}

function playBack() {
    songNum -= 1;
    if(songNum > 2) songNum = 0;
    if(songNum < 0) songNum = 2;
    playAudioBack()  
    backGround() 
    playImg()
    songTitle()
    // autoplay
    playList[songNum].addEventListener("ended", playNext)
}

BACK.addEventListener("click", playBack);
NEXT.addEventListener("click", playNext);




//menu
const MENU_BUTTON = document.querySelector(".menu-button");
const MENU = document.querySelector(".menu")
const M_TITLE_1 = document.querySelector(".menu-title1")
const M_TITLE_2 = document.querySelector(".menu-title2")
const M_TITLE_3 = document.querySelector(".menu-title3")
MENU_BUTTON.addEventListener("click", event => {
    MENU.classList.toggle("open");
    event._isClickMenu = true;
})
document.body.addEventListener("click", event => {
    if (event._isClickMenu) return;
    MENU.classList.remove("open");
})

function clickMenu() {
    playList[songNum].addEventListener("timeupdate", progressUpdate)
    songTime()
    animationPlay()
    if (isPlay === false) {
        playList[songNum].currentTime = 0;
        playList[songNum].play();
        isPlay = true;
        toggleBtn()
    }  
    else if (isPlay === true) { 
        playList[songNum].currentTime = 0;
        playList[songNum].play();        
    }  
    backGround()
    playImg()
    songTitle()
}
M_TITLE_1.addEventListener("click", event => {
    songNum = 0;
    clickMenu()
    playList[1].pause()
    playList[2].pause()
})
M_TITLE_2.addEventListener("click", event => {
    songNum = 1;
    clickMenu()
    playList[0].pause()
    playList[2].pause()

})
M_TITLE_3.addEventListener("click", event => {
    songNum = 2;
    clickMenu()
    playList[0].pause()
    playList[1].pause()

})




// autoplay
playList[songNum].addEventListener("ended", playNext)
