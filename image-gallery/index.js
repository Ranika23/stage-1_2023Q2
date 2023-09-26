const url = "https://api.unsplash.com/search/photos?query=\x22spring\x22&per_page=15&orientation=landscape&extras=url_m&client_id=bkCQC4wOwsc9T57LkS2rhG5sCWLCVZkHB4FlJZeKkNQ";
/*const url1 = "https://api.unsplash.com/photos/random?query=spring&client_id=bkCQC4wOwsc9T57LkS2rhG5sCWLCVZkHB4FlJZeKkNQ";*/

function showData(data) {
     const img = document.createElement("img");
    img.classList.add("img-gallery")
    img.src = data.urls.regular;
    img.alt = `image`;
    document.querySelector(".images-container").append(img);



    /*const div = document.createElement("div");
    div.classList.add("img-gallery");
    div.style.backgroundImage = `url(${data.urls.regular})`;
  
    document.querySelector(".images-container").append(div);*/
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.results[0].urls.regular);
    for(let i = 0; i < data.results.length; i++) {
        let result = data.results[i]
        showData(result)
    }
}
getData()

