import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames
} from "./elements.js"

export default function({controls, timer, sound}) {
  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonMore.addEventListener('click', function() {
    controls.reset()
    timer.more()
    sound.pressButton()
  })

  buttonLess.addEventListener('click', function() {
    controls.reset()
    timer.less()
    sound.pressButton()
  })

  buttonSoundForest.addEventListener('click', function() {
    controls.soundForest()
    sound.pressButton()
    sound.audioForest()
  })

  buttonSoundRain.addEventListener('click', function() {
    controls.soundRain()
    sound.pressButton()
    sound.audioRain()
  })

  buttonSoundCoffeeShop.addEventListener('click', function() {
    controls.soundCoffeeShop()
    sound.pressButton()
    sound.audioCoffeeShop()
  })

  buttonSoundFlames.addEventListener('click', function() {
    controls.soundFlames()
    sound.pressButton()
    sound.audioFlames()
  })

}
