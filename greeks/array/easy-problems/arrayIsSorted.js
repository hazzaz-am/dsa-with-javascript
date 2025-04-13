/**
 * * Check if an array is sorted.
 * https://www.geeksforgeeks.org/javascript-program-to-check-an-array-is-sorted-or-not/
 */

/**
 * Using the Brute Force Approach - Done
 * Using the every() Method
 * Using sort() Method
 * Using Recursion
 * Using Array.reduce()
 * Using Array.from() and every()
 */

// 1. Using the Brute Force Approach
function checkSorted(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

console.log(checkSorted([1, 30, 40, 2, 60])); // true
console.log(checkSorted([5, 4, 3, 2, 1])); // false

// 2. Using the every() Method
function isSorted(arr) {
	return arr.every((value, idx, array) => idx === 0 || value >= array[idx - 1]);
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false

// 3. Using sort() Method
function checkSortedBySort(arr) {
	const sortedArray = [...arr].sort((a, b) => a - b);
	return JSON.stringify(arr) === JSON.stringify(sortedArray);
}

console.log(checkSortedBySort([1, 2, 3, 4, 5])); // true
console.log(checkSortedBySort([1, 3, 2, 4, 5])); // false

// 4. Using Recursion

function isSortedRec(arr, i = 0) {
	if (i === arr.length - 1) {
		return true;
	}

	if (arr[i] > arr[i + 1]) {
		return false;
	}

	return isSortedRec(arr, i + 1);
}

console.log(isSortedRec([1, 2, 3, 4, 5])); // true
console.log(isSortedRec([1, 3, 2, 4, 5])); // false

// 5. Using Array.reduce()
function isSortedReduce(arr) {
	return arr.reduce((isSorted, value, index) => {
		return isSorted && (index === 0 || arr[index - 1] <= value);
	}, true);
}

console.log(isSortedReduce([1, 2, 3, 4, 5])); // true
console.log(isSortedReduce([1, 3, 2, 4, 5])); // false

// 6. Using Array.from() and every()
function isSortedFrom(arr) {
	return Array.from({ length: arr.length - 1 }, (_v, i) => i).every(
		(idx) => arr[idx] <= arr[idx + 1]
	);
}

console.log(isSortedFrom([1, 2, 3, 4, 5])); // true
console.log(isSortedFrom([1, 3, 2, 4, 5])); // false
