const menu_button = document.querySelector('.burger_menu_button');
const menu = document.querySelector('#modal');
const blur = document.querySelector('#blur');
const close_button = document.querySelector('#close');
let menuOpen = false;
menu_button.addEventListener('click', () => {
  if(!menuOpen) {
    menu_button.classList.add('open');
    menu.classList.add('opened');
    blur.classList.add('active');
    menuOpen = true;
  }});

close_button.addEventListener('click', () => {
    if(menuOpen) {
    menu_button.classList.remove('open');
    menu.classList.remove('opened');
    blur.classList.remove('active');
    menuOpen = false;
  }
});

blur.addEventListener('click', () => {
    if(menuOpen) {
    menu_button.classList.remove('open');
    menu.classList.remove('opened');
    blur.classList.remove('active');
    menuOpen = false;
  }
});