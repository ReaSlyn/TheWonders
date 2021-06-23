const toggle_1 = document.querySelector('#toggle_1');
const toggle_2 = document.querySelector('#toggle_2');
const toggle_3 = document.querySelector('#toggle_3');
const switch_1 = document.querySelector('#switch_1');
const switch_2 = document.querySelector('#switch_2');
const switch_3 = document.querySelector('#switch_3');
let switch_1_on = false;
let switch_2_on = false;
let switch_3_on = false;

toggle_1.addEventListener('click', () => {
    if (!switch_1_on) {
    switch_1.classList.add('on');
    switch_1.classList.remove('off');
    switch_1_on = true;
    document.getElementById('text_1').innerText = "Activé";
}else {
    switch_1.classList.remove('on');
    switch_1.classList.add('off');
    switch_1_on = false;
    document.getElementById('text_1').innerText = "Désactivé";
}
});

toggle_2.addEventListener('click', () => {
    if (!switch_2_on) {
    switch_2.classList.add('on');
    switch_2.classList.remove('off');
    switch_2_on = true;
    document.getElementById('text_2').innerText = "Activé";
}else {
    switch_2.classList.remove('on');
    switch_2.classList.add('off');
    switch_2_on = false;
    document.getElementById('text_2').innerText = "Désactivé";
}
});

toggle_3.addEventListener('click', () => {
    if (!switch_3_on) {
    switch_3.classList.add('on');
    switch_3.classList.remove('off');
    switch_3_on = true;
    document.getElementById('text_3').innerText = "Activé";
}else {
    switch_3.classList.remove('on');
    switch_3.classList.add('off');
    switch_3_on = false;
    document.getElementById('text_3').innerText = "Désactivé";
}
});