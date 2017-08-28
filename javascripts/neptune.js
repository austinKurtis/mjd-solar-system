"use strict";

console.log("neptune.js");

function outputTo(domElement) {
  domElement.append(`
<h1>Saturn</h1>
<p>September 23, 1846</p>
<p>1.024 × 10^26 kg</p>
<p>15,299 mi</p>
<p>2.795 billion mi</p>
<p>80%±3.2% hydrogen, 19%±3.2% helium, 1.5%±0.5% methane, 0.019% hydrogen deuteride, 0.00015% ethane</p>
<p>Triton, Laomedeia, S/2004 N 1, Nereid, Halimede</p>
<p>Dr Zoidberg</p>`);
}

module.exports = {outputTo};