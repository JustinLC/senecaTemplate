const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('header>nav>a');

function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  audio.currentTime = 0;
  audio.play();
}

function switchInstrument(e){
  e.preventDefault();
  let inst1 = document.querySelector('#instrument1');
  let inst2 = document.querySelector('#instrument2');
  let instrument = e.target.dataset['instrument'];
  if(instrument=="instrument1"){
    inst1.style.display = "flex";
    inst2.style.display = "none";
    return;
  }
  inst1.style.display = "none";
  inst2.style.display = "flex";
}

keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});
