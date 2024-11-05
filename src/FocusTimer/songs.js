
const songNature = new Audio('./assets/songs/Floresta.wav');
const songSnow = new Audio('./assets/songs/Chuva.wav');
const songStore = new Audio('./assets/songs/Cafeteria.wav');
const songFire = new Audio('./assets/songs/Lareira.wav');
const buttonPress = new Audio('./assets/songs/button-press.wav');
const kitchenTimer = new Audio('./assets/songs/kitchen-timer.mp3');

songNature.name = 'songNature';
songSnow.name = 'songSnow';
songStore.name = 'songStore';
songFire.name = 'songFire';
buttonPress.name = 'buttonPress';
kitchenTimer.name = 'kitchenTimer';

const songs = [songNature, songSnow, songStore, songFire];


export function playSong(songToPlay) {

    let playingSongs = songs.filter(song => !song.paused);

    songs.forEach(song => { 
        song.loop = false;
        song.pause();
        song.currentTime = 0;
    });

    let song = songs.find(song => song.name === songToPlay);

    if (playingSongs.filter(song => song.name === songToPlay).length == 0){
        song.loop = true;
        song.play();
    }
    
}

export function buttonPressSound() {
    buttonPress.play();
}

export function kitchenTimerSound() {
    kitchenTimer.play();
}