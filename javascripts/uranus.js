"use strict";

console.log("uranus.js");

function outputTo(domElement) {
  domElement.append(`
<h1>Uranus</h1>
<p>March 13, 1781</p>
<p>8.681 × 10^25 kg</p>
<p>15,759 mi</p>
<p>1.784 billion mi</p>
<p>83 ± 3% hydrogen, 15 ± 3% helium, 2.3% methane, 0.009%</p>
<p> Titania, Miranda, Umbriel, Ariel, Oberon, Trinculo, Margaret</p>
<p>Proktos</p>`);
}

module.exports = {outputTo};