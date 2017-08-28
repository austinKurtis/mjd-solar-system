"use strict";

console.log("earth.js");

function outputTo(domElement) {
  domElement.append(
`<h1>Earth</h1>
<p>400,000,000 bc</p>
<p>5.97237×1024 kg</p>
<p>510072000 km2</p>
<p>92.96 million mi</p>
<p>78.08% nitrogen, 20.95% oxygen, 0.930% argon, 0.0402% carbon dioxide</p>
<p>Moon</p>
<p>Ford Prefect, Zaphod Beeblebrox</p>
</div>`
  	);
}

module.exports = {outputTo};