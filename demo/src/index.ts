import Audio from '../../src/';
import song from './song.mp3';

const getVolume = (element: HTMLInputElement) => Number(element.value) / 100;

const range = <HTMLInputElement>document.getElementById('range');
const buttonPlay = document.getElementById('bt-play');
const audio = Audio({ file: song, loop: true, volume: 1 });

buttonPlay.addEventListener('click', () => {
  audio.play();
  buttonPlay.setAttribute('disabled', 'disabled');
});

range.addEventListener('change', (e: Event) => {
  const volume = getVolume(e.target as HTMLInputElement);
  audio.setVolume(volume);
});