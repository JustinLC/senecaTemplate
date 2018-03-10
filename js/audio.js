//create an array of all of the sound links.  If it has a sound class, we add it to keys
const keys = document.querySelectorAll('.sound');
//create an array off all of the nav elements.  If its in the header navigtion and its an <a/> we add it to instruments
const instruments = document.querySelectorAll('header>nav>a');

//the clickSound function waits for a click on an <a> tag that has the class sound
function clickSound(e){
  //e.target is the sound the user clicked on, dataset['sound'] looks for the value of data-sound in the element the user clicked
  //summary:  soundKey, holds the name of the sound we want to play
  let soundKey = e.target.dataset['sound'];
  //audio uses querySelector to find the <audio> tag with the same data-sound as the link the user clicked on
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  //now that we have the audio tag, we tell it to start playing from 0
  audio.currentTime = 0;
  audio.play();
}

//the swtichInstrument function waits for a click on a nav element
function switchInstrument(e){
  //e.preventDefault() tells the page not to reload
  e.preventDefault();
  //we define inst1 and inst2 to represent they instrument1 and 2 sections from our page
  let inst1 = document.querySelector('#instrument1');
  let inst2 = document.querySelector('#instrument2');
  //instrument holds the value of data-instrument from the link the user clicked on
  let instrument = e.target.dataset['instrument'];
  //if the user clicked on instrument1, we turn on instrument 1 and turn off instrument2
  if(instrument=="instrument1"){
    inst1.style.display = "flex";
    inst2.style.display = "none";
    //return tells the function to stop running
    return;
  }
  //if the user didn't select instrument1, they end up here, where we turn off instrument1 and turn on instrument2
  inst1.style.display = "none";
  inst2.style.display = "flex";
}

//this command looks at the keys array.  It goes through each entry and adds a listener for click events
//if a click event happens, it calls the function named clickSound
keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

//this command looks at the instruments array(array that holds a tags in the nav)
//we instruct each of the nav links to look out for clicks
//if they get clicked on, they call switchInstrument
instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});
