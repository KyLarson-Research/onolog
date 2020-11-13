// Filename: codex.js
// Author: Kyle C. Larson
// Purpose: To help one prepare to answer short interviews
// License: GNU General Public License 3 (GPL-3.0)
const div = document.getElementById('bodyDiv');

var x = document.createElement("FORM");
x.setAttribute("id", "myForm");
div.appendChild(x);

var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("value", "enter a question");
y.setAttribute("mAy", 3);
document.getElementById("myForm").appendChild(y);