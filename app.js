let music = document.getElementById("music");
let musicOn = document.getElementById('playing');
let musicOff = document.getElementById('stopped');

function runBody(){
    music.play();
    music.muted = false;
    musicOn.classList.add('show')
    musicOff.classList.remove('show')
}
function stopMusic(){
    music.muted = true;
    musicOn.classList.remove('show')
    musicOff.classList.add('show')
}

window.onload = function(){
    document.getElementById('toast').classList.add('showToast');
    setTimeout(() => {
        document.getElementById('toast').classList.remove('showToast')
    }, 3000);
}