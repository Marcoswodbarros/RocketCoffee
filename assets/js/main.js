let openMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.header__menu--close');
let nav = document.querySelector('nav');
let h1 = document.querySelector('h1');
let mainButton = document.querySelector('.main__button--container');
let mainTexts = document.querySelector('.main__texts--container');
let mainImages = document.querySelector('.main__images--container');

openMenu.addEventListener("click", menuOpened);
closeMenu.addEventListener("click", menuClosed);

function menuOpened () {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
    h1.style.display = "none"; 
    mainButton.style.display = "none";
    mainTexts.style.display = "none"; 
    mainImages.style.display = "none"; 
}


function menuClosed () {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    nav.style.display = "none";
    h1.style.display = "inline";
    mainButton.style.display = "flex";
    mainTexts.style.display = "block"; 
    mainImages.style.display = "flex";
}