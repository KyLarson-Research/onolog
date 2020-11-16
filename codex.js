// Filename: codex.js
// Author: Kyle C. Larson
// Purpose: To help one prepare to answer short interviews
// License: GNU General Public License 3 (GPL-3.0)
const qdiv = document.getElementById('questDiv');

var xq = document.createElement("FORM");
xq.setAttribute("id", "myqForm");
qdiv.appendChild(xq);

var yq = document.createElement("INPUT");
yq.setAttribute("type", "text");
yq.setAttribute("value", "enter a question");
yq.setAttribute("my", 3);
document.getElementById("myqForm").appendChild(yq);


const adiv = document.getElementById('ansDiv');
var xa = document.createElement("FORM");
xa.setAttribute("id", "myaForm");
adiv.appendChild(xa);

var ya = document.createElement("INPUT");
ya.setAttribute("type", "text");
ya.setAttribute("value", "enter a answer enter a answerenter a answerenter a answer");
ya.setAttribute("class", "submissionfield");
ya.setAttribute("wrap", "soft");

ya.setAttribute("my", 4);
ya.setAttribute("height", 400);
document.getElementById("myaForm").appendChild(ya);