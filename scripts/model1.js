import { numsNegativeArray } from "./array.js";

// console.log(numsNegativeArray);

numsNegativeArray.sort();
// console.log(numsNegativeArray);

// let maxProd = 0;
//------------------------------------------------------------//
// const sorter = (a, b) => b - a;
// numsNegativeArray.sort(sorter);
// console.log(numsNegativeArray);
//---------------------------------------------------------------//
let arr = numsNegativeArray;
console.log(arr);

const HighestOf3 = (arr) => {
	let highest = Math.max(arr[0], arr[1]);
	console.log(highest);
	let lowest = Math.min(arr[0], arr[1]);
	console.log(lowest);
	let highestProductOf2 = arr[0] * arr[1];
	console.log(highestProductOf2);
	let lowestProductOf2 = arr[0] * arr[1];
	console.log(lowestProductOf2);
	let highestProductOf3 = arr[0] * arr[1] * arr[2];
	console.log(highestProductOf3);

	for (let i = 2; i < arr.length; i++) {
		let current = arr[i];
		console.log(current);
		highestProductOf3 = Math.max(
			highestProductOf3,
			current * highestProductOf2,
			current * lowestProductOf2
		);

		console.log(highestProductOf3);

		highestProductOf2 = Math.max(
			highestProductOf2,
			current * highest,
			current * lowest
		);

		console.log(highestProductOf2);

		lowestProductOf2 = Math.min(
			lowestProductOf2,
			current * highest,
			current * lowest
		);

		console.log(lowestProductOf2);

		highest = Math.max(highest, current);
		console.log(highest);

		lowest = Math.min(lowest, current);

		console.log(lowest);
	}

	return highestProductOf3;
};
console.log(HighestOf3(arr));

// const maxProduct = (numsNegativeArray = []) => {
// 	const sorter = (a, b) => b - a;
// 	numsNegativeArray.sort(sorter);
// 	console.log(numsNegativeArray);
// };

// console.log(maxProduct(numsNegativeArray));
