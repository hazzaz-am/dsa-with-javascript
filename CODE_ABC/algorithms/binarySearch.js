const binarySearch = (arr, value) => {
	let startValue = 0;
	let endValue = arr.length - 1;

	while (startValue <= endValue) {
		let middleValue = Math.round((startValue + endValue) / 2);

		if (value === arr[middleValue]) {
			return middleValue;
		}

		if (arr[middleValue] > value) {
			endValue = middleValue - 1;
		} else if (arr[middleValue] < value) {
			startValue = middleValue + 1;
		}
	}

	return -1;
};

console.log(binarySearch([2, 3, 4, 5, 7, 8, 9], 7));
