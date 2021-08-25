import { numsNegativeArray } from "./array.js";

// console.log(numsNegativeArray);

numsNegativeArray.sort();
// console.log(numsNegativeArray);

const maxProduct = (numsNegativeArray = []) => {
	const sorter = (a, b) => b - a;
	numsNegativeArray.sort(sorter);
	console.log(numsNegativeArray);

	let product1 = 1,
		product2 = 1;
	let len = numsNegativeArray.length - 1;

	for (let i = len; i > len - 3; i--) {
		console.log((product1 = product1 * numsNegativeArray[i]));

		return (product1 = product1 * numsNegativeArray[i]);
		// console.log(
		// 	numsNegativeArray[0] * numsNegativeArray[1] * numsNegativeArray[2]
		// );
	}

	product2 =
		numsNegativeArray[0] * numsNegativeArray[1] * numsNegativeArray[len];

	// console.log(product2);

	return Math.max(product1, product2);
};

console.log(maxProduct(numsNegativeArray));
