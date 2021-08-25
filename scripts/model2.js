import { numsArray } from "./array.js";

numsArray.sort();
// console.log(numsArray);

const arraySorter = (a, b) => b - a;
numsArray.sort(arraySorter);
// console.log(numsArray);

for (let i = 0; i < 3; i++) {
	// console.log(numsArray[0] * numsArray[1] * numsArray[2]);
}
