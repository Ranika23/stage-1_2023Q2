let url = "https://api.unsplash.com/search/photos?query=positive&per_page=15&orientation=landscape&extras=url_m&client_id=bkCQC4wOwsc9T57LkS2rhG5sCWLCVZkHB4FlJZeKkNQ";


const SEARCH_INPUT = document.querySelector(".search");
const IMAGES_CONTAINER = document.querySelector(".images-container");
const SEARCH_BUTTON = document.querySelector(".button-search");
const CLOSE_BUTTON = document.querySelector(".button-close");

function focusSet() {
    SEARCH_INPUT.focus();
}

function searchNot() {
    SEARCH_INPUT.addEventListener ("input", event => {
        if (SEARCH_INPUT.value === "") {
            SEARCH_BUTTON.style.display = "block";
            CLOSE_BUTTON.style.display = "none";
        }
        if (SEARCH_INPUT.value.length > 0) {
            SEARCH_BUTTON.style.display = "none";
            CLOSE_BUTTON.style.display = "block";
        }
    })
}
searchNot()

function searchClose() {
    if(SEARCH_INPUT.value.length > 0) {
        SEARCH_BUTTON.style.display = "none";
        CLOSE_BUTTON.style.display = "block";
    }
    else {
        SEARCH_BUTTON.style.display = "block";
        CLOSE_BUTTON.style.display = "none";
    }
}


SEARCH_INPUT.addEventListener ("keydown", event => {
    if(event.keyCode === 13) {
        searchStart()
    }  
})

SEARCH_BUTTON.addEventListener("click", event => {
searchStart()
})

CLOSE_BUTTON.addEventListener("click", event => {
SEARCH_INPUT.value = "";
SEARCH_BUTTON.style.display = "block";
CLOSE_BUTTON.style.display = "none";
})




function searchStart() {
    IMAGES_CONTAINER.innerHTML = "";
    let searchImg = SEARCH_INPUT.value;
    url = "https://api.unsplash.com/search/photos?query=" + searchImg + "&per_page=15&orientation=landscape&extras=url_m&client_id=bkCQC4wOwsc9T57LkS2rhG5sCWLCVZkHB4FlJZeKkNQ";    
    console.log(url)
    getData(url)
    searchClose()

}



function showData(data) {
    let img = document.createElement("img");
    img.classList.add("img-gallery")
    img.src = data.urls.regular;
    img.alt = `image`;
    IMAGES_CONTAINER.append(img);



    /*const div = document.createElement("div");
    div.classList.add("img-gallery");
    div.style.backgroundImage = `url(${data.urls.regular})`;
  
    document.querySelector(".images-container").append(div);*/
}

async function getData(url) {
   
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.results[0].urls.regular);
    for(let i = 0; i < data.results.length; i++) {
        let result = data.results[i]
        showData(result)
    }
}
getData(url)



