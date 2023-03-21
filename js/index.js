import Controls from "./controls.js" 
import Timer from "./timer.js"
import Sound from "./sound.js"
import Events from "./event.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundForest,
  buttonSoundCoffeeShop,
  buttonSoundRain,
  buttonSoundFlames,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})





