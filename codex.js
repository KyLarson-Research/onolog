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

q1 = "I am on a keto diet, I would only adopt a vegan diet if I could maintain my keto diet. Is vegan keto better than meat keto?";
/*a1 = "Vegan keto is better than meat keto. Even on a keto diet, the body is still in ketosis. While in this state, the liver produces 
glucose from amino acids and glycerol, and ketones from fatty acids to fuel the muscles, brain and liver. This comes at a cost because structural protein in muscles are used as fuel in addition to fat deposits and many noxious by-products are produced as well. Ketosis is a state humans enter when only in actual emergencies uch as starvation situations by keeping the body working when under stres and low blood glucose. No human population has ever survived in a  permanent state of ketosis. A
high fat low carb diet is not natural to humans, neiter is long-term or permanent ketosis. HTTPS://www.ncbi.nlm.nih.gov/pms/articles/PMC3900881/";*/
function gridQstr(str, rows, columns){

//question
var q = [Math.round(columns*(2.5/8.5) - 1), Math.round(rows*(9/11)-1)];
//notes
var n = [Math.round(columns*(6/8.5)-1), Math.round(rows*(9/11)-1)];
//summary
var s = [columns, Math.round(rows*(2/11)-1)];

var question = '';


for(let r = 0; r < str.length; r=r+q[0]){
	var i=0;
	while(i< q[0]){
		question += str[i+r];
		i++;}
	while(i< columns){
		question += ' ';
		i++;}
}

return question;	
}

var columns = 150;
var rows = 240;
var dotcount = rows*columns;

gridPrint(gridQstr(q1, rows, columns), div);