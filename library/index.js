//burger-menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.getElementById("id-header").classList.toggle("open")
    });
    document.getElementById("nav-menu").addEventListener("click", event => {
        event._isClickMenu = true;
    });
    document.getElementById("burger").addEventListener("click", event => {
        event._isClickMenu = true;
    })
    document.body.addEventListener("click", event => {
        if (event._isClickMenu) return;
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link1").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link2").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link3").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link4").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    document.getElementById("link5").addEventListener("click", event => {
        document.getElementById("id-header").classList.remove("open");
    })
    })
// menu-no-auth    
    document.getElementById("login").addEventListener("click", event => {
        document.getElementById("drop-menu-profile-no-auth").classList.toggle("open");
        document.getElementById("drop-menu-profile-no-auth").style.zIndex = "1";
    });
    document.getElementById("login").addEventListener("click", event => {
        event._isClickLogin = true;
    })
    document.body.addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })
    document.getElementById("burger").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })
    document.getElementById("drop-link-log-in").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })
    document.getElementById("drop-link-register").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-no-auth").classList.remove("open");
    })

// modal-register
document.getElementById("drop-link-register").addEventListener("click", event => {
    document.getElementById("modal-register-wrapper").classList.remove("close");
    document.getElementById("modal-register-wrapper").classList.add("open");    
});
document.getElementById("drop-link-register").addEventListener("click", event => {
    event._isClickLogin = true;
})
document.getElementById("modal-register").addEventListener("click", event => {
    event._isClickLogin = true;
})
document.getElementById("get-card-button-sign-up").addEventListener("click", event => {
    document.getElementById("modal-register-wrapper").classList.remove("close");
    document.getElementById("modal-register-wrapper").classList.add("open");
});
document.getElementById("get-card-button-sign-up").addEventListener("click", event => {
    event._isClickLogin = true;
})
document.getElementById("modal-register-wrapper").addEventListener("click", event => {
    if (event._isClickLogin) return;

    document.getElementById("modal-register-wrapper").classList.add("close");
    document.getElementById("modal-register-wrapper").classList.remove("open");
    
})
document.getElementById("close-btn").addEventListener("click", event => {
    if (event._isClickLogin) return;
    document.getElementById("modal-register-wrapper").classList.add("close");
    document.getElementById("modal-register-wrapper").classList.remove("open");
    
})

 
// check reader's card in Library Card
if(localStorage.getItem("user") !== null) {
    document.getElementById("form-button").disabled = false; 

    // click form's button 
    document.getElementById("gold-form").addEventListener("submit", event => {
        let checkLocalStorage = JSON.parse(localStorage.getItem("user"))
        let inputTextFormName = document.getElementById("input-text-form-name").value;
        let inputTextFormNumbercard = document.getElementById("input-text-form-numbercard").value;
        let count = 0;
        
        for(let key in checkLocalStorage) {
            if(inputTextFormName === checkLocalStorage[key]){ 
                count += 1}
            if(inputTextFormNumbercard === checkLocalStorage[key]){
                count += 1}
            if(count == 2) {    
                document.getElementById("form-button").style.opacity = "0";
                document.getElementById("main-librarycard-login-in-account-profile").style.opacity = "1";
                document.getElementById("main-librarycard-login-in-account-profile").style.zIndex = "1";
                // timeout
                function buttonTimeout() {
                    document.getElementById("form-button").style.opacity = "1";
                    document.getElementById("main-librarycard-login-in-account-profile").style.opacity = "0";
                    document.getElementById("main-librarycard-login-in-account-profile").style.zIndex = "0";
                    document.getElementById("input-text-form-name").value = ""; 
                    document.getElementById("input-text-form-numbercard").value = "";  
                }
                setTimeout(buttonTimeout, 10000);      
            }
        }
    })
}







document.getElementById("modal-register-form").addEventListener("submit", event => {
    
    //generation random digital
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let RandomNumberCard = String(getRandomNumber(99999999, 9999999999).toString(16));
    if(RandomNumberCard.length < 9) {
        while(true) {
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        RandomNumberCard = String(getRandomNumber(99999999, 9999999999).toString(16));
        if(RandomNumberCard.length === 9) {break}
        }
    }

    //save input.value in localStorage
    let FirstLast = document.getElementById("register-first-name").value + " " + document.getElementById("register-last-name").value;
    let First = document.getElementById("register-first-name").value
    let Last = document.getElementById("register-last-name").value;
    let EmailValue = document.getElementById("register-email").value;
    let PasswordValue = document.getElementById("register-password").value;
    
    let user = {
       email: EmailValue,
       password: PasswordValue,
       cardnumber: RandomNumberCard,
       firstlast: FirstLast
    }; 
    localStorage.setItem("user", JSON.stringify(user)); 
    
    //reset to default input.value
    document.getElementById("register-last-name").value = "";
    document.getElementById("register-first-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("modal-register-wrapper").classList.add("close");
    document.getElementById("modal-register-wrapper").classList.remove("open");
    
    //setting login-icon
    document.getElementById("login-reg").style.display = "block";
    document.getElementById("login-reg").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("login-reg").innerHTML = First[0] + Last[0];
    document.getElementById("login-reg").setAttribute("title", First + " " + Last)

    // menu-with-auth    
    document.getElementById("login-reg").addEventListener("click", event => {
        document.getElementById("drop-menu-profile-with-auth").classList.toggle("open");
        document.getElementById("drop-menu-profile-with-auth").style.zIndex = "1";
    });
    document.getElementById("login-reg").addEventListener("click", event => {
        event._isClickLoginReg = true;
    })
    document.body.addEventListener("click", event => {
        if (event._isClickLoginReg) return;
        document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
    })
    document.getElementById("burger").addEventListener("click", event => {
        if (event._isClickLoginReg) return;
        document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
    })
    document.getElementById("drop-link-my-profile").addEventListener("click", event => {
        if (event._isClickLoginReg) return;
        document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
    })
    document.getElementById("drop-link-log-out").addEventListener("click", event => {
        if (event._isClickLogin) return;
        document.getElementById("drop-menu-profile-with-auth").classList.remove("open");
    })

    // return after log out
    document.getElementById("drop-link-log-out").addEventListener("click", event => {
        location.reload()  

    })  
})


    
// slider for section About
const CARRET_LEFT = document.getElementById("carret-left")
const CARRET_RIGHT = document.getElementById("carret-right")
const ABOUT_IMAGES = document.getElementById("about-images")

let i = 0

const POSITION = {
    0:"0",
    1:"-102.1%",
    2:"-204.3%",
    3:"-306.5%",
    4:"-408.7%"
}
const CHEACKED = () => {
    for (i = 0; i < 5; i++){
    if (document.querySelector("#about-slide-tablet").children[i].checked == true) {
        break
    }
} 
}
CHEACKED()
if (i < 4 && i > 0) {
    CHEACKED()  
CARRET_RIGHT.classList.add("carret-hover");
CARRET_LEFT.classList.add("carret-hover");
CARRET_LEFT.classList.remove("carret-not-hover");
CARRET_RIGHT.classList.remove("carret-not-hover");
}
if (i === 4) {
    CHEACKED() 
    CARRET_RIGHT.classList.remove("carret-hover");
    CARRET_RIGHT.classList.add("carret-not-hover");
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");   
}
if (i === 0) {
    CHEACKED()  
    CARRET_LEFT.classList.remove("carret-hover");
    CARRET_LEFT.classList.add("carret-not-hover");
    CARRET_RIGHT.classList.add("carret-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");
}    
CARRET_RIGHT.addEventListener("mouseover", event => {
CHEACKED()
if (i < 4 && i > 0) {
    CHEACKED()  
CARRET_RIGHT.classList.add("carret-hover");
CARRET_LEFT.classList.add("carret-hover");
CARRET_LEFT.classList.remove("carret-not-hover");
CARRET_RIGHT.classList.remove("carret-not-hover");
CARRET_RIGHT.removeEventListener("mouseover")
}
if (i === 4) {
    CHEACKED() 
    CARRET_RIGHT.classList.remove("carret-hover");
    CARRET_RIGHT.classList.add("carret-not-hover");
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");
    CARRET_RIGHT.removeEventListener("mouseover")
}
CHEACKED()
if (i === 0) {
    CHEACKED()  
    CARRET_LEFT.classList.remove("carret-hover");
    CARRET_LEFT.classList.add("carret-not-hover");
    CARRET_RIGHT.classList.add("carret-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");
    CARRET_RIGHT.removeEventListener("mouseover")
}
})

CARRET_LEFT.addEventListener("mouseover", event => {
    CHEACKED()
    if (i < 4 && i > 0) {
        CHEACKED()  
    CARRET_RIGHT.classList.add("carret-hover");
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");  
    CARRET_RIGHT.removeEventListener("mouseover")
    }
    if (i === 4) {
        CHEACKED() 
        CARRET_RIGHT.classList.remove("carret-hover");
        CARRET_RIGHT.classList.add("carret-not-hover");
        CARRET_LEFT.classList.add("carret-hover");
        CARRET_LEFT.classList.remove("carret-not-hover");
        CARRET_RIGHT.removeEventListener("mouseover")
    }
    CHEACKED()
    if (i === 0) {
        CHEACKED()  
        CARRET_LEFT.classList.remove("carret-hover");
        CARRET_LEFT.classList.add("carret-not-hover");
        CARRET_RIGHT.classList.add("carret-hover");
        CARRET_RIGHT.classList.remove("carret-not-hover");
        CARRET_RIGHT.removeEventListener("mouseover")
    }
    })

CARRET_LEFT.addEventListener("click", event => {
    CHEACKED()
    if (i > 0) {
        CARRET_RIGHT.classList.add("carret-hover");
        CARRET_LEFT.classList.add("carret-hover");
        CARRET_LEFT.classList.remove("carret-not-hover");
        CARRET_RIGHT.classList.remove("carret-not-hover");
        i -= 1
        ABOUT_IMAGES.style.left = POSITION[i]
        document.querySelector("#about-slide-tablet").children[i].checked = true;           
    }
    CHEACKED()
    if (i === 0) {
        CARRET_LEFT.classList.remove("carret-hover");
        CARRET_LEFT.classList.add("carret-not-hover");
    }    
})

CARRET_RIGHT.addEventListener("click", event => {
    CHEACKED()
    CARRET_LEFT.classList.add("carret-hover");
    CARRET_LEFT.classList.remove("carret-not-hover");
    CARRET_RIGHT.classList.remove("carret-not-hover");
    if (i < 4) { 
        i += 1
        ABOUT_IMAGES.style.left = POSITION[i]  
        document.querySelector("#about-slide-tablet").children[i].checked = true;  
    } 
    if (i >= 4) {
        CARRET_RIGHT.classList.remove("carret-hover");
        CARRET_RIGHT.classList.add("carret-not-hover");
    }
    CARRET_RIGHT.removeEventListener("click", event => {}) 
})
 


//slider for section Favorites
document.getElementById("input-radio1").addEventListener("click", event => {
    document.getElementById("input-radio1").checked = true;
    document.getElementById("label1").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("spring-favorites").style.opacity = "0";
    document.getElementById("summer-favorites").style.opacity = "0";
    document.getElementById("autumn-favorites").style.opacity = "0";
    document.getElementById("winter-favorites").style.opacity = "1";
})
document.getElementById("input-radio2").addEventListener("click", event => {
    document.getElementById("input-radio2").checked = true;
    document.getElementById("label2").style.cursor = "default";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("winter-favorites").style.opacity = "0";
    document.getElementById("summer-favorites").style.opacity = "0";
    document.getElementById("autumn-favorites").style.opacity = "0";
    document.getElementById("spring-favorites").style.opacity = "1";
})
document.getElementById("input-radio3").addEventListener("click", event => {
    document.getElementById("input-radio3").checked = true;
    document.getElementById("label3").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("label4").style.cursor = "pointer";
    document.getElementById("winter-favorites").style.opacity = "0";
    document.getElementById("spring-favorites").style.opacity = "0";
    document.getElementById("autumn-favorites").style.opacity = "0";
    document.getElementById("summer-favorites").style.opacity = "1";
})
document.getElementById("input-radio4").addEventListener("click", event => {
    document.getElementById("input-radio4").checked = true;
    document.getElementById("label4").style.cursor = "default";
    document.getElementById("label2").style.cursor = "pointer";
    document.getElementById("label3").style.cursor = "pointer";
    document.getElementById("label1").style.cursor = "pointer";
    document.getElementById("winter-favorites").style.opacity = "0";
    document.getElementById("spring-favorites").style.opacity = "0";
    document.getElementById("summer-favorites").style.opacity = "0";
    document.getElementById("autumn-favorites").style.opacity = "1";
})



console.log(`
    1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part2.md;
    \n
    2. Deploy: https://rolling-scopes-school.github.io/ranika23-JSFEPRESCHOOL2023Q2/library/;
    \n
    3. Done 12.08.2023 / deadline 14.08.2023;
    \n
    4. Score : 50/50;
    \n
    Вёрстка соответствует макету. Ширина экрана 768px: 
    \n
    - (2/2) блок <header>; 
    \n
    - (2/2) секция Welcome;
    \n
    - (4/4) секция About: добавлены новые элементы в виде стрелок и сделан переход на 5 точек вместо 3х, расстояние от картинки до точек сделано по макету (балл не снижается);
    \n
    - (2/2) секция Favorites;
    \n
    - (2/2) в соответствии с условием ТЗ кнопка, находившаяся в состоянии 'own' на Desktop, осталась в том же состоянии и на Tablet;
    \n
    - (4/4) секция CoffeShop;
    \n
    - (4/4) секция Contact;
    \n
    - (4/4) секция LibraryCard;
    \n
    - (2/2) блок <footer>;
    \n
    Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется:
    \n
    - (4/4) нет полосы прокрутки при ширине страницы от 1440рх до 640рх; 
    \n
    - (4/4) элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх; 
    \n
    - (4/4) элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх;
    \n
    На ширине экрана 768рх реализовано адаптивное меню: 
    \n
    - (2/2) Версия Tablet, отступ иконки юзера и открытого меню от правого края соответствует макету. Сам крест отцентрирован по центральной позиции бургер-иконки. При переходе из одного состояния в другое ничего не прыгает. Само меню прижато к правому краю целиком. Цвет выпавшего меню совпадает с цветом полоски навигации; 
    \n
    - (4/4) при нажатии на бургер-иконку плавно появляется адаптивное меню;
    \n
    - (2/2) при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран;
    \n
    - (2/2) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, само адаптивное меню при этом плавно скрывается;
    
    - (2/2) размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверено на PixelPerfect; 
`);