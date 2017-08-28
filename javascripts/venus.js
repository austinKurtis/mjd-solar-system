"use strict";

console.log("venus.js");

function outputTo(domElement) {
  domElement.append(
`<h1>Venus</h1>
<p>1610</p>
<p>4.8675×1024 kg</p>
<p>3,760 mi</p>
<p>67.24 million mi</p>
<p>96.5% carbon dioxide, 3.5% nitrogen, 0.015% sulfur dioxide, 0.007% argon, 0.002% water vapour, 0.0017% carbon monoxide, 0.0012% helium, 0.0007% neon</p>
<p>Satelite of Love</p>
<p>Ford Prefect, Zaphod Beeblebrox</p>`);
}

module.exports = {outputTo};