/**
 * ! Problem: https://www.geeksforgeeks.org/print-alternate-elements-of-an-array/
 */

// let arr = [10, 20, 30, 40, 50];

function alternatePrint(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i += 2) {
		newArr.push(arr[i]);
	}
	return newArr;
}

// console.log(alternatePrint(arr));

function getAlternatesRec(arr, idx, res) {
	if (idx < arr.length) {
		res.push(arr[idx]);
		getAlternatesRec(arr, idx + 2, res);
	}
}

function getAlternates(arr) {
	let res = [];
	getAlternatesRec(arr, 0, res);
	return res;
}

// console.log(getAlternates(arr));

/**
 * ! Problem: https://www.geeksforgeeks.org/linear-search/
 */

// let arr = [10, 20, 30, 40, 50];

function search(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}

	return -1;
}

// console.log(search(arr, 30));

/**
 * ! Problem: https://www.geeksforgeeks.org/program-to-find-largest-element-in-an-array/
 */

// let arr = [1000, 20, 300, 40, 5000000];

function largestNumber(arr) {
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

function findMax(arr, i) {
	if (i === arr.length - 1) {
		return arr[i];
	}

	let recMax = findMax(arr, i + 1);
	return Math.max(recMax, arr[i]);
}

function findLargest(arr) {
	return findMax(arr, 0);
}

function mxLibrary(arr) {
	return Math.max(...arr);
}

// console.log(mxLibrary(arr));

/**
 * ! Problem: https://www.geeksforgeeks.org/find-second-largest-element-array/
 */

function secondLargest(arr) {
	let maxValue = -1;
	let secMaxValue = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= maxValue) {
			secMaxValue = maxValue;
			maxValue = arr[i];
		} else {
			if (arr[i] > secMaxValue) {
				secMaxValue = arr[i];
			}
		}
	}

	return secMaxValue;
}

function getSecondLargest(arr) {
	arr.sort((a, b) => a - b);

	for (let i = arr.length - 2; i >= 0; i--) {
		if (arr[i] !== arr[arr.length - 1]) {
			return arr[i];
		}
	}

	return -1;
}

function getSecondLargest2(arr) {
	let largest = -1;
	let secondLargest = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > secondLargest && arr[i] !== largest) {
			secondLargest = arr[i];
		}
	}

	return secondLargest;
}

const arr = [12, 35, 1, 10, 34, 1];
// console.log(secondLargest(arr));
console.log(secondLargest(arr));
