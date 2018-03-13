import sound1 from "../assets/sound/sound1.mp3";
import sound2 from "../assets/sound/sound2.mp3";
import sound3 from "../assets/sound/sound3.mp3";
import sound4 from "../assets/sound/sound4.mp3";

export const SOUNDS = {
  sound0: sound1,
  sound1: sound2,
  sound2: sound3,
  sound3: sound4
};

export const setTime = (func, time=2000) => {
  setTimeout(() => {
    func();
  }, time);
}

/* Play sound */
export const playAudio = (num) => {
  let audio = document.getElementById(`audio${num}`);
  audio.play();
  setTime(() => audio.load())
}