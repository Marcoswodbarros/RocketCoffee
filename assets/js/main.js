let openMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.header__menu--close');

openMenu.addEventListener("click", menuOpened);
closeMenu.addEventListener("click", menuClosed);

function menuOpened () {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";    
}


function menuClosed () {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
}