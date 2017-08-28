"use strict";

console.log("mars.js");

function outputTo(domElement) {
  domElement.append(
`<h1>Mars</h1>
<p>1659</p>
<p>6.39 × 10^23 kg</p>
<p>2,106 mi</p>
<p>141.6 million mi</p>
<p>95.97% carbon dioxide, 1.93% argon, 1.89% nitrogen, 0.146% oxygen, 0.0557% carbon monoxide</p>
<p>Mariner, Viking, </p>
<p>Satan Claus, Mark Watney</p>`);
}

module.exports = {outputTo};