import { plusMinusArray } from "./array.js";
plusMinusArray.sort();

const HighestOf3 = (plusMinusArray) => {
	let highest = Math.max(plusMinusArray[0], plusMinusArray[1]);
	let lowest = Math.min(plusMinusArray[0], plusMinusArray[1]);
	let highestProductOf2 = plusMinusArray[0] * plusMinusArray[1];
	let lowestProductOf2 = plusMinusArray[0] * plusMinusArray[1];
	let highestProductOf3 =
		plusMinusArray[0] * plusMinusArray[1] * plusMinusArray[2];

	for (let i = 2; i < plusMinusArray.length; i++) {
		let current = plusMinusArray[i];
		highestProductOf3 = Math.max(
			highestProductOf3,
			current * highestProductOf2,
			current * lowestProductOf2
		);

		highestProductOf2 = Math.max(
			highestProductOf2,
			current * highest,
			current * lowest
		);

		lowestProductOf2 = Math.min(
			lowestProductOf2,
			current * highest,
			current * lowest
		);

		highest = Math.max(highest, current);
		lowest = Math.min(lowest, current);
	}

	return highestProductOf3;
};

HighestOf3(plusMinusArray);

export function createHtml1() {
	document.getElementById("model-1").innerHTML = `
	<h1>${HighestOf3(plusMinusArray)}</h1>
   `;
}
