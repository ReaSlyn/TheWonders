const button = document.querySelector('.popup_button');
const popup = document.querySelector('#popup');
const blur = document.querySelector('#blur_popup');
const close = document.querySelector('.close');
button.addEventListener('click', () => {
    popup.classList.add('active');
    blur.classList.add('active');
});

close.addEventListener('click', () => {
    popup.classList.remove('active');
    blur.classList.remove('active');
});

blur.addEventListener('click', () => {
    popup.classList.remove('active');
    blur.classList.remove('active');
});