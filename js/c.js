const scribble = require('scribbletune');

let clip = scribble.clip({
    notes: scribble.scale('c', 'major', 3), // this works too ['c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3']
	pattern: 'x-'.repeat(8)
});

scribble.midi(clip, 'cscale.mid');

//import MIDI from 'midi.js'
var Tone = require('Tone')
//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");