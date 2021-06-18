const menu_button = document.querySelector('.burger_menu_button');
const menu = document.querySelector('#modal');
const blur = document.querySelector('#blur');
const close_button = document.querySelector('#close');
let menuOpen = false;
menu_button.addEventListener('click', () => {
  if(!menuOpen) {
    menu_button.classList.add('open');
    menu.classList.add('active');
    blur.classList.add('active');
    menu.classList.remove('close');
    blur.classList.remove('close');
    menuOpen = true;
  }});

close_button.addEventListener('click', () => {
    if(menuOpen) {
    menu_button.classList.remove('open');
    menu.classList.remove('active');
    blur.classList.remove('active');
    menu.classList.add('close');
    blur.classList.add('close');
    menuOpen = false;
  }
});

blur.addEventListener('click', () => {
    if(menuOpen) {
    menu_button.classList.remove('open');
    menu.classList.remove('active');
    blur.classList.remove('active');
    menu.classList.add('close');
    blur.classList.add('close');
    menuOpen = false;
  }
});