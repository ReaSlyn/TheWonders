const signin_button = document.querySelector('#signin_button');
const register_button = document.querySelector('#register_button');
const signin_link = document.querySelector('#signin_link');
const register_link = document.querySelector('#register_link');
const popup_signin = document.querySelector('#sign_in');
const popup_register = document.querySelector('#register');
const blur = document.querySelector('#blur');
signin_button.addEventListener('click', () =>{
    popup_signin.classList.add('active');
    blur.classList.add('active');
})

register_button.addEventListener('click', () =>{
    popup_register.classList.add('active');
    blur.classList.add('active');
})

signin_link.addEventListener('click', () =>{
    popup_register.classList.remove('active');
    popup_signin.classList.add('active');
})

register_link.addEventListener('click', () =>{
    popup_signin.classList.remove('active');
    popup_register.classList.add('active');
})

blur.addEventListener('click', () =>{
    popup_register.classList.remove('active');
    popup_signin.classList.remove('active');
    blur.classList.remove('active');
})