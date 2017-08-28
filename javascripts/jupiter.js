"use strict";

console.log("jupiter.js");

function outputTo(domElement) {
  domElement.append(`<h1>Jupiter</h1>
<p>1610</p>
<p>1.898 × 10^27 kg</p>
<p>43,441 mi</p>
<p>483.8 million mi</p>
<p>89.8±2.0%hydrogen, 10.2±2.0%	helium, 0.3% methane, 0.026% ammonia</p>
<p>Io, Europa, Ganymede, and Callisto</p>
<p>Nerva Beacon, Dr. Frank Poole</p>`);
}

module.exports = {outputTo};