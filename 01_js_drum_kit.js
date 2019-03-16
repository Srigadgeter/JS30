function playSound(e) {
    const specifiedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const selectedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!specifiedKey) return;
    // console.log(selectedAudio, specifiedKey);
    selectedAudio.currentTime = 0;
    selectedAudio.play();
    specifiedKey.classList.add('playing');
}

removeTransition = function(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    // console.log(e);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);