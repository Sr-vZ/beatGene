var myAudioContext = new AudioContext();

var p = Peaks.init({
    container: document.querySelector('#peaks-container'),
    mediaElement: document.querySelector('audio'),
    audioContext: myAudioContext
});

p.on('peaks.ready', function () {
    // do something when the waveform is displayed and ready
});