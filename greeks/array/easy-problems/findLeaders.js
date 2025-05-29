// https://www.geeksforgeeks.org/javascript-program-for-leaders-in-an-array/

function printLeaders(array) {
	let leaders = [];
	for (let i = 0; i < array.length; i++) {
		let j;
		for (j = i + 1; j < array.length; j++) {
			if (array[i] <= array[j]) {
				break;
			}
		}
		if (j === array.length) {
			leaders.push(array[i]);
		}
	}
	return leaders;
}

const arr = [16, 17, 4, 3, 5, 2];
// console.log(printLeaders(arr));

//! Another Approach
function anotherApproach(array) {
	let right_max = array[array.length - 1];
	let lastRight = array[array.length - 1];
	let newArray = [];

	for (let i = array.length - 2; i >= 0; i--) {
		if (array[i] > right_max) {
			right_max = array[i];
			newArray.push(array[i]);
		}
	}

	return [lastRight, ...newArray];
}

console.log(anotherApproach(arr));
