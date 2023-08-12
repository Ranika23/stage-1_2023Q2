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