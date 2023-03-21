export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFlames
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function soundForest() {
    buttonSoundForest.classList.contains('active') 
    ? buttonSoundForest.classList.remove('active')
    : buttonSoundForest.classList.add('active')
  } 

  function soundRain() {
    buttonSoundRain.classList.contains('active') 
    ? buttonSoundRain.classList.remove('active')
    : buttonSoundRain.classList.add('active')
  }

  function soundCoffeeShop() {
    buttonSoundCoffeeShop.classList.contains('active') 
    ? buttonSoundCoffeeShop.classList.remove('active')
    : buttonSoundCoffeeShop.classList.add('active')
  }

  function soundFlames() {
    buttonSoundFlames.classList.contains('active') 
    ? buttonSoundFlames.classList.remove('active')
    : buttonSoundFlames.classList.add('active')
  }

  return {
    play,
    pause,
    reset,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFlames
  }
}
