"use strict";

console.log("saturn.js");

function outputTo(domElement) {
  domElement.append(`
<h1>Saturn</h1>
<p>1610</p>
<p>5.683 × 10^26 kg</p>
<p>36,184 mi</p>
<p>888.2 million mi</p>
<p>78.08% nitrogen, 20.95% oxygen, 0.930% argon, 0.0402% carbon dioxide</p>
<p> Titan, Enceladus, Mimas, Iapetus, Dione, Rhea, Pandora</p>
<p>Galileo</p>`);
}

module.exports = {outputTo};