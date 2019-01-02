

var $note = document.getElementById('note');
var $pitch = document.getElementById('pitch');
var tuner;
var voice = new Wad({
    source: 'mic',
    volume: 1
});

function logPitch(){
    console.log(tuner.pitch, tuner.noteName);
    requestAnimationFrame(logPitch);
    if(tuner.noteName){
        $note.innerHTML = tuner.noteName;
    }
    $pitch.innerHTML = tuner.pitch||'';
};

function detectTune(){
    if(!Wad.micConsent){
        return setTimeout(detectTune, 100);
    }
    tuner = new Wad.Poly();
    tuner.add(voice);
    voice.play({volume: 1});
    tuner.updatePitch();
    requestAnimationFrame(logPitch);
}

detectTune();