const maxProduct = function (nums) {
	const max1 = nums[0],
		min1 = nums[0];
	const result = nums[0];
	for (let i = 1; i < nums.length; i++) {
		max1 *= nums[i];
		min1 *= nums[i];
		//If nums[i] negative swap max1 and min1

		if (nums[i] < 0) {
			const tmp = max1;
			max1 = min1;
			min1 = tmp;
		}

		max1 = Math.max(max1, nums[i]);
		min1 = Math.min(min1, nums[i]);
		result = Math.max(res, max1);
	}
	return result;
};
