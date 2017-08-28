"use strict";

console.log("mercury.js");

function outputTo(domElement) {
  domElement.append(`<h1>Mercury</h1>
<p>1639</p>
<p>3.285 × 10^23 kg</p>
<p>1,516 mi</p>
<p>35.98 million mi</p>
<p>42% molecular oxygen, 29.0% sodium, 22.0% hydrogen, 6.0% helium, 0.5% potassium</p>
<p>None</p>
<p>Zim, Buck Rogers</p>`);
}

module.exports = {outputTo};