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
    takeData(url)
    searchClose()

}



function displayData(data) {
    let img = document.createElement("img");
    img.classList.add("img-gallery")
    img.src = data.urls.regular;
    img.alt = "img-search";
    IMAGES_CONTAINER.append(img);
}

async function takeData(url) {
   
    const get = await fetch(url);
    const data = await get.json();
    for(let i = 0; i < data.results.length; i++) {
        let result = data.results[i]
        displayData(result)
    }
}
takeData(url)



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
    - (5/5) на странице есть несколько фото и строка поиска; 
    \n
    - (5/5) в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс;
    \n
    2) (10/10) При загрузке приложения на странице отображаются полученные от API изображения;
    \n
    3) (10/10) Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API;
    \n
    4) Поиск (30/30): 
    \n
    - (5/5) при открытии приложения курсор находится в поле ввода; 
    \n
    - (5/5) есть placeholder;
    \n
    - (5/5) автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами); 
    \n
    - (5/5) поисковый запрос можно отправить нажатием клавиши Enter;
    \n
    - (5/5) после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода; 
    \n
    - (5/5) в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder;
    \n
    5) (10/10) Высокое качество оформления приложения и дополнительный, не предусмотренный в задании, функционал, улучшающий качество приложения (активный значок "лупа", автоматическая смена значков "лупа" и "крестик" в зависимости от наличия или отсутствия символов в поле ввода);
`);