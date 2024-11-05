import state from './state.js'
import * as timer from './timer.js'
import { buttonPressSound } from './songs.js'
import * as el from './elements.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown();
    buttonPressSound();


}

export function reset(e) {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    state.minutes = 0;
    state.seconds = 0;
    timer.updateDisplay()

    if (!e) {
    buttonPressSound();
    }
}

export function setPlus() {
    if (el.minutes >= 60) {
        return
    } 
    
    state.minutes = state.minutes + 5;
    state.seconds = Number(el.seconds.textContent);
    if (state.minutes >= 60) {
        state.minutes = 60;
        state.seconds = 0;
    }

    buttonPressSound();
    timer.updateDisplay();
}

export function setMinus() {
    if (state.minutes <= 5) {
        return
    }

    state.minutes = state.minutes - 5;
    state.seconds = Number(el.seconds.textContent);

    buttonPressSound();
    timer.updateDisplay();
}
