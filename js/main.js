const audio = document.querySelector('audio[data-key="eagle"]')

const eagle = () => {
  audio.play();
}

window.addEventListener('click touch', eagle);

