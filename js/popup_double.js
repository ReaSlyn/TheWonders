const button_1 = document.querySelector('#button_1');
const button_2 = document.querySelector('#button_2');
const popup_1 = document.querySelector('#popup_1');
const popup_2 = document.querySelector('#popup_2');
const blur_popup = document.querySelector('#blur_popup');
const close_1 = document.querySelector('.close_1');
const close_2 = document.querySelector('.close_2');
button_1.addEventListener('click', () => {
    popup_1.classList.add('active');
    blur_popup.classList.add('active');
  });

button_2.addEventListener('click', () => {
    popup_2.classList.add('active');
    blur_popup.classList.add('active');
});

blur_popup.addEventListener('click', () => {
    popup_1.classList.remove('active');
    popup_2.classList.remove('active');
    blur_popup.classList.remove('active');
});

close_1.addEventListener('click', () => {
    popup_1.classList.remove('active');
    blur_popup.classList.remove('active');
});

close_2.addEventListener('click', () => {
    popup_2.classList.remove('active');
    blur_popup.classList.remove('active');
});