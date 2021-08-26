import { numsArray } from "./array.js";

numsArray.sort();

const arraySorter = (a, b) => b - a;
numsArray.sort(arraySorter);

let positive = "";

for (let i = 0; i < 3; i++) {
	positive = numsArray[0] * numsArray[1] * numsArray[2];
}

export function createHtml2() {
	document.getElementById("model-2").innerHTML = `
	<p>Considering the array: [1, 10, 2, 6, 5, 3]</p>
	<h2>${positive}</h2>
   `;
}
