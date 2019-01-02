

var $note = document.getElementById('note');
var $pitch = document.getElementById('pitch');

var rafId;

var logPitch = function(){
    // console.log(tuner.pitch, tuner.noteName);
    rafId = requestAnimationFrame(logPitch);
    if(tuner.noteName){
        $note.innerHTML = tuner.noteName;
    }
    $pitch.innerHTML = tuner.pitch;
};
var voice = new Wad({
    source  : 'mic',
    volume: 1,
    // reverb  : {
    //     wet : .4
    // },
    // filter  : {
    //     type      : 'highpass',
    //     frequency : 700
    // },
    // panning : -.2
});
var tuner = new Wad.Poly();
// var logPitch = function(){
//     console.log(tuner.pitch, tuner.noteName);
//     document.getElementById('output').innerHTML = tuner.noteName;
// };
// tuner.setVolume(0) // mute the tuner to avoid feedback
tuner.add(voice);
voice.play({
    volume: 1
});
tuner.updatePitch();
requestAnimationFrame(logPitch);