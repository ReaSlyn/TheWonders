const wonder_button = document.querySelector('#wonder_button');
const mentor_button = document.querySelector('#mentor_button');
const wonder = document.querySelector('#popup_wonder');
const mentor = document.querySelector('#popup_mentor');
const blur = document.querySelector('#blur_popup');
const close_1 = document.querySelector('.close_1');
const close_2 = document.querySelector('.close_2');
wonder_button.addEventListener('click', () => {
    wonder.classList.add('active');
    blur.classList.add('active');
  });

mentor_button.addEventListener('click', () => {
    mentor.classList.add('active');
    blur.classList.add('active');
});

blur_popup.addEventListener('click', () => {
    wonder.classList.remove('active');
    mentor.classList.remove('active');
    blur.classList.remove('active');
});

close_1.addEventListener('click', () => {
    wonder.classList.remove('active');
    blur.classList.remove('active');
});

close_2.addEventListener('click', () => {
    mentor.classList.remove('active');
    blur.classList.remove('active');
});