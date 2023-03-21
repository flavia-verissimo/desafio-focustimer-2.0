import {
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames
} from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudioForest = new Audio("../sons/Floresta.wav")
  const bgAudioRain = new Audio("../sons/Chuva.wav")
  const bgAudioCoffeeShop = new Audio("../sons/Cafeteria.wav")
  const bgAudioFlames = new Audio("../sons/Lareira.wav")

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFlames.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function audioForest() {
    buttonSoundForest.classList.contains('active')
    ? bgAudioForest.play()
    : bgAudioForest.pause()
    }

  function audioRain() {
    buttonSoundRain.classList.contains('active')
    ? bgAudioRain.play()
    : bgAudioRain.pause()
  }
  
  function audioCoffeeShop() {
    buttonSoundCoffeeShop.classList.contains('active')
    ? bgAudioCoffeeShop.play()
    : bgAudioCoffeeShop.pause()
  }

  function audioFlames() {
    buttonSoundFlames.classList.contains('active')
    ? bgAudioFlames.play()
    : bgAudioFlames.pause()
  }
    

  return {
    pressButton,
    timeEnd,
    audioForest,
    audioRain,
    audioCoffeeShop,
    audioFlames
  }

  }



