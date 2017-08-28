"use strict";

console.log("main.js");

let earth = require('../javascripts/earth.js'),
	jupiter = require('../javascripts/jupiter.js'),
	mars = require('../javascripts/mars.js'),
	mercury = require('../javascripts/mercury.js'),
	neptune = require('../javascripts/neptune.js'),
	saturn = require('../javascripts/saturn.js'),
	uranus = require('../javascripts/uranus.js'),
	venus = require('../javascripts/venus.js');

earth.outputTo($("#earth"));
jupiter.outputTo($("#jupiter"));
mars.outputTo($("#mars"));
mercury.outputTo($("#mercury"));
neptune.outputTo($("#neptune"));
saturn.outputTo($("#saturn"));
uranus.outputTo($("#uranus"));
venus.outputTo($("#venus"));