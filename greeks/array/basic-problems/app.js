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

// const arr = [12, 35, 1, 10, 34, 1];
// console.log(secondLargest(arr));
// console.log(secondLargest(arr));

/**
 * ! Problem: https://www.geeksforgeeks.org/remove-duplicates-sorted-array/
 */

function removeDuplicates(arr) {
	let newSet = new Set();
	// let newArr = [];

	let idx = 0;
	for (let i = 0; i < arr.length; i++) {
		if (!newSet.has(arr[i])) {
			newSet.add(arr[i]);
			arr[idx++] = arr[i];
		}
	}

	// newSet.forEach((val) => newArr.push(val));

	return idx;
}

function removeDuplicates2(arr) {
	if (arr.length <= 1) {
		return arr.length;
	}

	let idx = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1]) {
			arr[idx++] = arr[i];
		}
	}

	return idx;
}

// const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// const newSize = removeDuplicates2(arr);
// console.log(arr.slice(0, newSize));

/**
 * ! Problem: https://www.geeksforgeeks.org/generating-subarrays-using-recursion/
 */

function subarrays(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			let subarray = [];
			for (let k = i; k <= j; k++) {
				subarray.push(arr[k]);
			}
			result.push(subarray);
		}
	}

	return result;
}

function printSubArrays(arr, start, end) {
	if (end == arr.length) return;
	else if (start > end) printSubArrays(arr, 0, end + 1);
	else {
		let subArray = [];
		for (let i = start; i < end; i++) {
			subArray.push(arr[i]);
		}
		subArray.push(arr[end]);
		console.log(subArray);
		printSubArrays(arr, start + 1, end);
	}
	return;
}

var arr = [1, 2, 3];
printSubArrays(arr, 0, 0);
