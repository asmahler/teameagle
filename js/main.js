const audio = document.querySelector('audio[data-key="eagle"]')

const eagle = () => {
  audio.play();
}

window.addEventListener('click', eagle);
window.addEventListener('touchstart', eagle);

