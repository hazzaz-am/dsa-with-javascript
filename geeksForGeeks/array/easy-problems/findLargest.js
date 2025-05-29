/**
 * ! https://www.geeksforgeeks.org/javascript-program-to-find-largest-element-in-an-array/
 */

/**
 * 1. Using the reduce() Method
 * 2. Using the Spread Operator and Math.max() Method
 * 3. Using for Loop
 * 4. Using the sort() method
 * 5. Using a ForEach Loop
 */

/**
 * @param {Array} arr
 */
function usingReduceMethod(arr) {
	return arr.reduce((acc, curr) => (acc < curr ? curr : acc), arr[0]);
}

function usingSpreadOperator(arr) {
	return Math.max(...arr);
}

function usingForLoop(arr) {
	let largest = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) largest = arr[i];
	}

	return largest;
}

function usingSortMethod(arr) {
	arr.sort((a, b) => a - b);
	return arr[arr.length - 1];
}

function usingForEachLoop(arr) {
	let largest = arr[0];
	arr.forEach((val) => {
		if (val > largest) {
			largest = val;
		}
	});
	return largest;
}

const arr = [10, 5, 20, 8, 15];
// console.log(usingForEachLoop(arr));



