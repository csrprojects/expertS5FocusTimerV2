import { playSong } from "./FocusTimer/songs.js";

let themeCode = 'snow';

const buttonToggle = document.getElementById('toggle-mode')

const srMsg = () => {
    const buttons = buttonToggle.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        for (let j = 0; j < buttons[i].getElementsByTagName('span').length; j++) {
            buttons[i].querySelector('span.sr-only').textContent = `Ativar ${buttons[i].dataset.theme} mode!`;
        }
    }
}


buttonToggle.addEventListener('click', (event) => {
    let selectedBtn = event.target.closest('button');

    let htmlClass = document.documentElement.classList;
    htmlClass.remove('snow', 'nature', 'store', 'fire');

    let allBtn = buttonToggle.getElementsByTagName('button')
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].classList.remove('active');
    }

    selectedBtn.classList.add('active');
    srMsg();

    switch (selectedBtn.querySelector('.material-symbols-outlined').textContent) {
        case 'nature':
            document.documentElement.classList.add('nature');
            themeCode = 'nature';
            selectedBtn.querySelector('.sr-only').textContent = 'nature mode ativado!';
            playSong('songNature');
            break
        case 'cloudy_snowing':
            document.documentElement.classList.add('snow');
            themeCode = 'snow';
            selectedBtn.querySelector('.sr-only').textContent = 'snow mode ativado!';
            playSong('songSnow');
            break
        case 'storefront':
            document.documentElement.classList.add('store')
            themeCode = 'store';
            selectedBtn.querySelector('.sr-only').textContent = 'store mode ativado!';
            playSong('songStore');
            break
        case 'local_fire_department':
            document.documentElement.classList.add('fire');
            selectedBtn.querySelector('.sr-only').textContent = 'fire mode ativado!';
            themeCode = 'fire'
            playSong('songFire');
            break
        default:
            document.documentElement.classList.add('snow');
            selectedBtn.querySelector('.sr-only').textContent = 'snow mode ativado!';
            themeCode = 'snow';
            playSong('songSnow');
            break
    }
})