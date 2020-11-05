// Filename: codex.js
// Author: Kyle C. Larson
// Purpose: To help one prepare to answer short interviews
// License: GNU General Public License 3 (GPL-3.0)
const div = document.getElementById('bodyDiv');

function gridPrint(str, gridcontainer) {
	for (let i = 0; i < str.length; i++) {
		const newDiv = document.createElement('div');
		newDiv.className = 'grid-item';
		newDiv.innerHTML = str[i];
		gridcontainer.appendChild(newDiv);
	}
}
var rows = 150;
var columns = 80;
var dotcount = rows*columns;

for (let i = 0; i < dotcount; i++) {
	gridPrint('.', div);
}