// Filename: codex.js
// Author: Kyle C. Larson
// Purpose: To help one prepare to answer short interviews
// License: GNU General Public License 3 (GPL-3.0)
// https://www.gnu.org/licenses/gpl-3.0.en.html
const titleTA = document.getElementById("titleTextArea");
var repeat = 0;
var TIME_DELAY = 1000;
titleTA.value = "Welcome To Kyle's Cornel Notes!";
//Change value after 1000 ms
let timerID = setTimeout(function () {
    titleTA.value = "TODO: Enter FileName, Author, Date";
}, TIME_DELAY);
const fs = require("fs");
document.getElementById("saveButton").onclick =  ()=> { save() };

function save() {
    
    console.log("Going to write into existing file");
    // Open a new file with name input.txt and write Simply Easy Learning! to it.
    fs.writeFile(titleTA.value + ".txt", document.getElementByID("myqForm").value + "\n" + document.getElementByID("myaForm").value, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        console.log("Let's read newly written data");
        // Read the newly written file and print all of its content on the console
        fs.readFile(titleTA.value+'.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    });
}