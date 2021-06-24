const button = document.querySelector('.popup_button');
const popup = document.querySelector('#popup');
const blur_popup = document.querySelector('#blur_popup');
const close_popup = document.querySelector('.close');
button.addEventListener('click', () => {
    popup.classList.add('active');
    blur_popup.classList.add('active');
});

close_popup.addEventListener('click', () => {
    popup.classList.remove('active');
    blur_popup.classList.remove('active');
});

blur_popup.addEventListener('click', () => {
    popup.classList.remove('active');
    blur_popup.classList.remove('active');
});